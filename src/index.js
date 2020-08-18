const Discord = require('discord.js')
const auth = require('../auth.json')
const getMinMax = require('./getMinMax')
const getRandomInt = require('./getRandomInt')

const client = new Discord.Client()
const DEFAULT_MIN = 1
const DEFAULT_MAX = 100

const logIn = async () => {
  try {
    await client.login(auth.token).catch((error) => {
      console.error(error)
      process.exit(1)
    })
  } catch (error) {
    console.error("couldn't login", error)
    process.exit(1)
  }
}

client.on('ready', (event) => {
  console.log('Connected!')
})

client.on('error', (error) => {
  console.error(error)
  process.exit(1)
})

client.on('disconnect', (event) => {
  console.error('disconnect', event)
  process.exit(1)
})

const sendMessage = (message, channelId) => {
  let channel = client.channels.find((c) => c.id === channelId)
  if (!channel) {
    console.error(`couldn't find channel ${channelId}`)
    return
  }

  channel.send(message)
}

client.on('message', (message) => {
  const { content, channel } = message
  const channelId = channel.id

  if (!content.startsWith('!roll')) {
    return
  }

  if (content.startsWith('!roll help')) {
    sendMessage(`
    # Manual for discord-roll
    !roll - get number between 1 and 100
    !roll min-max - get number between min and max
    !roll str1-str2-...- - get a random string
    `)
    return
  }

  if (content.includes('-')) {
    const interval = getMinMax(content)
    if (interval) {
      sendMessage(
        getRandomInt(interval.min, interval.max).toString(),
        channelId
      )
    } else {
      const strings = getStrings(content)
      if (strings) {
        sendMessage(strings[getRandomInt(0, strings.length - 1)], channelId)
      } else {
        sendMessage('invalid input, try again', channelId)
      }
    }
  } else {
    sendMessage(getRandomInt(DEFAULT_MIN, DEFAULT_MAX).toString(), channelId)
  }
})

logIn()

const Discord = require('discord.js')
const auth = require('../auth.json')
const getMinMax = require('./getMinMax')
const getRandomInt = require('./getRandomInt')

const CHANNEL_ID = '347374585500532738'
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

const sendMessage = (message) => {
  let channel = client.channels.find((c) => c.id === CHANNEL_ID)
  channel.send(message)
}

client.on('message', (message) => {
  const { content } = message
  if (message.channel.id !== CHANNEL_ID || !content.startsWith('!roll')) {
    return
  }

  if (content.startsWith('!roll help')) {
    sendMessage(`
    # Manual for discord-roll
    !roll - get number between 1 and 100
    !roll min-max - get number between min and max
    `)
    return
  }

  if (content.includes('-')) {
    const interval = getMinMax(content)
    if (interval) {
      sendMessage(getRandomInt(interval.min, interval.max).toString())
    } else {
      sendMessage('invalid input, try again')
    }
  } else {
    sendMessage(getRandomInt(DEFAULT_MIN, DEFAULT_MAX).toString())
  }
})

logIn()

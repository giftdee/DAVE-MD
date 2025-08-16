const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')

// Load .env if exists
if (fs.existsSync('.env')) require('dotenv').config({ path: path.join(__dirname, '.env') })

// 🔹 Ensure DATABASE_URL exists
const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is missing! Attach a Heroku Postgres addon and set DATABASE_URL.')
}

// 🔹 Setup Sequelize with Heroku Postgres
const sequelize = new Sequelize(DATABASE_URL, { logging: false })

// 🔹 Define Settings model
const Setting = sequelize.define('Setting', {
  key: { type: DataTypes.STRING, unique: true },
  value: { type: DataTypes.TEXT }
})

// 🔹 Initialize database
async function initDB() {
  try {
    await sequelize.sync()
    console.log(chalk.greenBright('✅ Database connected!'))
  } catch (e) {
    console.log(chalk.redBright('⚠️ Database init failed:'), e)
  }
}
initDB()

// 🔹 Helper functions
global.setSetting = async (key, value) => {
  try {
    await Setting.upsert({ key, value: JSON.stringify(value) })
    global[key] = value
  } catch (e) {
    console.log(chalk.redBright(`Failed to save setting "${key}"`))
  }
}

global.getSetting = async (key, defaultValue) => {
  try {
    const row = await Setting.findOne({ where: { key } })
    return row ? JSON.parse(row.value) : defaultValue
  } catch {
    return defaultValue
  }
}

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.SESSION_ID = process.env.SESSION_ID || '' 
global.owner = "254104260236"
global.developer = "254104260236"
global.bot = ""
global.devname = "Dave"
global.ownername = process.env.OWNER_NAME || 'Gifted Dave'
global.botname = "𝐃𝐀𝐕𝐄-𝐗𝐌𝐃"
global.versisc = "2"
global.packname = "𝐃𝐀𝐕𝐄-𝐗𝐌𝐃"

//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/254104260236"
global.linkyt = "https://www.youtube.com/Davke"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me"

//~~~~~~~~~~~ Settings Bot (dynamic from DB) ~~~~~~~~~~~//
async function loadBotSettings() {
  global.prefix = process.env.BOT_PREFIX || '.'
  global.autoRecording = await getSetting('autoRecording', false)
  global.autoTyping = await getSetting('autoTyping', false)
  global.autorecordtype = await getSetting('autorecordtype', false)
  global.autoread = await getSetting('autoread', false)
  global.autobio = await getSetting('autobio', true)
  global.anti92 = await getSetting('anti92', false)
  global.owneroff = await getSetting('owneroff', false)
  global.statusview = await getSetting('statusview', true)
}

// 🔹 Ensure settings are loaded before bot starts
global.botReady = loadBotSettings()

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://files.catbox.moe/lidsgj.jpg"
global.thumbown = "https://files.catbox.moe/lidsgj.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363400480173280@newsletter*"
global.channelname = "DAVE-XMD UPDATES"
global.channel = "https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ Developer Only!! ]` \n This feature is for developers only!!",
  owner: " `[ Owner Only!! ]` \n This feature is for owners only!!",
  group: " `[ Group Only!! ]` \n This feature is for group chats only!!",
  private: " `[ Private Only!! ]` \n This feature is for private chats only!!",
  admin: " `[ Admin Only!! ]` \n This feature is for admins only!!",
  botadmin: " `[ Bot Admin Only!! ]` \n This feature is for bot admins only!!",
  wait: " `[ Wait!! ]` \n Please wait, loading...",
  error: " `[ Error!! ]` \n An error occurred!!",
  done: " `[ Done!! ]` \n Process completed!!"
}

//~~~~~~~~~~~ Hot Reload ~~~~~~~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.greenBright(`${__filename} updated!`))
  delete require.cache[file]
  require(file)
})
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

// Load env
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

// 🔹 Path for db.json
const dbPath = path.join(__dirname, 'db.json')

// 🔹 Default structure
const defaultData = {
  autoRecording: false,
  autoTyping: false,
  autorecordtype: false,
  autoread: false,
  autobio: true,
  anti92: false,
  owneroff: false,
  statusview: true
}

// 🔹 Load db.json (or create if missing)
let db = defaultData
if (fs.existsSync(dbPath)) {
  try {
    db = JSON.parse(fs.readFileSync(dbPath))
  } catch (e) {
    console.log(chalk.red("⚠️ Failed to read db.json, using defaults"))
  }
}

// 🔹 Save function
global.saveDB = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
}

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.SESSION_ID = process.env.SESSION_ID || '' 
global.owner = "254104260236"
global.developer = "254104260236"
global.bot = ""
global.devname = "Dave"
global.ownername = process.env.OWNER_NAME ||'Gifted Dave'
global.botname = "𝐃𝐀𝐕𝐄-𝐗𝐌𝐃"
global.versisc = "2"
global.packname = "𝐃𝐀𝐕𝐄-𝐗𝐌𝐃"

//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/254104260236"
global.linkyt = "https://www.youtube.com/Davke"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me"

//~~~~~~~~~~~ Settings Bot (dynamic from db.json) ~~~~~~~~~~~//
global.prefix = process.env.BOT_PREFIX ||'.'
global.autoRecording = db.autoRecording
global.autoTyping = db.autoTyping
global.autorecordtype = db.autorecordtype
global.autoread = process.env.AUTO_READ || db.autoread
global.autobio = db.autobio
global.anti92 = db.anti92
global.owneroff = db.owneroff
global.statusview = process.env.AUTO_STATUS || db.statusview

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
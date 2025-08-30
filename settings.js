const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

// ~~~~~~~~~~~ Session ~~~~~~~~~~~ //
global.SESSION_ID = process.env.SESSION_ID || ''

// ~~~~~~~~~~~ Owner / Bot Info ~~~~~~~~~~~ //
global.owner = "254104260236"
global.developer = "254104260236"
global.bot = ""
global.author = "Gifted-Dave"
global.devname = "dave"
global.hituet = 0
global.creator = "254104260236@s.whatsapp.net"
global.ownername = process.env.OWNER_NAME || 'dave'
global.botname = "𝐃𝐀𝐕𝐄-𝐌𝐃"
global.versisc = "2"
global.ownername = 'Gifted dave' //ur owner name
global.packname = process.env.PACK_NAME ||"Dave md" //

// ~~~~~~~~~~~ Social Media Links ~~~~~~~~~~~ //
global.linkwa = "https://wa.me/254104260236"
global.linkyt = "https://www.youtube.com/davke"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me/Digladoo"
global.ytname = "YT: DAVKE" 
global.socialm = "IG: @GIDDYTENNOR" 
global.location = "Kenya" 

// ~~~~~~~~~~~ Bot Settings ~~~~~~~~~~~ //
global.xprefix = process.env.BOT_PREFIX || '.'
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = false
global.autoread = (process.env.AUTO_READ || 'false') === 'true'
global.autobio = false
global.anti92 = false
global.owneroff = false
global.statusview = (process.env.AUTO_STATUS || 'true') === 'true'
global.autoreact = (process.env.AUTO_REACT || 'false') === 'true'

// ~~~~~~~~~~~ Bot Security & Modes ~~~~~~~~~~~ //
global.autoblocknumber = (process.env.AUTOBLOCK_NUMBER || '263,234').split(',') // array of country codes
global.antiforeignnumber = (process.env.ANTIFOREIGN_NUMBER || '').split(',') // array of country codes
global.mode = process.env.MODE || 'public' // public/private
global.anticall = (process.env.ANTI_CALL || 'false') === 'true'
global.autostatusview = (process.env.AUTOSW_VIEW || 'true') === 'true'
global.adminevent = true
global.groupevent = (process.env.GROUP_EVENT || 'false') === 'true'

// ~~~~~~~~~~~ App Info (optional) ~~~~~~~~~~~ //
global.appname = process.env.APP_NAME || ''
global.herokuapi = process.env.HEROKU_API || ''

// ~~~~~~~~~~~ Thumbnails ~~~~~~~~~~~ //
global.thumbbot = "https://files.catbox.moe/clpm2q.jpg"
global.thumbown = "https://files.catbox.moe/clpm2q.jpg"

// ~~~~~~~~~~~ Channel Info ~~~~~~~~~~~ //
global.idchannel = "120363400480173280@newsletter*"
global.channelname = "ー𝐃𝐀𝐕𝐄-𝐗𝐌𝐃 UPDATES"
global.channel = "https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k"
global.botscript ="https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k"
global.themeemoji = '💠'
global.wm = "Gifted dave"
global.websitex = "https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k"

// ~~~~~~~~~~~ Messages ~~~~~~~~~~~ //
global.mess = {
  developer: "This feature is for developers only!!",
  owner: "This feature is for owners only!",
  group: "This feature is for group chats only!!",
  private: "This feature is for private chats only!",
  admin: "This feature is for admins only!!",
  botadmin: "This feature is for bot admins only!!",
  wait: "Please wait, loading...",
  error: "An error occurred!",
  done: "Process completed!"
}

// ~~~~~~~~~~~ Auto Reload Config File ~~~~~~~~~~~ //
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.green(`${__filename} updated!`))
  delete require.cache[file]
  require(file)
})
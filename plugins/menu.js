
const config = require('../config');
const moment = require('moment-timezone');
const { sleep } = require('../lib/functions');
const fs = require('fs');
const { davlo } = require('../davlo');

davlo({
  pattern: "menu",
  alias: ["allmenu", "help"],
  desc: "Show all bot commands",
  category: "main",
  react: "📖",
  filename: __filename
},
async (dave, mek, m, { from, sender, reply }) => {
  try {
    const uptime = () => {
      let sec = process.uptime();
      let h = Math.floor(sec / 3600);
      let m = Math.floor((sec % 3600) / 60);
      let s = Math.floor(sec % 60);
      return `${h}h ${m}m ${s}s`;
    };

    const menuText = `╭──〔 *🌐 𝐃𝐀𝐕𝐄-𝐌𝐃 𝐌𝐄𝐍𝐔* 〕──╮
│ 👤 User: @${m.sender.split("@")[0]}
│ ⚙️ Mode: ${config.MODE}
│ ⏱️ Uptime: ${uptime()}
│ 📅 Date: ${moment().tz("Africa/Nairobi").format("dddd, DD MMMM YYYY")}
╰──────────────────────╯

📁 *CATEGORIES AVAILABLE:*
• ${config.PREFIX}aimenu - AI Tools
• ${config.PREFIX}animemenu - Anime
• ${config.PREFIX}convertmenu - Converters
• ${config.PREFIX}funmenu - Fun Commands
• ${config.PREFIX}dlmenu - Downloads
• ${config.PREFIX}groupmenu - Group Tools
• ${config.PREFIX}ownermenu - Owner Commands
• ${config.PREFIX}othermenu - Utilities

💡 Type ${config.PREFIX}categoryname to see commands`;

    await dave.sendMessage(from, {
      text: menuText,
      contextInfo: { mentionedJid: [m.sender] }
    }, { quoted: mek });

  } catch (err) {
    console.error(err);
    reply("❌ Error showing menu: " + err.message);
  }
});
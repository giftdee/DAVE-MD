const config = require('../config');
const { davlo } = require('../davlo');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const pkg = require('../package.json');

// Visual Elements
const rainbow = ['✊', '💚'];
const emojis = ['✨', '💚'];

const randomEmoji = () => emojis.sort(() => 0.5 - Math.random()).slice(0, 3).join('');
const divider = (length = 20, char = '─') => char.repeat(length);

// 🔁 Simplified Image Sender (removed problematic contextInfo)
async function sendMenu(dave, from, mek, sender, text, title, sendAudio = false) {
  try {
    // Try to send image first
    try {
      await dave.sendMessage(from, {
        image: { url: 'https://i.ibb.co/x8FmMFPf/temp-image.jpg' },
        caption: text
      }, { quoted: mek });
    } catch (imageError) {
      console.error('Image failed, sending text only:', imageError);
      // Fallback to text only
      await dave.sendMessage(from, {
        text: text
      }, { quoted: mek });
    }

    // Audio sending (optional)
    if (sendAudio) {
      try {
        await dave.sendMessage(from, {
          audio: { url: 'https://files.catbox.moe/a1sh4u.mp3' },
          mimetype: 'audio/mp4',
          ptt: true
        }, { quoted: mek });
      } catch (audioError) {
        console.error('Audio failed:', audioError);
        // Continue without audio
      }
    }
  } catch (e) {
    console.error(`Menu Error (${title}):`, e);
    // Final fallback - simple text message
    await dave.sendMessage(from, {
      text: `📋 ${title}\n\n${text}`
    }, { quoted: mek });
  }
}

// Main Menu
davlo({
  pattern: "menu",
  desc: "Display all bot commands",
  category: "menu",
  react: "💖",
  filename: __filename
}, async (dave, mek, m, { from, reply }) => {
  try {
    const menuText = `
╭━━━━━━━━━━━━━━━━━━━━╮
  💚 DAVE-MD💚
╰━━━━━━━━━━━━━━━━━━━━╯

${rainbow.join('')} BOT INFORMATION ${rainbow.reverse().join('')}
💚 Owner » ${config.OWNER_NAME}
💚 Version » ${pkg.version}
💚 Mode » ${config.MODE.toUpperCase()}
💚 Prefix » [${config.PREFIX}]
💚 Runtime » ${runtime(process.uptime())}
${divider(30)}

${rainbow.join('')} COMMAND CATEGORIES ${rainbow.reverse().join('')}
${randomEmoji()} » ${config.PREFIX}aimenu (AI Tools)
${randomEmoji()} » ${config.PREFIX}animemenu (Anime)
${randomEmoji()} » ${config.PREFIX}convertmenu (Converters)
${randomEmoji()} » ${config.PREFIX}funmenu (Fun)
${randomEmoji()} » ${config.PREFIX}dlmenu (Downloads)
${randomEmoji()} » ${config.PREFIX}groupmenu (Group)
${randomEmoji()} » ${config.PREFIX}ownermenu (Owner)
${randomEmoji()} » ${config.PREFIX}othermenu (Utilities)
${divider(30)}

💡 Type ${config.PREFIX}<davlo> to use
${config.DESCRIPTION}
    `;

    await sendMenu(dave, from, mek, m.sender, menuText, 'Main Menu', true);
  } catch (e) {
    reply(`❌ Error: ${e.message}`);
  }
});

// ... [Keep all your other menu functions as they are] ...

// Other Menu
davlo({
  pattern: "othermenu",
  desc: "Utility commands menu",
  category: "menu",
  react: "🤖",
  filename: __filename
}, async (dave, mek, m, { from, reply }) => {
  try {
    const otherMenu = `
╭━━━━━━━━━━━━━━━━━━━━╮
  🛠️ UTILITY TOOLS 🛠️
╰━━━━━━━━━━━━━━━━━━━━╯

${rainbow.join('')} INFORMATION ${rainbow.reverse().join('')}
• weather » Weather report
• news » Latest news
• movie » Movie info
• define » Dictionary
• wikipedia » Wiki search
• fact » Interesting facts

${rainbow.join('')} SOCIAL ${rainbow.reverse().join('')}
• githubstalk » GitHub info
• pair » Match users
• pair2 » Alternative match
• vv » View once tools

${rainbow.join('')} DEVELOPER ${rainbow.reverse().join('')}
• srepo » Search repos
• gpass » Generate password
• yts » YT search
• ytv » YT video search

${divider(30)}
🔧 Useful everyday tools
    `;

    await sendMenu(dave, from, mek, m.sender, otherMenu, 'Utility Menu');
  } catch (e) {
    reply(`❌ Error: ${e.message}`);
  }
});
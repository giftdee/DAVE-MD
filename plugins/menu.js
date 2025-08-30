const config = require('../config');
const { davlo } = require('../davlo');
const os = require("os");
const { runtime } = require('../lib/functions');
const pkg = require('../package.json'); // Get version from package.json

// Visual Elements
const rainbow = ['💥', '✊'];
const emojis = ['✨', '💚'];
const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
const divider = (length = 20, char = '─') => char.repeat(length);

// 🔁 Unified Menu Sender
async function sendFullMenu(dave, from, mek, sender) {
  try {
    const menuText = `
╭━━━━━━━━━━━━━━━━━━━━╮
     💚 𝐃𝐀𝐕𝐄-𝐌𝐃 💚
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

💡 Type ${config.PREFIX}<command> to use
${config.DESCRIPTION}
    `;

    // Send menu image with text
    await dave.sendMessage(from, {
      image: { url: 'https://i.ibb.co/8gxpXvDk/temp-image.jpg' },
      caption: menuText,
      contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400480173280@newsletter',
          newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Send audio after image
    await dave.sendMessage(from, {
      audio: { url: 'https://files.catbox.moe/a1sh4u.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: mek });

  } catch (e) {
    console.error('Full Menu Error:', e);
    await dave.sendMessage(from, { text: '❌ Something went wrong while sending the menu.' }, { quoted: mek });
  }
}

// Unified Menu Command
davlo({
  pattern: "menu2",
  desc: "Show full bot menu",
  category: "menu",
  react: "⚡",
  filename: __filename
}, async (dave, mek, m, { from, reply }) => {
  try {
    await sendFullMenu(dave, from, mek, m.sender);
  } catch (e) {
    reply(`❌ Error: ${e.message}`);
  }
});
const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


async function githubCommand(dave, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/repos/giftdee/DAVE-MD');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = 
           `💠  \`𝐃𝐀𝐕𝐄-𝐌𝐃 𝚁𝙴𝙿𝙾 𝙸𝙽𝙵𝙾.\` \n\n`;
    txt += `💠  *Name* : ${json.name}\n`;
    txt += `💠  *Watchers* : ${json.watchers_count}\n`;
    txt += `💠  *Size* : ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `💠  *Last Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `💠  *REPO* : ${json.html_url}\n`;
    txt += `💠  *Forks* : ${json.forks_count}\n`;
    txt += `💠  *Stars* : ${json.stargazers_count}\n`;
    txt += `💠  Dont Forget to fork & star⭐ The Repo \n\n`;
    txt += `> _𝐃𝐀𝐕𝐄-𝐌𝐃_`;

    // Use the local asset image
    const imgPath = path.join(__dirname, '../assets/dave_repos.jpg');
    const imgBuffer = fs.readFileSync(imgPath);

    await dave.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
  } catch (error) {
    await dave.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand; 

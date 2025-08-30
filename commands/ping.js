const os = require('os');
const settings = require('../settings.js');


async function pingCommand(dave, chatId) {
  try {
    const start = Date.now();
    const sentMsg = await dave.sendMessage(chatId, {
      text: '*🔹pong!...*'
    });

    const ping = Date.now() - start;
    const response = `*💚 𝗱𝗮𝘃𝗲 𝘀𝗽𝗲𝗲𝗱✊: ${ping} ms*`;

    await dave.sendMessage(chatId, {
      text: response,
      edit: sentMsg.key // Edit the original message
    });
  } catch (error) {
    console.error('Ping error:', error);
    await dave.sendMessage(chatId, { text: 'Failed to measure speed.' });
  }
}

module.exports = pingCommand;
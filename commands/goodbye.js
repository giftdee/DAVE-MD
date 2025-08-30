const { handleGoodbye } = require('../lib/welcome');

async function goodbyeCommand(dave, chatId, message, match) {
    // Check if it's a group
    if (!chatId.endsWith('@g.us')) {
        await dave.sendMessage(chatId, { text: 'This command can only be used in groups.' });
        return;
    }

    // Extract match from message
    const text = message.message?.conversation || 
                message.message?.extendedTextMessage?.text || '';
    const matchText = text.split(' ').slice(1).join(' ');

    await handleGoodbye(dave, chatId, message, matchText);
}

module.exports = goodbyeCommand;

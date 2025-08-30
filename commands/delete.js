const isAdmin = require('../lib/isAdmin');

async function deleteCommand(dave, chatId, message, senderId) {
    const { isSenderAdmin, isBotAdmin } = await isAdmin(dave, chatId, senderId);

    if (!isBotAdmin) {
        await dave.sendMessage(chatId, { text: 'I need to be an admin to delete messages.' });
        return;
    }

    if (!isSenderAdmin) {
        await dave.sendMessage(chatId, { text: 'Only admins can use the .delete command.' });
        return;
    }

    const quotedMessage = message.message?.extendedTextMessage?.contextInfo?.stanzaId;
    const quotedParticipant = message.message?.extendedTextMessage?.contextInfo?.participant;

    if (quotedMessage) {
        await dave.sendMessage(chatId, { delete: { remoteJid: chatId, fromMe: false, id: quotedMessage, participant: quotedParticipant } });
    } else {
        await dave.sendMessage(chatId, { text: 'Please reply to a message you want to delete.' });
    }
}

module.exports = deleteCommand;

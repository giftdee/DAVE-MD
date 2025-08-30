const { handleAntiBadwordCommand } = require('../lib/antibadword');
const isAdminHelper = require('../lib/isAdmin');

async function antibadwordCommand(dave, chatId, message, senderId, isSenderAdmin) {
    try {
        if (!isSenderAdmin) {
            await dave.sendMessage(chatId, { text: '```For Group Admins Only!```' });
            return;
        }

        // Extract match from message
        const text = message.message?.conversation || 
                    message.message?.extendedTextMessage?.text || '';
        const match = text.split(' ').slice(1).join(' ');

        await handleAntiBadwordCommand(dave, chatId, message, match);
    } catch (error) {
        console.error('Error in antibadword command:', error);
        await dave.sendMessage(chatId, { text: '*Error processing antibadword command*' });
    }
}

module.exports = antibadwordCommand; 
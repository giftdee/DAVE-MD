const isAdmin = require('../lib/isAdmin');  // Move isAdmin to helpers

async function tagAllCommand(dave, chatId, senderId) {
    try {
        const { isSenderAdmin, isBotAdmin } = await isAdmin(dave, chatId, senderId);
        
        if (!isSenderAdmin && !isBotAdmin) {
            await dave.sendMessage(chatId, {
                text: 'Only admins can use the .tagall command.'
            });
            return;
        }

        // Get group metadata
        const groupMetadata = await dave.groupMetadata(chatId);
        const participants = groupMetadata.participants;

        if (!participants || participants.length === 0) {
            await dave.sendMessage(chatId, { text: 'No participants found in the group.' });
            return;
        }

        // Create message with each member on a new line
        let message = '🔊 *Group Members:*\n\n';
        participants.forEach(participant => {
            message += `@${participant.id.split('@')[0]}\n`; // Add \n for new line
        });

        // Send message with mentions
        await dave.sendMessage(chatId, {
            text: message,
            mentions: participants.map(p => p.id)
        });

    } catch (error) {
        console.error('Error in tagall command:', error);
        await dave.sendMessage(chatId, { text: 'Failed to tag all members.' });
    }
}

module.exports = tagAllCommand;  // Export directly

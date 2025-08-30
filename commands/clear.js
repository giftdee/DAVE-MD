async function clearCommand(dave, chatId) {
    try {
        const message = await dave.sendMessage(chatId, { text: 'Clearing bot messages...' });
        const messageKey = message.key; // Get the key of the message the bot just sent
        
        // Now delete the bot's message
        await dave.sendMessage(chatId, { delete: messageKey });
        
    } catch (error) {
        console.error('Error clearing messages:', error);
        await dave.sendMessage(chatId, { text: 'An error occurred while clearing messages.' });
    }
}

module.exports = { clearCommand };

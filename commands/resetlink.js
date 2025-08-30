async function resetlinkCommand(dave, chatId, senderId) {
    try {
        // Check if sender is admin
        const groupMetadata = await dave.groupMetadata(chatId);
        const isAdmin = groupMetadata.participants
            .filter(p => p.admin)
            .map(p => p.id)
            .includes(senderId);

        // Check if bot is admin
        const botId = dave.user.id.split(':')[0] + '@s.whatsapp.net';
        const isBotAdmin = groupMetadata.participants
            .filter(p => p.admin)
            .map(p => p.id)
            .includes(botId);

        if (!isAdmin) {
            await dave.sendMessage(chatId, { text: '❌ Only admins can use this command!' });
            return;
        }

        if (!isBotAdmin) {
            await dave.sendMessage(chatId, { text: '❌ Bot must be admin to reset group link!' });
            return;
        }

        // Reset the group link
        const newCode = await dave.groupRevokeInvite(chatId);
        
        // Send the new link
        await dave.sendMessage(chatId, { 
            text: `✅ Group link has been successfully reset\n\n📌 New link:\nhttps://chat.whatsapp.com/${newCode}`
        });

    } catch (error) {
        console.error('Error in resetlink command:', error);
        await dave.sendMessage(chatId, { text: 'Failed to reset group link!' });
    }
}

module.exports = resetlinkCommand; 
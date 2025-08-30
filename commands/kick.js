const isAdmin = require('../lib/isAdmin');

async function kickCommand(dave, chatId, senderId, mentionedJids, message) {
    // Check if user is owner
    const isOwner = message.key.fromMe;
    if (!isOwner) {
        const { isSenderAdmin, isBotAdmin } = await isAdmin(dave, chatId, senderId);

        if (!isBotAdmin) {
            await dave.sendMessage(chatId, { text: 'Please make the bot an admin first.' }, { quoted: message });
            return;
        }

        if (!isSenderAdmin) {
            await dave.sendMessage(chatId, { text: 'Only group admins can use the kick command.' }, { quoted: message });
            return;
        }
    }

    let usersToKick = [];
    
    // Check for mentioned users
    if (mentionedJids && mentionedJids.length > 0) {
        usersToKick = mentionedJids;
    }
    // Check for replied message
    else if (message.message?.extendedTextMessage?.contextInfo?.participant) {
        usersToKick = [message.message.extendedTextMessage.contextInfo.participant];
    }
    
    // If no user found through either method
    if (usersToKick.length === 0) {
        await dave.sendMessage(chatId, { 
            text: 'Please mention the user or reply to their message to kick!'
        }, { quoted: message });
        return;
    }

    // Get bot's ID
    const botId = dave.user.id.split(':')[0] + '@s.whatsapp.net';

    // Check if any of the users to kick is the bot itself
    if (usersToKick.includes(botId)) {
        await dave.sendMessage(chatId, { 
            text: "I can't kick myself! 🤖"
        }, { quoted: message });
        return;
    }

    try {
        await dave.groupParticipantsUpdate(chatId, usersToKick, "remove");
        
        // Get usernames for each kicked user
        const usernames = await Promise.all(usersToKick.map(async jid => {
            return `@${jid.split('@')[0]}`;
        }));
        
        await dave.sendMessage(chatId, { 
            text: `${usernames.join(', ')} has been kicked successfully!`,
            mentions: usersToKick
        });
    } catch (error) {
        console.error('Error in kick command:', error);
        await dave.sendMessage(chatId, { 
            text: 'Failed to kick user(s)!'
        });
    }
}

module.exports = kickCommand;

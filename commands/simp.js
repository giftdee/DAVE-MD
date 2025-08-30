const fetch = require('node-fetch');

async function simpCommand(dave, chatId, quotedMsg, mentionedJid, sender) {
    try {
        // Determine the target user
        let who = quotedMsg 
            ? quotedMsg.sender 
            : mentionedJid && mentionedJid[0] 
                ? mentionedJid[0] 
                : sender;

        // Get the profile picture URL
        let avatarUrl;
        try {
            avatarUrl = await dave.profilePictureUrl(who, 'image');
        } catch (error) {
            console.error('Error fetching profile picture:', error);
            avatarUrl = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'; // Default avatar
        }

        // Fetch the simp card from the API
        const apiUrl = `https://some-random-api.com/canvas/misc/simpcard?avatar=${encodeURIComponent(avatarUrl)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        // Get the image buffer
        const imageBuffer = await response.buffer();

        // Send the image with caption
        await dave.sendMessage(chatId, {
            image: imageBuffer,
            caption: '*your religion is simping*',
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: '𝐉ᴜɴᴇ 𝐌ᴅ',
                    serverMessageId: -1
                }
            }
        });

    } catch (error) {
        console.error('Error in simp command:', error);
        await dave.sendMessage(chatId, { 
            text: '❌ Sorry, I couldn\'t generate the simp card. Please try again later!',
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: '𝐉ᴜɴᴇ 𝐌ᴅ',
                    serverMessageId: -1
                }
            }
        });
    }
}

module.exports = { simpCommand }; 
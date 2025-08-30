const fetch = require('node-fetch');

async function memeCommand(dave, chatId, message) {
    try {
        const response = await fetch('https://shizoapi.onrender.com/api/memes/cheems?apikey=shizo');
        
        // Check if response is an image
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('image')) {
            const imageBuffer = await response.buffer();
            
            const buttons = [
                { buttonId: '.meme', buttonText: { displayText: '🎭 Another Meme' }, type: 1 },
                { buttonId: '.joke', buttonText: { displayText: '😄 Joke' }, type: 1 }
            ];

            await dave.sendMessage(chatId, { 
                image: imageBuffer,
                caption: "> Here's your cheems meme! 🐕",
                buttons: buttons,
                headerType: 1
            },{ quoted: message});
        } else {
            throw new Error('Invalid response type from API');
        }
    } catch (error) {
        console.error('Error in meme command:', error);
        await dave.sendMessage(chatId, { 
            text: '❌ Failed to fetch meme. Please try again later.'
        });
    }
}

module.exports = memeCommand;

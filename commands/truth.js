const fetch = require('node-fetch');

async function truthCommand(dave, chatId, message) {
    try {
        const shizokeys = 'knightbot';
        const res = await fetch(`https://api.shizo.top/api/quote/truth?apikey=${shizokeys}`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        const truthMessage = json.result;

        // Send the truth message
        await dave.sendMessage(chatId, { text: truthMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in truth command:', error);
        await dave.sendMessage(chatId, { text: '❌ Failed to get truth. Please try again later!' }, { quoted: message });
    }
}

module.exports = { truthCommand };

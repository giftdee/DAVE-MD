const fetch = require('node-fetch');

module.exports = async function quoteCommand(dave, chatId, message) {
    try {
        const shizokeys = 'knightbot';
        const res = await fetch(`https://api.shizo.top/api/quote/quotes?apikey=${shizokeys}`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        const quoteMessage = json.result;

        // Send the quote message
        await dave.sendMessage(chatId, { text: quoteMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in quote command:', error);
        await dave.sendMessage(chatId, { text: '❌ Failed to get quote. Please try again later!' }, { quoted: message });
    }
};

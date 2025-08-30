const axios = require('axios');

module.exports = async function (dave, chatId, message) {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
        const fact = response.data.text;
        await dave.sendMessage(chatId, { text: fact },{ quoted: message });
    } catch (error) {
        console.error('Error fetching fact:', error);
        await dave.sendMessage(chatId, { text: 'Sorry, I could not fetch a fact right now.' },{ quoted: message });
    }
};

const axios = require('axios');

module.exports = async function (dave, chatId) {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        const joke = response.data.joke;
        await dave.sendMessage(chatId, { text: joke });
    } catch (error) {
        console.error('Error fetching joke:', error);
        await dave.sendMessage(chatId, { text: 'Sorry, I could not fetch a joke right now.' });
    }
};

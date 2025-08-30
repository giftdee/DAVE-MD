const axios = require('axios');
const settings = require('../settings'); // Assuming the API key is stored here

async function gifCommand(dave, chatId, query) {
    const apiKey = settings.giphyApiKey; // Replace with your Giphy API Key

    if (!query) {
        await dave.sendMessage(chatId, { text: 'Please provide a search term for the GIF.' });
        return;
    }

    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: apiKey,
                q: query,
                limit: 1,
                rating: 'g'
            }
        });

        const gifUrl = response.data.data[0]?.images?.downsized_medium?.url;

        if (gifUrl) {
            await dave.sendMessage(chatId, { video: { url: gifUrl }, caption: `Here is your GIF for "${query}"` });
        } else {
            await dave.sendMessage(chatId, { text: 'No GIFs found for your search term.' });
        }
    } catch (error) {
        console.error('Error fetching GIF:', error);
        await dave.sendMessage(chatId, { text: 'Failed to fetch GIF. Please try again later.' });
    }
}

module.exports = gifCommand;

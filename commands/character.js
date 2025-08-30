let handler = async (m, { text,prefix,command,Owner,Bellah }) => {

    if (!Owner) return m.reply('only Creator/Owner');
    let parts = text.split('|');
    let channelName = parts[0]?.trim();
    let channelDesc = parts[1]?.trim() || '';
    if (!channelName) {
        return m.reply(`Provide: 
${prefix + command} Channelname|Channeldescription



Example: 
${prefix + command} E Zone|free entertainment zone`);
    }
    try {
        const metadata = await Bellah.newsletterCreate(channelName, channelDesc);
        console.log(metadata);
        console.log('Channel metadata:', JSON.stringify(metadata, null, 2));
        let channelId;
        if (metadata && metadata.channelId) {
            channelId = metadata.channelId;
        } else if (metadata && metadata.id) {
            channelId = metadata.id;
        } else if (metadata && metadata.channel && metadata.channel.id) {
            channelId = metadata.channel.id;
        } else if (typeof metadata === 'string') {
            channelId = metadata;
        } else {
            const findId = (obj) => {
                if (!obj || typeof obj !== 'object') return null;
                for (const key in obj) {
                    if (key === 'id' || key === 'channelId' || key.toLowerCase().includes('id')) {
                        return obj[key];
                    }
                    if (typeof obj[key] === 'object') {
                        const nestedId = findId(obj[key]);
                        if (nestedId) return nestedId;
                    }
                }
                return null;
            };      
            channelId = findId(metadata);
        }
        if (!channelId) {
            console.warn('Warning: ChannelId is invalid...');
            channelId = "unknown-channel-id";
        }
        let successDetails = [];
        successDetails.push(`✅ Channel "${channelName}" success created!`);
        if (channelDesc) {
            successDetails.push(`✅ channel description successfully created`);
        }
        successDetails.push(`\nID Channel: ${channelId}`);
        await Bellah.sendMessage(m.chat, {
            text: successDetails.join('\n')
        });
    } catch (error) {
        console.error('Error creating channel:', error);
        m.reply(`an error has occurred: ${error.message}`);
    }
};
handler.help = ['buatch']
handler.tags = ['buatchannel']
handler.command = ['createch']


module.exports = handler;
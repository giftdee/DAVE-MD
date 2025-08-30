const isAdmin = require('../lib/isAdmin');

async function muteCommand(dave, chatId, senderId, durationInMinutes) {
    console.log(`Attempting to mute the group for ${durationInMinutes} minutes.`); // Log for debugging

    const { isSenderAdmin, isBotAdmin } = await isAdmin(dave, chatId, senderId);
    if (!isBotAdmin) {
        await dave.sendMessage(chatId, { text: 'Please make the bot an admin first.' });
        return;
    }

    if (!isSenderAdmin) {
        await dave.sendMessage(chatId, { text: 'Only group admins can use the mute command.' });
        return;
    }

    const durationInMilliseconds = durationInMinutes * 60 * 1000;
    try {
        await dave.groupSettingUpdate(chatId, 'announcement'); // Mute the group
        await dave.sendMessage(chatId, { text: `The group has been muted for ${durationInMinutes} minutes.` });

        setTimeout(async () => {
            await dave.groupSettingUpdate(chatId, 'not_announcement'); // Unmute after the duration
            await dave.sendMessage(chatId, { text: 'The group has been unmuted.' });
        }, durationInMilliseconds);
    } catch (error) {
        console.error('Error muting/unmuting the group:', error);
        await dave.sendMessage(chatId, { text: 'An error occurred while muting/unmuting the group. Please try again.' });
    }
}

module.exports = muteCommand;

async function unmuteCommand(dave, chatId) {
    await dave.groupSettingUpdate(chatId, 'not_announcement'); // Unmute the group
    await dave.sendMessage(chatId, { text: 'The group has been unmuted.' });
}

module.exports = unmuteCommand;

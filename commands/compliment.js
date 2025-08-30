const axios = require('axios');
let handler = async (m, { budy,Bellah}) => {
    const iidgc = budy.match('@g.us')
    if(!iidgc)return m.reply(`Provide a group ID\nExample : ${prefix + command} 120.......@g.us`)
    try{
    const gc = "https://chat.whatsapp.com/" + await Bellah.groupInviteCode(text)
await m.reply(`${gc}`)
        }catch(e){
            m.reply('IdGroup must be Valid!!')
        }
};
handler.help = ['ceklink']
handler.tags = ['ceklinkgc']
handler.command = ['ceklinkgc']


module.exports = handler;
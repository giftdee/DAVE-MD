const axios = require("axios");
 
let handler = async (m, { text, dave }) => {
  if (!text) return m.reply('provide a query *Example :* what is node js?');
 
  let { data } = await axios.get('https://www.abella.icu/hika-ai?q=' + encodeURIComponent(text));
 
 
  let res = data.data;
  await m.reply(res.answer.trim());
 
  let ref = res.references?.map((v, i) => `${i+1}. ${v.name}\n${v.url}`).join('\n\n');
  if (ref) await m.reply('Results :\n\n' + ref);
};
 
handler.help = ['hika']
handler.tags = ['ai2']
handler.command = ['ai2']
 
module.exports = handler;

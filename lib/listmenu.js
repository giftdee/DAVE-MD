const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
┏━━⬣ ⌜\`𝐃𝐀𝐕𝐄-𝐌𝐃\`⌟
│ ➤ *Creator*: *𝐆𝐢𝐝𝐝𝐲 𝐓𝐞𝐧𝐧𝐨𝐫*
│ ➤ *Bot Name* :${global.botname}
│ ➤ *Name* : ${pushname}
│ ➤ *Version* :*3.0.0*
│ ➤ *Runtime* : ${runtime(process.uptime())}
│ ➤ *Totalfeature* : 141
│ ➤ *Ram* :${ram()}

┏━━「 \`Mode\` 」
│ ➤ *private*
│ ➤ *public*
│ ➤ *recording*
│ ➤ *typing*
│ ➤ *autoreact*
┗━━━━━━━━━━━━━━━♢

┏━━「 \`General\` 」
│ ➤ *ping*
│ ➤ *repo*
│ ➤ *bot*
│ ➤ *autostatusview*
│ ➤ *uptime*
│ ➤ *delete*
│ ➤ *listplugin*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Download\` 」
│ ➤ *song*
│ ➤ *play*
│ ➤ *play2*
│ ➤ *tiktok*
│ ➤ *vv*
│ ➤ *vv2*
│ ➤ *anime*
│ ➤ *detiknews*
│ ➤ *apk*
│ ➤ *apk2*
│ ➤ *fb*
│ ➤ *igdl2*
│ ➤ *igdl*
│ ➤ *lyrics*
│ ➤ *spotifydown*
│ ➤ *spotifysearch*
│ ➤ *igstalk*
│ ➤ *tiktokstalk*
│ ➤ *ytmp4*
│ ➤ *ytmp3*
│ ➤ *mediafire*
│ ➤ *playtiktok*
│ ➤ *play3*
│ ➤ *song2*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Group\` 」
│ ➤ *remove*
│ ➤ *tagall*
│ ➤ *hidetag*
│ ➤ *promote*
│ ➤ *demote*
│ ➤ *kickall*
│ ➤ *kill*
│ ➤ *invite*
│ ➤ *add*
│ ➤ *open*
│ ➤ *close*
│ ➤ *antilinkgc*
│ ➤ *antilink*
│ ➤ *getidgc*
│ ➤ *ceklinkgc*
│ ➤ *gcinfo*
│ ➤ *poll*
│ ➤ *setppgc*
│ ➤ *listonline*
│ ➤ *resetlink*
│ ➤ *pin*
│ ➤ *setnamegc*
│ ➤ *request-join*
│ ➤ *approve*
│ ➤ *reject*
│ ➤ *left*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Sticker\` 」
│ ➤ *s*
│ ➤ *take*
│ ➤ *brat*
│ ➤ *emojimix*
│ ➤ *notes*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Owner\` 」
│ ➤ *getbio*
│ ➤ *getpp*
│ ➤ *block*
│ ➤ *unblock*
│ ➤ *storytext*
│ ➤ *storyaudio*
│ ➤ *storyimage*
│ ➤ *storyvideo*
│ ➤ *Creategc*
│ ➤ *listgc*
│ ➤ *setpp*
│ ➤ *onlypc*
│ ➤ *onlygc*
│ ➤ *reactch*
│ ➤ *createch*
│ ➤ *clear*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Maths\` 」
│ ➤ *kalkulator*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Search\` 」
│ ➤ *ai*
│ ➤ *ai2*
│ ➤ *country*
│ ➤ *quiz*
│ ➤ *gpt*
│ ➤ *gpt2*
│ ➤ *gpt3*
│ ➤ *gemma*
│ ➤ *yts*
│ ➤ *pinterest*
│ ➤ *igstory*
│ ➤ *ytstalk*
│ ➤ *ffstalk*
│ ➤ *telestalk*
│ ➤ *meme*
│ ➤ *channelinfo*
│ ➤ *cekkodam*
│ ➤ *define*
│ ➤ *sfile*
│ ➤ *myip*
│ ➤ *trackip*
│ ➤ *xvideos*
│ ➤ *yiffersearch*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Converter\` 」
│ ➤ *photo*
│ ➤ *tovideo*
│ ➤ *toaudio*
│ ➤ *tovn*
│ ➤ *translate*
│ ➤ *flux*
│ ➤ *deepimage*
│ ➤ *tourl*
│ ➤ *logo*
│ ➤ *tts*
│ ➤ *ghiblistyle*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Religion\` 」
│ ➤ *Quran*
│ ➤ *Bible*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Developer\` 」
│ ➤ *githubstalk*
│ ➤ *gitclone*
│ ➤ *getfile*
│ ➤ *scweb*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Heroku\` 」
│ ➤ *getvars*
│ ➤ *setvar*
│ ➤ *update*
│──────♢
┗━━━━━━━━━━━━━━━♢

┏━━「 \`Others\` 」
│ ➤ *cc*
│ ➤ *ckalender*
│ ➤ *epl*
│ ➤ *laliga*
│ ➤ *bundesliga*
│ ➤ *serie-a*
│ ➤ *ligue-1*
│ ➤ *fixtures*
│ ➤ *news*
│ ➤ *vcf*
│ ➤ *save*
│ ➤ *say*
│──────♢
┗━━━━━━━━━━━━━━━♢

━━「 \`Email\` 」
│ ➤ *sendemail*
│ ➤ *tempmail*
│──────♢
┗━━⬣ ⌜ \`New version\`⌟
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
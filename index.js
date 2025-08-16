const _0x5ee695=_0x158d;function _0x158d(_0x5b49b9,_0x2070a0){const _0x1e6d29=_0x54ed();return _0x158d=function(_0x5870ca,_0x51f16f){_0x5870ca=_0x5870ca-(-0x1f7*-0x13+-0x19e3+0x1e*-0x55);let _0x57cff7=_0x1e6d29[_0x5870ca];return _0x57cff7;},_0x158d(_0x5b49b9,_0x2070a0);}function _0x54ed(){const _0x2a4745=['2355kRmgSy','opts','./lib/myfu','1SzLPjY','7651qgyHKx','exitProces','./lib/base','4247675zNPeos','563318ZyCaDM','2233576QCfRPi','ezone','6190092Icbted','1234640AOSsWI','632fgWhvT','10WaUOQy','axios','--pairing-','2784HYvaub'];_0x54ed=function(){return _0x2a4745;};return _0x54ed();}(function(_0x154aea,_0x2a16e8){const _0x1c6152=_0x158d,_0x1c1c69=_0x154aea();while(!![]){try{const _0x6b8975=parseInt(_0x1c6152(0x180))/(-0x13*-0xb9+0x11bd+-0x1f77)*(-parseInt(_0x1c6152(0x185))/(0x1e03*0x1+-0x1aa5+-0x35c))+-parseInt(_0x1c6152(0x17d))/(-0x2539+-0x5c9*0x3+0x2b*0x145)*(parseInt(_0x1c6152(0x18a))/(-0x505*-0x3+-0x8a1+0x335*-0x2))+parseInt(_0x1c6152(0x184))/(0x40b+-0x5*-0x369+0x1513*-0x1)+-parseInt(_0x1c6152(0x17c))/(0x1*0x1b61+0xc38+-0x21*0x133)*(-parseInt(_0x1c6152(0x181))/(0x10dd+-0x46*-0x35+-0x1f54))+parseInt(_0x1c6152(0x186))/(-0x14f4+-0x1006+0x3*0xc56)+parseInt(_0x1c6152(0x188))/(0x6*-0x10f+0x8*0x285+0x4b*-0x2f)*(-parseInt(_0x1c6152(0x18b))/(0x7af*0x5+-0x135d+-0x2*0x982))+-parseInt(_0x1c6152(0x189))/(-0x39f+-0x2d9+0x1*0x683);if(_0x6b8975===_0x2a16e8)break;else _0x1c1c69['push'](_0x1c1c69['shift']());}catch(_0x3e844a){_0x1c1c69['push'](_0x1c1c69['shift']());}}}(_0x54ed,-0x3*0xa321+0x879d2+-0x18),require('./setting/'+'settings'));const makeWASocket=require('@whiskeyso'+'ckets/bail'+'eys')['default'],{color}=require('./lib/colo'+'r'),NodeCache=require('node-cache'),readline=require('readline'),pino=require('pino'),{Boom}=require('@hapi/boom'),yargs=require('yargs/yarg'+'s'),{handleMessages,handleGroupParticipantUpdate,handleStatus}=require('./main'),fs=require('fs'),chalk=require('chalk'),path=require('path'),axios=require(_0x5ee695(0x18c)),_=require('lodash'),moment=require('moment-tim'+_0x5ee695(0x187)),PhoneNumber=require('awesome-ph'+'onenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x5ee695(0x17f)+'nc'),{default:connConnect,getAggregateVotesInPollMessage,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@whiskeyso'+'ckets/bail'+'eys'),createToxxicStore=require(_0x5ee695(0x183)+'store'),store=createToxxicStore('./store',{'logger':pino()['child']({'level':'silent','stream':'store'})});global[_0x5ee695(0x17e)]=new Object(yargs(process['argv']['slice'](0x64d*0x2+0x36e+-0x1006))[_0x5ee695(0x182)+'s'](![])['parse']());const settings=require('./setting/'+'settings');let phoneNumber='2541042602'+'36';const pairingCode=!!phoneNumber||process['argv']['includes'](_0x5ee695(0x18d)+'code'),useMobile=process['argv']['includes']('--mobile'),rl=readline['createInte'+'rface']({'input':process['stdin'],'output':process['stdout']}),question=_0x17afec=>new Promise(_0x269c79=>rl['question'](_0x17afec,_0x269c79)),sessionDir=path['join'](__dirname,'session'),credsPath=path['join'](sessionDir,'creds.json');async function downloadSessionData(){const _0x24cbbf={'NxMZa':function(_0x4d1583,_0x47a40d,_0xb1a531){return _0x4d1583(_0x47a40d,_0xb1a531);}};try{await fs['promises']['mkdir'](sessionDir,{'recursive':!![]});if(!fs['existsSync'](credsPath)){if(!global['SESSION_ID'])return console['log'](color('Session\x20id'+'\x20not\x20found'+'\x20at\x20SESSIO'+'N_ID!\x0aCred'+'s.json\x20not'+'\x20found\x20at\x20'+'session\x20fo'+'lder!\x0a\x0aWai'+'t\x20to\x20enter'+'\x20your\x20numb'+'er','red'));const _0x1a92a4=global['SESSION_ID']['split']('DAVE-XMD-W'+'HATSAPP-BO'+'T;;;=>')[0x1*0x137c+-0x1be1+0xa*0xd7],_0x3c26ad=Buffer['from'](_0x1a92a4,'base64');await fs['promises']['writeFile'](credsPath,_0x3c26ad),console['log'](_0x24cbbf['NxMZa'](color,'Session\x20su'+'ccessfully'+'\x20saved,\x20pl'+'ease\x20wait!'+'!','green')),await startconn();}}catch(_0x5b62d4){console['error']('Error\x20down'+'loading\x20se'+'ssion\x20data'+':',_0x5b62d4);}}

async function startconn() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const conn = makeWASocket({
        version: [2, 3000, 1023223821],
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })

   store.bind(conn.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
        if (pairingCode && !conn.authState.creds.registered) {
        if (useMobile) throw new Error('Cannot use pairing code with mobile api')

        let phoneNumber
        if (!!global.phoneNumber) {
            phoneNumber = global.phoneNumber
        } else {
            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFormat: 2547XXXXX (without + or spaces) : `)))
        }

        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

        const pn = require('awesome-phonenumber');
        if (!pn('+' + phoneNumber).isValid()) {
            console.log(chalk.red('Invalid phone number. Please enter your full international number (e.g., 255792021944 for Tanzania, 254798570132 for Kenya, etc.) without + or spaces.'));
            process.exit(1);
        }

        setTimeout(async () => {
            try {
                let code = await conn.requestPairingCode(phoneNumber)
                code = code?.match(/.{1,4}/g)?.join("-") || code
                console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
                console.log(chalk.yellow(`\nPlease enter this code in your WhatsApp app:\n1. Open WhatsApp\n2. Go to Settings > Linked Devices\n3. Tap "Link a Device"\n4. Enter the code shown above`))
            } catch (error) {
                console.error('Error requesting pairing code:', error)
                console.log(chalk.red('Failed to get pairing code. Please check your phone number and try again.'))
            }
        }, 3000)
    }
    store?.bind(conn.ev)
conn.ev.on('connection.update', async (update) => {
        const {

                connection,
                lastDisconnect
        } = update
try{
                if (connection === 'close') {
                        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
                        if (reason === DisconnectReason.badSession) {
                                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                                startconn()
                        } else if (reason === DisconnectReason.connectionClosed) {
                                console.log("Connection closed, reconnecting....");
                                startconn();
                        } else if (reason === DisconnectReason.connectionLost) {
                                console.log("Connection Lost from Server, reconnecting...");
                                startconn();
                        } else if (reason === DisconnectReason.connectionReplaced) {
                                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                                startconn()
                        } else if (reason === DisconnectReason.loggedOut) {
                                console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
                                startconn();
                        } else if (reason === DisconnectReason.restartRequired) {
                                console.log("Restart Required, Restarting...");
                                startconn();
                        } else if (reason === DisconnectReason.timedOut) {
                                console.log("Connection TimedOut, Reconnecting...");
                                conn();
                        } else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
                }
                if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
                        console.log(color(`\nConnecting...`, 'white'))
                }
                if (update.connection == "open" || update.receivedPendingNotifications == "true") {
                        console.log(color(` `,'magenta'))
            console.log(color(`Connected to => ` + JSON.stringify(conn.user, null, 2), 'green'))
await delay(1999)        

                const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net';
            await conn.sendMessage(botNumber, { 
                text: 
                `
╔══❐ *𝐃𝐀𝐕𝐄-𝐌𝐃 CONNECTED* ❐══╗
║ ➤ *Bot:* 𝐃𝐀𝐕𝐄-𝐌𝐃
║ ➤ *Time:* ${new Date().toLocaleString()}
║ ➤ *Status:* Online 💠
║ ➤ *User:* ${botNumber}
╚════════════════════════════╝`,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400480173280@newsletter',
                        newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
                        serverMessageId: -1
                    }
                }
            });
console.log(color('>DAVE-MD is Connected< [ ! ]','red'))
                }

} catch (err) {
          console.log('Error in Connection.update '+err)
          startconn();
        }
})
conn.ev.on('creds.update', saveCreds)
conn.ev.on("messages.upsert",  () => { })



//------------------------------------------------------


    //autostatus view
              conn.ev.on('messages.upsert', async chatUpdate => {
                if (global.statusview){
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const mek = chatUpdate.messages[0];

            if (!mek.message) return;
            mek.message =
                Object.keys(mek.message)[0] === 'ephemeralMessage'
                    ? mek.message.ephemeralMessage.message
                    : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                let emoji = [ "💔","❤️", "🌚","😀", "👌" ];
                let sigma = emoji[Math.floor(Math.random() * emoji.length)];
                await conn.readMessages([mek.key]);
                conn.sendMessage(
                    'status@broadcast',
                    { react: { text: sigma, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
            }

        } catch (err) {
            console.error(err);
        }
      }
   }
 )  

conn.ev.on('group-participants.update', async (update) => {
        await handleGroupParticipantUpdate(conn, update);
    });

    conn.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('Xeon') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(conn, mek, store)
            require("./case")(conn, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

  conn.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await handleStatus(conn, chatUpdate);
                return;
            }
            if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return

            try {
                await handleMessages(conn, chatUpdate, true)
            } catch (err) {
                console.error("Error in handleMessages:", err)
                if (mek.key && mek.key.remoteJid) {
                    await conn.sendMessage(mek.key.remoteJid, { 
                        text: '❌ An error occurred while processing your message.',
                        contextInfo: {
                            forwardingScore: 1,
                            isForwarded: false,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363400480173280@newsletter',
                                newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
                                serverMessageId: -1
                            }
                        }
                    }).catch(console.error);
                }
            }
        } catch (err) {
            console.error("Error in messages.upsert:", err)
        }
    }) 
    conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    conn.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    conn.getName = (jid, withoutContact = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            list.push({
                    displayName: await conn.getName(i),
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
            })
        }
        conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    conn.public = true

    conn.serializeM = (m) => smsg(conn, m, store)

    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }


    conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }

conn.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return conn
}

async function tylor() {
    if (fs.existsSync(credsPath)) {
        console.log(color("Session file found, starting bot...", 'yellow'));
 await startconn();      
} else {
         const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("Session downloaded, starting bot.");
await startconn();
    } else {
     if (!fs.existsSync(credsPath)) {
    if(!global.SESSION_ID) {
            console.log(color("Please wait for a few seconds to enter your number!", 'red'));
await startconn();
        }
    }
  }
 }
}

tylor()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p }) => {
  let img = 'https://i.imgur.com/fm38vAD.jpeg'
  let info = `*BOT ACTIVE*`
  await conn.reply(m.chat, info, m, {
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 256,
      isForwarded: true,
      externalAdReply: {
        title: author,
        body: botname,
        sourceUrl: fgyt,
        thumbnail: await conn.getFile(img),
      },
    },
  })
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp()

export default handler
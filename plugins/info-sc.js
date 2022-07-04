import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/Botwa021*`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Thanks', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler

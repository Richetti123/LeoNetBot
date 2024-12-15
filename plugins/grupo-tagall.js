let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@leonardo_sanchez_2007 ${pesan}`
let teks = `*ETIQUETA GENERAL DE LEONETBOT*\n${oi}\n\n*💅🏻@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫*\n`
for (let mem of participants) {
teks += `🦁🔥 @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler

let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selalu👋*
╔═══════════════════
║ _*DONASI UNTUK*_  𝙍𝙐𝙆𝘼 - 𝘽𝙊𝙏
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : 082154156241
║│➸ *PULSA*: 082154156241
║│➸ *GOPAY*: Lagi Gak pakai
║╰──────────────────
╰═══════════════════

`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

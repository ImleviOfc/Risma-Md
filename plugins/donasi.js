let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕

››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Dana:* [085172446692]
│┝‷✧ *Pulsa:* [085172446692]
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───╮
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI ཌ✼ʟᴇᴠɪ-ʏᴀɴ-xʜɪᴀᴏ✼ད* ´ˎ˗
│ ✎ _Nama_ : Levi adnansyah
│ ✎ _Sekolah_ : SMP 6 SAMBALIUNG
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : KALTIM
│ ✎ _Status_ : Pelajar SMP
│ ✎ _WhatsApp_ :
│    wa.me/6285172446692
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler

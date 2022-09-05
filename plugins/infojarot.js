let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _3k/grup (1 minggu)_
┊⫹⫺ *Normal:* _5k/grup (1 bulan)_
┊⫹⫺ *Standar:* _10k/grup (2 bulan)_
┊⫹⫺ *Pro:* _35k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _65k/grup (6 bulan & 1 bulan *Premium*)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (1 minggu)_
┊⫹⫺ *Normal:* _10k (1 bulan)_
┊⫹⫺ *Pro:* _40k (4 bulan)_
┊⫹⫺ *Vip:* _50k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _999k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [085172446692]
• *Dana:* [085172446692]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler

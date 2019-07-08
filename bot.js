const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}sunucuya giriş yaptı ve artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,Hoş Geldin');
  }
  if (msg.content.toLowerCase() === 'ıp') {
    msg.channel.sendMessage('Mta Ip imiz Açılmamıştır');
  }
  if (msg.content.toLowerCase() === 'websitesi') {
    msg.reply('https://teamtheunion.com');
  }
  if (msg.content.toLowerCase() === 'discord') {
    msg.reply('https://discord.gg/Suecmpp');
  }
  if (msg.content.toLowerCase() === 'ıp') {
    msg.reply('https://discord.gg/RCEXgJg');
  }
  if (msg.content.toLowerCase() === 'botkapa') {
    msg.channel.sendMessage('Bot Kapanıyor');
  }
});

client.login('NTk3NTE4NzU5Nzc4ODQ0Njg5.XSJR8Q.D6hhoX6IzbJTzb-nuQzow6INaQ8');

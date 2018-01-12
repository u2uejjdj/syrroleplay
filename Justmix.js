
const Discord = require("discord.js");
const client = new Discord.Client();
const moment = ('moment');
const dateFormat = require('dateformat');
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const http2 = require('http2');

////////////////Wait///////////
const token = "Mzc3NTU2Mjk5MDg2NTYxMjkw.DQBvFw.ShNCq5jR7jNCIkHsEuEGTYzZ__A";
const w = ['https://cdn.discordapp.com/attachments/352756697833537547/385865093214371842/608639378.jpg',]


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});














//-------------------------------------<help

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "<help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
***
:white_small_square:  ( اوامر الادارة***
**
للترحيب و للمغادرة اعمل شات اسمه
:arrow_right:  wel او wlc

للترحيب بدون مغادرة اعمل شات اسمه
:arrow_right:  wlcm

:small_orange_diamond:  البوت يكتب الي انت تكتبه في صورة
<draw
:small_orange_diamond:  لمسح الشات
<clear
:small_orange_diamond:  للباند
<ban
:small_orange_diamond:  للطرد
<kick
:small_orange_diamond:  للارسال لاعضاء السيرفر بشكل مطور
<bc
:small_orange_diamond:  للارسال لاعضاء السيرفر بشكل عادي
<bc2
:small_orange_diamond:  لأعطاء شخص ميوت بالسيرفر - يلزم ان يكون بالسيرفر رتبة Muted
<mute
:small_orange_diamond:  لانشاء 140 لون
<colorcr

----
**
***
:white_small_square: ( الاوامر العامة***
**
:small_blue_diamond:  سيرفر الدعم الفني للبوت
<sup
:small_blue_diamond:  للدعوة البوت لسيرفرك
<inv
:small_blue_diamond:  القرعة من 0 الي 100
<roll
:small_blue_diamond:  معلومات الشخص
<id
:small_blue_diamond:  عدد رتب السيرفر
<roles
:small_blue_diamond:  صورة اي عضو
<av
:small_blue_diamond:  صورة السيرفر
<aser
:small_blue_diamond:  بنج البوت
<ping
:small_blue_diamond:  لمعرفة حالة الاعضاء
<mb
:small_blue_diamond:  معلومات السيرفر
<server
:small_blue_diamond: يخلي البوت يرسل رسالة و يعدلها
<edit
:small_blue_diamond:  البوت يكتب اللي تكتبه
<embed
:small_blue_diamond:  حالة اعضاء السيرفر
<mb
 ----
**

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('**حرك الى خاص , #جيش_مجد**');
  }
});

//------------------------------------<support

client.on('message', message => {
    if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'sup')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
**
اهلا بك لاي استفسار عن مشكلة
https://discord.gg/SS395Ge

**

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'sup')) {
    msg.reply('**حرك الى خاص #جيش_مجد**');
  }
});

//-------------------------------------<الكونسل وتشغيل البوت

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Justmix`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
    const Games = [`<help ${client.guilds.size} Server`, `<help ${client.users.size} user`, `<invite`]
  setInterval(() => { client.user.setGame(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 10000)
});


//-------------------------------------<inv

client.on('message' , message => {
  if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'inv')) {
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: اضغط هنا رابط البوت')
.setURL('https://discordapp.com/oauth2/authorize?client_id=401076299210162176&scope=bot&permissions=15416')
message.channel.sendEmbed(embed);
}
});

//-------------------------------------<kick ban

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  


  if (command == "kick") {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك صلاحية للكيك**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك صلاحيات الكيك");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المراد طرده**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد هذا الشخص**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`تم طرد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو اللي انطرد**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بالطرد**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
    
  })
}
});

client.on('message', message => {
  if (message.author.boss) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");

  message.guild.member(user).ban();

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو الي تبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بتبنيده:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

//-------------------------------------<mb

client.on('message', message => {
  if(message.content.startsWith (prefix  + 'mb')) {
      if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

message.channel.sendEmbed(embed)
}
});

//-------------------------------------<clear

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``:pencil: :white_check_mark:",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });


//-------------------------------------<id

client.on("message", msg => {
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':Bird BoT:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});

//-------------------------------------<roles

client.on('message', message => {
  if(message.content.startsWith (prefix  + 'roles')) {
    if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField(':trophy:  عدد الرتب',`**[ ${message.guild.roles.size} ]**`)
      message.channel.sendEmbed(embed);
  }
});

//-------------------------------------<av

client.on('message', message => {
          if(!message.author.bot) return
      if(message.content.startsWith (prefix  + 'av')) {
          var mentionned = message.mentions.users.first();
      var soov;
        if(mentionned){
            var soov = mentionned;
        } else {
            var soov = message.author;
            
        }
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(`${soov.avatarURL}`)
        message.channel.sendEmbed(embed);
      }
  });

client.on("message", message => {
     if(message.author.bot) return;
        if(message.content === prefix + "aser"){ 
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
            const embed = new Discord.RichEmbed()
    
        .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
    .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
     message.channel.send({embed});
        }
    });
  
//-------------------------------------<ping

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage(' **Bot Bird Ping is  ** ! `' + `${Date.now() - message.createdTimestamp}` + ' ms📶`');
    }
});

//-------------------------------------<log bot


client.on("guildCreate", guild => {
client.channels.get("379406489720193035").send('** Bird BoT** ``Added``:white_check_mark:  To Server '+`** [ ${guild.name} ] **`+''+'  Server Owner   ' +`**[ ${guild.owner.user.username} ]**` +'')
});

client.on("guildDelete", guild => {
  console.log(`  Bird BoT From Server ${guild.name}, Server Owner ${guild.owner.user.userme}`)
  client.channels.get("379406489720193035").send('**  Bird BoT**``Kicked``:x:  From Server '+`** [ ${guild.name} ] **`+''+' Server Owner ' +`**[ ${guild.owner.user.username} ]**` +'')
  });

    
//-------------------------------------<bot

client.on('message', function(message) {
        var prefix = "<";
        var Color = ['bff442','f4d941','ea3c62','ffffff']
        if (message.content.startsWith(prefix + 'bot')) {
        if (message.author.id !== '334435543851204618') return;  
            var ZmP = new Discord.RichEmbed()
.setColor(`${Color[Math.floor(Math.random() * Color.length)]}`)
.addField('**:crown: السيرفرات**','**[ '+client.guilds.size+' ]**',true)
.addField('**:bust_in_silhouette: المستخدمين**','**[ '+client.users.size+' ]**',true)
.addField('**:earth_africa: الرومات**','**[ '+client.channels.size+' ]**',true)
.setFooter('!Bird Bot',`${client.user.avatarURL}`)
.setTimestamp()
message.channel.send({embed:ZmP});
}
});
//-------------------------------------<bc

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('<bc-users')){
if(!message.author.id === '334435543851204618') return;
message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
message.channel.send("**<bc <message>**");
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('# | السيرفر', `${message.guild.name}`,true)
      .addField('# | المرسل ', `${message.author.username}#${message.author.discriminator}`,true)
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.send(`${m}`,{embed: bc});
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)   
  .addField(':diamond_shape_with_a_dot_inside:  عدد الاعضاء المرسل لهم ',`**[ ${message.guild.memberCount} ]**`, true)        
  .addField(':pencil:| الرسالة ', args)
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});

client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
message.channel.send("**<bc2 <message>**");
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('# | السيرفر', `${message.guild.name}`,true)
      .addField('# | المرسل ', `${message.author.username}#${message.author.discriminator}`,true)
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)   
  .addField(':diamond_shape_with_a_dot_inside:  عدد الاعضاء المرسل لهم ',`**[ ${message.guild.memberCount} ]**`, true)        
  .addField(':pencil:| الرسالة ', args)
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});

//-------------------------------------<join server

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name','wel');
     if (!channel) return; 
          let memberavatar = member.user.avatarURL
        let embed = new Discord.RichEmbed()
    .setThumbnail(memberavatar)
       .setColor('BLUE')
       .addField(':sunflower:  حياك الله منور السيرفر',`**[ ${member} ]**`,true)
       .addField(':levitate: انت العضو رقم',`**[ ${member.guild.memberCount} ]**`,true)
       channel.send(`401048878520074251`)
     channel.send({embed:embed});
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name','wlc');
       if (!channel) return; 
            let memberavatar = member.user.avatarURL
          let embed = new Discord.RichEmbed()
      .setThumbnail(memberavatar)
         .setColor('BLUE')
         .addField(':sunflower:  حياك الله منور السيرفر',`**[ ${member} ]**`,true)
         .addField(' :levitate: انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
         channel.send(`401048878520074251`)
       channel.send({embed:embed});
     });
     
client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name','wlcm');
     if (!channel) return; 
          let memberavatar = member.user.avatarURL
        let embed = new Discord.RichEmbed()
    .setThumbnail(memberavatar)
       .setColor('BLUE')
       .addField(':sunflower:  حياك الله منور السيرفر',`**[ ${member} ]**`,true)
       .addField(' :levitate: انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
       channel.send(`401048878520074251`)
     channel.send({embed:embed});
   });

//-------------------------------------<leave server

client.on('guildMemberRemove', member => {
      let channel = member.guild.channels.find('name', 'wlc');
        if (!channel) return; 
        let memberavatar = member.user.avatarURL
      let embed = new Discord.RichEmbed()
          .setColor('RED')
          .setThumbnail(member.avatar)
          .addField(':x: لقد خرج ',`**[ ${member} ]**`,true)
          .addField(':man_dancing:  تبقي',`**[ ${member.guild.memberCount} ]**`,true)      
          channel.send(`401048878520074251`)
        channel.send({embed:embed});
      });
      
client.on('guildMemberRemove', member => {
      let channel = member.guild.channels.find('name', 'wel');
        if (!channel) return; 
        let memberavatar = member.user.avatarURL
      let embed = new Discord.RichEmbed()
          .setColor('RED')
          .setThumbnail(member.avatar)
          .addField(':x: لقد خرج ',`**[ ${member} ]**`,true)
          .addField(':man_dancing:  تبقي',`**[ ${member.guild.memberCount} ]**`,true)      
          channel.send(`401048878520074251`)
        channel.send({embed:embed});
      });


//-------------------------------------<server

client.on('message', function(msg) {
  if(msg.content.startsWith (prefix  + 'server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(`${msg.guild.name}`,`\`\`منذ ${createdAt.toFixed(0)} يوما \`\``)
    .addField(':earth_africa: ** موقع السيرفر**',`**[ http://syrroleplay.esy.es ]**`,true)
    .addField(':military_medal:** الرتب**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر**',`**[ ${msg.guild.id} ]**`,true)
    msg.channel.send({embed:embed});
  }
});

//-------------------------------------<slist

client.on('message', message => {
if(message.content == prefix + 'slist') {
         if(!message.author.id === '323885452207587329') return;
         if(!message.author.id === '334435543851204618') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`

        `);
      message.channel.sendEmbed(serv);
}) 
}
});

client.on('message', message => {
if(message.content == prefix + 'slis') {
         if(!message.author.id === '323885452207587329') return;
         if(!message.author.id === '334435543851204618') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
let serv = new Discord.RichEmbed()
message.channel.send(`
**-------------------------**
  Server Name : **${gname}**
  Server MemberCount : **${gmemb} **
  **---------------------------**
        `);
}) 
}
});

///////////شغل البوت شف وش يقلك 
//-------------------------------------<embed

 client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if(message.content.startsWith (prefix  + 'embed')) {
      if(!message.channel.guild) return message.reply('**:x:**');            
      let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x00AE86)
      message.channel.sendEmbed(say);
      message.delete();
    }
  });

//-------------------------------------<حماية البوت

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("381895264195051539").send({embed:iiMo});
    }
});

//-------------------------------------<mute - unmute

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "<mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "<23923992399239392939393") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**انتهاء مدة لميوت**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});

//-------------------------------------<edite <roll

client.on('message',function(message) {
if (message.author.bot) return;    
    if(message.content.startsWith(prefix + 'edit')) {
    let args = message.content.split(" ").slice(1);     
       message.channel.send('ّ').then(msg=>{msg.edit(args.join(" "))});
    }
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//-------------------------------------<colorcr

client.on('message', function(message) {
  if(message.content.startsWith (prefix  + 'colorcr')) {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
    if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('انشاء الالوان :white_check_mark:')
}else{
message.channel.send('ما معاك البرمشن المطلوب :x:')
}
}
});

client.on('message', message=>{
  if(message.content.startsWith (prefix  + 'colorcr')) {
      if(!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
    if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
  let count = 0;
  let ecount = 0;
for(let x = 1; x < 141; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});



//-------------------------------------<منع النشر

client.on('message', message => {
    if(message.content.includes('discord.gg')){
      if(!message.channel.guild) return message.reply('**:x: ما في منع النشر بالخاص**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** غير مسموح بنشر انفايتات هنا :x: #جيش_مجد : ! **`)
    }
}
});

//-------------------------------------<draw

client.on('message', message => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}

});

//-------------------------------------<التوكن و المفتاح

var prefix = "<";
client.login('Token');
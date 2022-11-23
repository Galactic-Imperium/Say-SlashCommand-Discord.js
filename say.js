const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "say",
  alias: [],
async execute (client, message, args) {

if(message.author.id !== "bot-owner-id") return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:x:> |  No tienes suficientes permisos para ejecutar este Comando! | <:x:>**")
      .setColor("ff0000")
  ]
})

const escribe = args.slice(0).join(' ')
if(!escribe) return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:x:> |  No especificaste un mensaje a decir! | <:x:>**")
      .setColor("ff0000")
  ]
})
message.delete()
message.channel.send(escribe)
    
  }

}

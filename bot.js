//Defines bot/prefix and languages used.
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const prefix = ".";
const embedColour = "#F1DA75";

//Messages and commands that MormonBot can proform.
bot.on("message", (message) => {
    //Help message. Useful for new users.
    if (message.content == prefix + "help") {
            let embed = new Discord.RichEmbed();
            embed.setColor("#F1DA75");
            embed.setTitle("My commands are as follows:\n\n");
            embed.setDescription("**General commands:**\n" + prefix + "help *Displays this message.*\n\n**ALL COMMANDS AS OF VERSION 0.0.1**");
            message.channel.send({ embed });
    }
    if (message.content == prefix + "religions") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Abrahamic:", value: "Christian\nMuslim\nJewish\nBahá'í", inline: true},
            { name: "Eastern:", value: "Hindu\nBuddhist\nTaoist\nConfucian\nSikhi", inline: true},
            { name: "Other:", value: "Unitarian Universalist\nIrreligious\nPagan\nDeist\nGnostic\nPanentheist\nOther\n\n**For denomination roles do \`.[religion]\` e.g. \`.christian\` to see Christian denominations.**\n\nThe current religions with availiable denominations are: **Christian, Muslim, Irreligious, Hindu, Buddhist and Jewish**\n\nContact a moderator if there is a role you think should be added.", inline: true}
            ]
          }
        });
    }
    if (message.content == prefix + "christian") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Cathodox:", value: "Catholic\nOrthodox\nAnglican", inline: true},
            { name: "Protestant:", value: "Baptist\nLutheran\nMethodist\nReformed", inline: true},
            { name: "Restorationist:", value: "LDS (Mormon)\nJehovah's Witness", inline: true},
            { name: "Other:", value: "Messianic Jew\nCongregational\n\nContact a moderator if there is a role you think should be added.", inline: true},
            ]
          }
        });
    }
    if (message.content == prefix + "muslim") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Muslim:", value: "Sunni\nShia\nKharijite\nSufi\n\nContact a moderator if there is a role you think should be added.", inline: true},
        ]
      }
    });
}
    if (message.content == prefix + "irreligious") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Irreligious:", value: "Atheist\nAgnostic\nIgnostic\n\nContact a moderator if there is a role you think should be added.", inline: true}
        ]
      }
    });
}
    if (message.content == prefix + "hindu") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Hindu:", value: "Vaishnavi\nShaivi\n\nContact a moderator if there is a role you think should be added.", inline: true}
        ]
    }
    });
}
    if (message.content == prefix + "buddhist") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Buddhist:", value: "Theravada\nMahayana\nVajrayana\n\nContact a moderator if there is a role you think should be added.", inline: true}
        ]
    }
    });
}
    if (message.content == prefix + "jewish") {
        message.channel.send({embed: {
            title: "Assignable Roles:\n\n",
            color: 0xF1DA75,
            fields: [
            { name: "Jewish:", value: "Orthodox\nConservitive\nReformed\nReconstructionist\n\nContact a moderator if there is a role you think should be added.", inline: true}
        ]
    }
    });
}
    if (message.content.startsWith(prefix + 'kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const logs = member.guild.channels.find('name', 'mod-log');
            if (member) {
                member.kick(`I don\'t know ask the moderator that kicked him.`).then(() => {
                message.reply(`Successfully kicked ${user}`);
                logs.send({embed: {
                    title: "User kicked:\n\n",
                    color: 0xaa3333,
                    fields: [
                        { name: "Username:", value: `${member}\n\nUser ID: ${member.id}`, inline: true},
                        { name: "reason", value: `null`, inline: true},
                    ]
                    }
                });
                }).catch(err => {
                message.reply('I was unable to kick the member. `' + err + '`');
            });
        }   else {
          message.reply('That user doesn\'t exist!');
        }
      } else {
        message.reply('That\'s nice but who do you want to kick?');
      }
    }
    if (message.content.startsWith(prefix + 'ban')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const logs = member.guild.channels.find('name', 'mod-log');
            if (member) {
                member.ban(`I don\'t know ask the moderator that kicked him.`).then(() => {
                message.reply(`Successfully banned ${user}`);
                logs.send({embed: {
                    title: "User banned:\n\n",
                    color: 0xaa3333,
                    fields: [
                        { name: "Username:", value: `${member}\n\nUser ID: ${member.id}`, inline: true},
                        { name: "reason", value: `null`, inline: true},
                    ]
                    }
                });
                }).catch(err => {
                message.reply('I was unable to ban the member. `' + err + '`');
            });
        }   else {
          message.reply('That user doesn\'t exist!');
        }
      } else {
        message.reply('That\'s nice but who do you want to ban?');
      }
    }
    
    /*if (new Date().getHours() == '5' && new Date().getMinutes() == '00') {
        console.log("It worked");
                bot.channels.find("id", "390360891528445961").send(`<@&390363444857012226> today we are reading something-something`);
                bot.channels.find("id", "391052829831462913").send(`<@&391051443672711168> today we are reading something-something`);
                bot.channels.find("id", "390359294115053581").send(`<@&390363313869029387> today we are reading something-something`);
    }*/
});

bot.on('guildMemberAdd', member => {
    const unverified = member.guild.channels.find('name', 'unverified');
    const logs = member.guild.channels.find('name', 'join-log')

    if (!unverified) return;
    unverified.send(`Welcome ${member} to **Religious Online Discussions**! We are a server dedicated to Interfaith cooperation to study religion and other philosophies to bring us closer to any Power we believe in whether that be one God, many gods, no god, etc.\nTo get yourself started please do \`.religions\` to check out the roles we have and do \`.iam [role]\` to add the role to yourself.\nContact a staff member if you need assistence and enjoy your time here.`);
    logs.send({embed: {
        title: "User joined:\n\n",
        color: 0x66ba67,
        fields: [
            { name: "Username:", value: `${member}`, inline: true},
            { name: "Joined server:", value: `${member.joinedAt}`, inline: true},
            { name: "Joined Discord:", value: `${member.user.createdAt}\n\nUser ID: ${member.id}`, inline: true}
        ]
      }
    });
  });
bot.on('guildMemberRemove', member => {
    const logs = member.guild.channels.find('name', 'join-log')
    logs.send({embed: {
        title: "User left:\n\n",
        color: 0xaa3333,
        fields: [
            { name: "Username:", value: `${member}\n\nUser ID: ${member.id}`, inline: true},
            { name: "Famous Last Words:", value: `${member.lastMessage}`, inline: true},
        ]
        }
    });
});

console.log("Bot on.")
//Bot login Token.
bot.login(process.env.BOT_TOKEN);

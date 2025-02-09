/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WELCOME == 'gif') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*👩‍🦰Amazone Alexa*\n*💫🧚‍♀️Hey There Im Alive Now*\n\n*◉Version :► 6.2.1 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► Amazone Alexa Is a Powerfull Bot For Whatsapp.*\n*◯●Github Link :►https://tinyurl.com/yhq3c6ms-\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n_◈https://chat.whatsapp.com/JdNWV3viiGKGINYNrb5oy8*\n▷⚡Official Pluggins Group* \n ◈https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👩‍🦰Powered By ʜᴀᴛᴢᴜʜᴏʟᴇ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*👩‍🦰Amazone Alexa*\n*💫🧚‍♀️Hey There Im Alive Now*\n\n*◉Version :► 6.2.1 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► Amazone Alexa Is a Powerfull Bot For Whatsapp.*\n*◯●Github Link :►https://tinyurl.com/yhq3c6ms-\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n _◈https://chat.whatsapp.com/JdNWV3viiGKGINYNrb5oy8_\n*▷⚡Official Pluggins Group* \n _◈https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT_"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👩‍🦰Powered By ʜᴀᴛᴢᴜʜᴏʟᴇ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

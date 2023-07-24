// All necessary imports for this file

const { EmbedBuilder } = require('discord.js');
const Parser = require('rss-parser');
const parser = new Parser();
const fs = require('fs');

// Will import the do not talk module.

// Environment variables that are associated with youtube

const youtubeId = process.env.PASB;
const yT = process.env.YOUTUBE;

// This function will check the youtube rss feed and post the newest upload or livestream

async function checkVideo(client)  {
    const data =  await parser.parseURL(
        `https://youtube.com/feeds/videos.xml?channel_id=${youtubeId}`
    ).catch(console.error);
    const rawData = fs.readFileSync('./JSON/video.json', 'utf-8');
    const jsonData = JSON.parse(rawData);

    if(jsonData.id !== data.items[0].id) {
        fs.writeFileSync(`./JSON/video.json`, JSON.stringify({ id: data.items[0].id }));
    } else if (jsonData.id ===  data.items[0].id) return; 

    // This was created to find the correct channel and embed a message

    /*const group = await client.guilds
    .fetch('933847397359026258')*/
    const group = await client.guilds
    .fetch('1098271252852002857')
    .catch(console.error)
    const channel = await group.channels
    //console.log(channel)
    .fetch('1098271253296582712')
    .catch(console.error);

    const { title, link, id, author } = data.items[0];
    const embed = new EmbedBuilder({
        title: title,
        url: link,
        timestamp: Date.now(),
        image: {
            url: `https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`
        },
        author: {
            name: author,
            iconURL: `https://pbs.twimg.com/media/FvSQK0eaUAAKmzu?format=jpg&name=small`,
            url: `https://www.youtube.com/@panafricanismstrikesback/?sub_confirmation=1`
        },
        /*footer: {
            text: `${bot.user.tag}`,
            iconURL: bot.user.displayAvatarURL()
        }*/
    });
    await channel.send({ embeds: [embed], content: `Yo @everyone, Pan Africanism Strikes Back just posted a new video!` }).catch(console.error);
}

module.exports = checkVideo;
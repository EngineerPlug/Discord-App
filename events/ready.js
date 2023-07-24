// The bot is now alive and ready to work, will log this into the console.

const checkVideo = require('../tools/checkVideo');

async function ready(client) {
  await client.once('ready', () => {
        console.log(`${client.user.username} is currently logged in successfully.`);
        //console.log();
        setInterval(checkVideo, 140 * 1000, client);
    });
}
module.exports = ready;

async function doNotTalk(client) {
    client.on('message', (message) => {
        if (message.author.bot === true) return;
    })
}

module.exports = doNotTalk;
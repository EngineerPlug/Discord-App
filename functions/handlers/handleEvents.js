const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFiles = fs.readdirSync(`./events/${folder}`)
        .filter((file) => file.endsWith('.js'))
        
        switch (folder) {
            case "client":
                const event = require(`./events/${folder}`);
                if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
                else client.on(event.name, (...args) => event.execute(...args, client));
                break;

                default:
                    break;
        }
    }
}
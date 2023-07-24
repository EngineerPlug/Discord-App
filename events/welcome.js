// Welcome functionality

async function welcome(client) {
client.on('guildMemberAdd', member => {
	const message = 'Everyone, please welcome ' + member.user.username + ' to ' + member.guild.name + '! It is now ' + member.guild.memberCount + ' members that have joined!';
	//const channelId = '1101614883319070842';
    const boochyWelcome = '1101614883319070842';
	const channel = member.guild.channels.cache.get(boochyWelcome);

	channel.send(message);

});
};

/* This method listens for new members that have just joined 
the discord server, then sends them a welcome 
message and announces the new member count. */

module.exports = welcome;
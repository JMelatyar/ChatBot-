
var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());



var DialogLabels = {
    PhonesAndTablets: 'Phones and Tablets',
    Drones: 'Drones',
    GamingAndVR: 'Gaming and VR',
    Computers: 'Computers',
    Wearables: 'Wearables',
    SmartHome: 'Smart Home'
};


var bot = new builder.UniversalBot(connector, [
    function (session) {
        session.send("Welcome to Grover!");
        builder.Prompts.choice(session, 
        	"please select one of the follwing categories of the products.",
        	
        	[DialogLabels.PhonesAndTablets,DialogLabels.Drones,DialogLabels.GamingAndVR,DialogLabels.Computers,DialogLabels.Wearables,DialogLabels.SmartHome], 
        	{ listStyle: builder.ListStyle.button });   	 
        },

   function(session,result){
   	var selection = result.response.entity;
        switch (selection) {
            case DialogLabels.PhonesAndTablets:
                return session.beginDialog('Phones and Tablets');
            case DialogLabels.Drones:
                return session.beginDialog('Drones');
            case DialogLabels.GamingAndVR:
                return session.beginDialog('Gaming and VR');
            case DialogLabels.Computers:
                return session.beginDialog('Computers');
            case DialogLabels. Wearables:
                return session.beginDialog('Wearables');
            case DialogLabels. SmartHome:
                return session.beginDialog('Smart Home');
        }}

    ]); 

bot.dialog('Phones and Tablets', require('./phones&tablets'));
bot.dialog('Drones', require('./drones'));
bot.dialog('Gaming and VR', require('./gaming&vr'));
bot.dialog('Computers', require('./computers'));
bot.dialog('Wearables', require('./wearables'));
bot.dialog('Smart Home', require('./smartHome'));

// log any bot errors into the console
bot.on('error', function (e) {
    console.log('And error ocurred', e);
});

bot.on('conversationUpdate', function (message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function (identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address,'/');
            }
        });
    }
});

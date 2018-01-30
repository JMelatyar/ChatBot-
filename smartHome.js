var builder = require('botbuilder');

module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"these modles of phones and tablets with the following subscription plan prices  are available:",
        	
        	['Amazon Alexa Dot: 44.99 €',
             'Amazon Alexa Echo: 49.99 €',
             'Tchibo Qbo Milk Master: 29.99 €',
             'Samsung Robotic Vacuum Cleaner POWERbotVR20J9020UR/EG: 39.99 €',
             'Samsung Robotic Vacuum Cleaner POWERbotVR20J9259U/EG: 39.99 €'

            ], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
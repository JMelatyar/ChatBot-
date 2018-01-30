var builder = require('botbuilder');

module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"The available models of Wearables with thier subscription plan prices:",
        	
        	['Apple Watch 38mm: 39.99 €', 
             'Apple Watch 42mm: 44.99 €', 
             'Suunto Watch Ambit 3: 39.99 €', 
             'Polar Watch V800: 39.99 €', 
             'Asus Watch WI503Q-1LDBR0001: 44.99 €'
             ], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
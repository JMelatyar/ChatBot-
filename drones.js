var builder = require('botbuilder');

module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"these modles of drones with the following subscription plan prices  are available:",
        	
        	['Parrot Drone BEPOP: 49.99 €', 'Parrot Drone BEBOP 2: 59.99 €'], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
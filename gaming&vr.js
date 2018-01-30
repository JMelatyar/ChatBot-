var builder = require('botbuilder');

module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"these gaming & VR products  with the following subscription plan prices  are available:",
        	
        	['HTC Vive: 59.99 €', 'Oculus Virtual Reality Glasses Rift VR: 59.99 €'], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
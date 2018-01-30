var builder = require('botbuilder');
// Phones and Tablets Dialog
module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"these modles of phones and tablets with the following subscription plan prices  are available:",
        	
        	['iPhone 7 128GB:   44.99 €', 'iPhone 7 32GB:   39.9 €', 'iPhone 7 Plus 128GB:   49.99 €', 'Galaxy S8 64GB:   44.99 €', 'Galaxy S8+ 64GB:   49.99 €'], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
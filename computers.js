var builder = require('botbuilder');

module.exports = [
    function(session){
    	builder.Prompts.choice(session, 
    		"these modles of phones and tablets with the following subscription plan prices  are available:",
        	
        	['MacBook 12 M-5Y31, 8GB RAM, 516GB: 59.99 €',
             'MacBook Air 11 i7 2.2, 8GB RAM, 512GB: 64.99 €',
             'MacBook Air 13 i5-5250U, 4GB RAM, 128GB: 69.99 €',
            'MacBook Pro 13 i5-3210M, 4GB RAM,500GB: 74.99 €',
            'Convertible Laptop Surface Book 512GB SSD Intel Core i7 16GB RAM dGPU: 59.99 €',
             'Convertible Laptop YOGA 300-11IBR80M1004KGE: 59.99 €'], 
        	{ listStyle: builder.ListStyle.button });

    },

    
     function (session,result){
     	session.endDialog("making order is not possible here. please start over for checking other products"); 
    }
]; 
var sum = 0;
var pepsiCount = 0;
var breadCount = 0;
var waterCount = 0;
var pepsiCost = 1.50;
var breadCost = 2.00;
var waterCost = 1.75;
var pepsiSub = 0;
var breadSub = 0;
var waterSub = 0;





function addToCart(name) {


    
    if (name === 'Pepsi') 
    	{
    	  pepsiCount = pepsiCount+1;
    	  pepsiSub = pepsiCount*pepsiCost;
    	  sum = sum + pepsiCost;
    	}
    if (name === 'Bread') 
    	{
    		breadCount = breadCount+1;
    		breadSub = breadCount*breadCost;
    		sum = sum + breadCost;
    	}

    if (name === 'Water') 
    	{
    		waterCount = waterCount+1;
    		waterSub = waterCount*waterCost;
    		sum = sum + waterCost;
    	}

    
	
    
    

	document.getElementById("cart").innerHTML ="<table border=1><tr><td>Name</td><td>Cost</td><td>Amount</td><td>Subtotal</td></tr><tr><td>"+"Pepsi"+"</td><td>"+pepsiCost+"</td><td>"+pepsiCount+"</td><td>"+pepsiSub+"</td></tr><tr><td>"+"Bread"+"</td><td>"+breadCost+"</td><td>"+breadCount+"</td><td>"+breadSub+"</td></tr><tr><td>"+"Water"+"</td><td>"+waterCost+"</td><td>"+waterCount+"</td><td>"+waterSub+"</td></tr></table>";
		
    // document.getElementById("pepsi").innerHTML ="<td>"+"Pepsi"+"</td><td>"+pepsiCost+"</td><td>"+pepsiCount+"</td><td>"+pepsiSub+"</td>";
    // document.getElementById("bread").innerHTML ="<td>"+"Bread"+"</td><td>"+breadCost+"</td><td>"+breadCount+"</td><td>"+breadSub+"</td>";
    // document.getElementById("water").innerHTML ="<td>"+"Water"+"</td><td>"+waterCost+"</td><td>"+waterCount+"</td><td>"+waterSub+"</td>";
    document.getElementById("sum").innerHTML = "Total: "+sum;

    } 
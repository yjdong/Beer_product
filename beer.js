$(function(){
	$("#submit").click(function(){ //n
		
		var inputvalue = $("#number").val();
		if(inputvalue%5==0)
		{
			var batches = inputvalue/5;
			
			var beer = inputvalue;
			var water = batches * 6;
            var leave = batches * 2;
            var sugar = batches * 3;
            $("#beer").html(beer);
            $("#water").html(water);
            $("#leave").html(leave);
            $("#sugar").html(sugar);
            $("#watercost").html(water*12);
            $("#leavecost").html(leave*2);
            $("#sugarcost").html(sugar*5);
            $("#batches").html(batches);
		}
		else
		{
			alert("Potatoes must be the mutiples of 5 times");
		}
	}); //1
});
$(document).ready(function(){
	//$(".hide1").hide(); $("#hide1").hide();

	$('#input1').keypress(function(e){
		var a= $("#input1").val();
		if(e.which == 13 && a!==''){
			$("#abc").append("<div class ='append' class='glyphicons-icon circle_remove'><input type='checkbox' class='inp' /><span class='hover1'> " + a + "</span></div>");
			$(".hide1").show(); $("#hide1").show();
		}
	});

	//$("#select-deselect").click(function(){
		var b=$(".inp");
		if(this.checked){
			for(i=0; i<b.length; i++){
				$(b[i]).prop('checked',true);
				$(b[i]).next().addClass("doRed");
			}
		}else{
			for(i=0; i<b.length; i++){
				$(b[i]).prop('checked',false);
				$(b[i]).next().removeClass("doRed");
			}
		}
	});

//	$("#completed").click(function(){
		var y=$(".inp");
	   for(i=0; i<y.length; i++){
		 if (y[i].checked == false){	
		        $(y[i]).parent().hide();
		}else{
			 $(y[i]).parent().show();
			}
		}
	})

	//$("#pending").click(function(){
		var y=$(".inp");
	   for(i=0; i<y.length; i++){
		 if (y[i].checked == false)	{
		        $(y[i]).parent().show();
		}else{
				$(y[i]).parent().hide();
			}
		}	
	})

	//$("#all").click(function(){
		var y=$(".inp");
		for(i=0; i<y.length; i++){
		    $(y[i]).parent().show();
		}

	})
/////
	$('#abc').on('mouseenter','.append',function(){

		$(this).append("<button value ='delete' id ='delete'/>");	
	})

	$('#abc').on('mouseleave','.append',function(){
		$("#delete").remove();		
	})

//////

$("#append1").on('mouseenter','.hoover1', function(){
		$(this).append("<span class='glyphicon glyphicon-remove' id='delete1'></span>")
	})
	$("#append1").on('mouseleave','.hoover1',function(){
		$("#delete1").remove();
	})

	$("#append1").on('click','#delete1',function(){
		$('.hover1').remove
	})

   	//$('#abc').on('click','.inp',function(){
    	var z = $(".inp");
		if(this.checked){
			$(this).next().addClass("doRed");
			if(z.length == z.filter(":checked").length){
             	$("#select-deselect").prop('checked',true);
			}
	    }
		else{
           $(this).next().removeClass("doRed");
           $("#select-deselect").prop('checked',false);
	    }
	})	
});
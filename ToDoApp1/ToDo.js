$(document).ready(function(){
	$('.hide1').hide();
	$('#remove-completed').hide();
//Appending checkbox and text using handler bar
	
$('#inputtext').bind('keypress',function(i){
		var a=$('#inputtext').val();
		if(i.which == 13 && a==''){
			alert("Please add some text")
		}else if(i.which == 13 && a!== ''){
			//created handlebars templates
			var abc={ tweet:a }
			var b= Handlebars.compile( $('#template').html() );

			$('#append1').append("<div class='hoover1'><input type='checkbox' class='input1' /> <span>" + b(abc) + "</span> <span class='glyphicon glyphicon-remove' id='delete1'></span> </div>");
			$('#inputtext').val('');
			$('.hide1').show();
			$('#remove-completed').show();
		}
	});

//Select/deselect button
	$("#selectall").click(function(){
		var b=$(".input1");
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

// checkbox and text add color
	$('#append1').on('click','.input1',function(){
    	var z = $(".input1");
		if(this.checked){
			$(this).closest(".hoover1").addClass("doRed");
			if(z.length == z.filter(":checked").length){
             	$("#selectall").prop('checked',true);
			}
	    }
		else{
           $(this).closest(".hoover1").removeClass("doRed");
           $("#selectall").prop('checked',false);
	    }
	})

//Attech event on 'All' button 
	$("#all").click(function(){
		var y=$(".input1");
		for(i=0; i<y.length; i++){
		    $(y[i]).parent().show();
		}
	})

//Attech event on 'Completed' button 
	$("#completed").click(function(){
		var y=$(".input1");
	   for(i=0; i<y.length; i++){
		 if (y[i].checked == false){	
		        $(y[i]).parent().hide();
		}else{
			 	$(y[i]).parent().show();
			}
		}
	})

//Attech event on 'Pending' button 
	$("#pending").click(function(){
		var y=$(".input1");
	   for(i=0; i<y.length; i++){
		if (y[i].checked == false)	{
		        $(y[i]).parent().show();
		}else{
				$(y[i]).parent().hide();
			}
		}	
	})

//Attech event on 'remove' button
	$("#remove-completed").click(function(){
		var y=$(".input1");
		for(i=0; i<y.length; i++){
			if (y[i].checked == true){
				$(y[i]).parent().remove();
			}	
		}
	});

// Hover and add delete-sign
	$('#append1').on('click','#delete1',function(){
		$(this).closest('.hoover1').remove();
	});


});
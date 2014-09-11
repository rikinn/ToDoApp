$(document).ready(function(){

	$(".hide1").hide();

	$(".btn1").click(function(){
		
		var a= $(".form-control").val();
		if(a==""){
			alert("please enter some text")
		}
		else{
		$("#div2").append("<div> <input type='checkbox' class='abc' />" + a + "</div>" );
		$(".hide1").show();
		}

	});
		$(".abc").on('click', 'li', (function()){
		//$(this).next().css('color','red');
		alert("hi");
	})

});


$('btntry').click(function(){
		if($('.inp:checked').length){
			var a='';
			$('#select-deselect:checked').each(function(){
				a+=  $(this).val();
				alert(c);
			});
		}	
});


$("#all").on('click',"input[value='Delete']",function(){
		alert("hi");
		//$('#abc div').has('input:checkbox:checked').remove()
		
	}); 


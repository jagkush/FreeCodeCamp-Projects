$(document).ready(function(){
	$("#search").hide();
	$("#result_page").hide();
	$("input[type=search]").val('');

	$(".search_button").click(function(){
		$("#search").show();
		$(".search_button").hide();	
	});

	$(".random").click(function(){
		$(".search_button").show();
		$("input[type=search]").val('');
		$("#search").hide();
		$("#result_page").hide();
	});


/*
	$(".submit").click(function(){
		
		$("#result_page").show();

		
*		var urlb = "https://en.wikipedia.org/w/api.php";
var Prefix = "?action=opensearch&limit=5&namespace=0&format=jsonp&search=";
var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
var suffix = "&callback=?";

		var textValue = document.getElementsByClassName("search_field")[0].value;
		var api = url +textValue +suffix;
		var xdr = new XMLHttpRequest;
		xdr.open("GET", api);
		xdr.requestType = "jsonp";
		xdr.send();

		xdr.onload =  function(){
			var data = xdr.response;
			var result = data.query.search;
			populate(result);
			
		

		function populate(jsonObj){
		
		for (var i = 0; i < result.length; i++){
          $('#result_page').append('<p>'+data.search[i].title+'</p>');
          $('#result_page').append('<p>'+result[i].extract+'</p>');
     		};
   		
			}
};
	}); */
	
});
 


$('.submit').click(function() {

	$("#result_page").show();
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php',
                data: { action: 'query', list: 'search', pilimit:'max', exsentences:'1', exlimit:'max',
 prop: 'pageimages|extracts', srsearch: $("input[type=search]").val(), format: 'json' },
                dataType: 'jsonp',
                success: processResult,
               
           
        });
    }); 

  function processResult(result){


     for (var i = 0; i < result.query.search.length; i++){

     	var disp = document.createElement('div');
     		disp.className = 'resultPage';
     	var mylink = document.createElement('a');
  		mylink.href = 'https://en.wikipedia.org/?curid='+ result.query.search[i].pageid;
  		mylink.target = '_blank';
  		var myTitle = document.createElement('h4');
  		myTitle.textContent = result.query.search[i].title;
  		mylink.appendChild(myTitle);
  		disp.appendChild(mylink);

     	$(disp).append('<p>'+result.query.search[i].snippet+'...'+'</p>');

     	$('#result_page').append(disp);
     }
 }


 	function remove(){
    $('#result_page').html('');
}
 

  
  



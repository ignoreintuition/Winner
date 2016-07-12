(function(){
	var achievements = []
	var theTemplateScript = $('#award-template').html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	$.getJSON( "http://localhost:3000/win", function ( data ){
		var context = data;
		var theCompiledHTML = theTemplate(context);
		$('.content-placeholder').html(theCompiledHTML);
	});

})();


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
(function(){
	var achievements = []
	var theTemplateScript = $('#award-template').html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	$.getJSON( "http://localhost:3000/win/"+getParameterByName("_id"), function ( data ){
		var context = data;
		var theCompiledHTML = theTemplate(context);
		$('.content-item').html(theCompiledHTML);
	});

})();


(function(){
    var achievements = []
    var theTemplateScript = $('#award-template').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    $.getJSON( "data.json", function ( data ){
        var context = data;
        var theCompiledHTML = theTemplate(context);
        $('.content-placeholder').html(theCompiledHTML);
   });   
})();


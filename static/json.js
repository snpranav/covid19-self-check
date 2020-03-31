$(function() {

    // Pulling app-content
    let radioButtonCharacter = `&ensp; `
    $.getJSON('http://selfcheck.app/static/kannada.json', function(data) {
        $.each(data["app-content"], function(key, val) {
            $.each(val, function(className, classValues) {
                $.each(classValues, function(textKey, textValue) {
                    if(className===".option") {
                        $.each(textValue, function(optionKey, optionValue) {
                            optionValue = radioButtonCharacter + optionValue;
                            $(`${key} #formpage-${textKey} ${className}`)[optionKey].innerHTML += optionValue;
                        });
                    } else {
                        $(`${key} ${className}`)[textKey].innerHTML += textValue;
                    }
                });
            });
        });


        // Pulling title
        document.title = data["title"] + " | " + document.title;
    });
});
$(function() {
    radioButtonCharacter = `&ensp; `
    $.getJSON('http://localhost:8080/static/kannada.json', function(data) {
        $.each(data, function(key, val) {
            $.each(val, function(className, classValues) {
                $.each(classValues, function(textKey, textValue) {
                    if(className===".option") {
                        let sum = 0;
                        $.each(textValue, function(optionKey, optionValue) {
                            optionValue = radioButtonCharacter + optionValue;
                            $(`${key} #formpage-${textKey} ${className}`)[optionKey].innerHTML += optionValue;
                            console.log(optionValue);
                        });
                    }
                    $(`${key} ${className}`)[textKey].innerHTML += textValue;
                    console.log($(`${key} ${className}`)[textKey].innerHTML)
                });
            });
        });
    });
});
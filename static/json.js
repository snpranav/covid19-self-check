$(function() {
    let radioButtonCharacter = '&ensp; ';
    $.getJSON('https://covid19-self-check.glitch.me/static/kannada.json', function(data) {
        $.each(data, function(key, val) {
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
    });
});

$(document).ready(function() {

    // Pulling dynamic app-content
    let submitButtonText;
    let radioButtonCharacter = ``;
    $.getJSON(`http://localhost:8080/static/${language}.json`, function(data) {
        $.each(data["app-content"], function(key, val) {
            $.each(val, function(className, classValues) {
                $.each(classValues, function(textKey, textValue) {
                    if(className===".option") {
                        $.each(textValue, function(optionKey, optionValue) {
                            if(optionKey < $(`${key} #formpage-${textKey} ${className}`).length) {
                                try {
                                    optionValue = radioButtonCharacter + optionValue;
                                    $(`${key} #formpage-${textKey} ${className}`)[optionKey].append(optionValue);
                                } catch(err) {
                                    console.warn(err);
                                }
                            }
                        });
                    } else if(key==="#intro-text") {
                            if(textKey < $(`${key} ${className}`).length) {
                                $(`${key} ${className}`)[textKey].innerHTML += textValue;
                            } else {
                                $(`${key} ${className}`).parent().eq(textKey-1).clone().appendTo($(`${key} ${className}`).parent().eq(textKey-1));
                                $(`${key} ${className}`)[textKey].innerHTML = textValue;
                            }
                    } else {
                        try {
                            $(`${key} ${className}`)[textKey].innerHTML += textValue;
                        } catch (err) {
                            console.warn(err);
                        }
                    }
                });
            });
        });


        // Pulling Static Elements
        let staticElements = data["static"];
        try {
            document.title = staticElements["title"] + " | " + document.title;
            $("#restart-btn").innerHTML = staticElements["restart-btn"];
            submitButtonText = staticElements["submit-btn"];
        } catch (err) {
            console.warn(err);
        }
    });
});
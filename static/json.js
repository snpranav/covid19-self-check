$(document).ready(function() {
    let language;
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let lang = urlParams.get('lang');

    new Promise((resolve, reject) => {
        return fetch(`./static/${lang}.json`).then(response => {
            if(response.status==200) {
                language = lang;
            } else {
                language = "kannada";
            }
            resolve(response.status);
        })
    }).then(() => {
    // Pulling dynamic app-content
        let submitButtonText;
        let radioButtonCharacter = "&ensp; ";
        if(language==undefined) {
            language = "kannada";
        }

        $.getJSON(`./static/${language}.json`, function(data) {
            $.each(data["app-content"], function(key, val) {
                $.each(val, function(className, classValues) {
                    $.each(classValues, function(textKey, textValue) {
                        if(className===".option") {
                            $.each(textValue, function(optionKey, optionValue) {
                                if(optionKey < $(`${key} #formpage-${textKey} ${className}`).length) {
                                    try {
                                        optionValue = radioButtonCharacter + optionValue;
                                        $(`${key} #formpage-${textKey} ${className}`).eq(optionKey).append(optionValue);
                                    } catch(err) {
                                        console.warn(err);
                                    }
                                }
                            });
                        } else if(key==="#intro-text") {
                                if(textKey < $(`${key} ${className}`).length) {
                                    $(`${key} ${className}`)[textKey].innerHTML += textValue;
                                } else {
                                    if(className!=".title") {
                                        $(`${key} ${className}`).parent().eq(textKey-1).clone().appendTo($(`${key} ${className}`).parent().eq(textKey-1));
                                        $(`${key} ${className}`)[textKey].innerHTML = textValue;
                                    }
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
                $("#restart-btn").eq(0).append(staticElements["restart-btn"]);
                assignButtonText(staticElements["submit-btn"], data["app-content"]["#regForm"][".btn-covid"][0]);
            } catch (err) {
                console.warn(err);
            }
        });
    });
});

var submitButtonText;
var nextButton

function assignButtonText(sbt, nbt) {
    submitButtonText = sbt;
    nextButton = nbt;
}
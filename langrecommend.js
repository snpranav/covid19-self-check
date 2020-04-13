$(document).ready(() => {
    let regionName;
    try {
        fetch(`https://locate.covidselfcheck.app/`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            if(data["country"]=="IN") {
                regionName = data["body"]["country"] + "-" + data["body"]["region_code"];
            } else {
                regionName = data["body"]["country"];
            }
        }).then(() => {
            writeLanguages();
        }).catch((error) => {
            writeLanguages();
            console.warn(error);
        });
    } catch(err) {
        writeLanguages();
        console.warn(err);
    }

    function insertLanguageInHTML(key, val) {
        $(`#lang-select`).eq(0)
        .prepend(`
            <label class=" btn btn-default btn-lg lang-select-btn">
                <input type="radio" onclick="languageClick('${key}')" />
                &ensp; ${val["text"]} &rarr;<br />
            </label>

            <br /><br />

        `);
    }

    function writeLanguages() {
        fetch('./language-select.json')
            .then(response => {
                return response.json();
            }).then((data) => {
                let arrayOfLanguages = Object.keys(data);
                try {
                    let languagesToWrite = [];
                    // If regionName is undefined setting timeout
                    if(regionName == undefined) {
                        setTimeout(() => {
                        },1000);
                    } else {
                        arrayOfLanguages.forEach((lang) => {
                            if(Object.keys(data[lang]).includes("primary_region_code") && data[lang]["primary_region_code"].includes(regionName.toUpperCase())) {
                                if(data[lang]["region_code"].includes(regionName.toUpperCase())) {
                                    // Removing duplicates in region_code and primary_region_code
                                    data[lang]["region_code"].splice(data[lang]["region_code"].indexOf(regionName.toUpperCase()));
                                    console.log(language)
                                }
                                languagesToWrite.splice(0, 0, lang);
                            } else if(data[lang]["region_code"].includes(regionName.toUpperCase())) {
                                languagesToWrite.push(lang);
                            }
                            if(data[lang]["region_code"].includes(null)) {
                                languagesToWrite.splice(1, 0, lang);
                            }
                        });
                    }
                    if(languagesToWrite.length!=0) {
                        arrayOfLanguages = languagesToWrite;
                    } else {
                        arrayOfLanguages = ["english"];
                    }
                } catch (err) {
                    console.warn(err);
                } finally {
                    arrayOfLanguages.reverse();
                    arrayOfLanguages.forEach((lang) => {
                        insertLanguageInHTML(lang, data[lang]);
                    });
                    $(".loader-wrapper").fadeOut("slow");
                }
            })
    }
});
// try {
//     import('dotenv').config();
// } catch(err) {
//     console.warn(err);
// }

$(document).ready(() => {
    let regionName;
    try {
        fetch(`https://locate.covidselfcheck.app/`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            regionName = data["region_code"];
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
                <input type="radio" onclick="languageClick(${key})" />
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
                    // If regionName is undefined setting timeout
                    if(regionName == undefined) {
                        setTimeout(() => {
                        },1000);
                    } else {
                        arrayOfLanguages.forEach((lang) => {
                            if(data[lang]["region_code"].includes(regionName.toUpperCase())) {
                                arrayOfLanguages.splice(arrayOfLanguages.indexOf(lang), 1);
                                arrayOfLanguages.unshift(lang);
                            }
                        });
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
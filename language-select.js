$(function() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let lang = urlParams.get('lang');

    if(urlExists(`http://localhost:8080/static/${lang}.json`)==true && lang!=undefined) {
        language = lang
    }

    function urlExists(url)
    {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status==200;
    }
});
function readFromFile() {
    let textFromFile;
    fetch('./test.txt')
        .then((response) => {
            return response.text();
        }).then((data) => {
            textFromFile = data.split('\n');
            console.log(textFromFile);
        });
}

function WriteToJSON() {
    
}

process();
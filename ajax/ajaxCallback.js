loadDoc("url-1", myFunction1);
loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            cFunction(this);
        }
    };

    request.open("GET", url, true);
    request.send();
}

function myFunction1(request) {
    // actions goes here!!
}

function myFunction2(request) {
    // actions goes here!!
}
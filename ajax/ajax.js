function loadDoc() {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };

    // GET
    request.open("GET", "url", true);
    request.send();

    // POST
    request.open("POST", "url", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("fname=Hans&lname=Focus");

};
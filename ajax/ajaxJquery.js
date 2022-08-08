// load()
$(selector).load(URL, data, callback);

// get
$.get(url, callback);

// post
$.post(url, data, callback);

$(document).ready(function () {
    $("button").click(function () {
        $.post("url",
            {
                name: "hans",
                city: "seoul"
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus" + status);
            });
    })
})

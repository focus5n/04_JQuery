// To assign a click event to all paragraphs on a page.
$("p").click();

// To define what should happen when the event fires.
$("p").click(function () {
    // actions goes here!
});

// To execute a function when the document is fully loaded.
$(document).ready();

// To execute a function when the user clicks on the HTML element.
$("p").click(function () {
    $(this).hide();
});

// To execute a function when the user double-clicks on the HTML element.
$("p").dbclick(function () {
    $(this).hide();
});

// Combination of the mouseenter() and mouseleave()
$("#p1").hover(function () {
    alert("You entered!")
},
    function () {
        alert("You now leave!")
    })

// To attach one or more event handlers for the selected elements.
$("p").on("click", function () {
    $(this).hide();
});

$("p").on({
    mouseenter: function () {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
        $(this).css("background-color", "lightblue");
    },
    click: function () {
        $(this).css("background-color", "yellow");
    }
});

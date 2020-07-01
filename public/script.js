$(document).ready(function () {

    // submit button
    // ajax method put url
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let newCat = {
            name: $("#").val().trim(),
            sleepy: $("[name=]:checked").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added a new heart-clogger.");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})
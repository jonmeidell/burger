$(document).ready(function () {

    // submit button
    // ajax method put url
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let newBurger = {
            name: $("#").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added a new heart-clogger to the list.");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-eaten").on("click", function (event) {
		let id = $(this).data("id");
		let newDevoured = $(this).data("newdevoured");
		let newDevouredState = {
			devoured: newDevoured
		};
		// Send the PUT request.
		$.ajax("/api/burger/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
			function () {
				console.log("changed eaten status to", newDevoured);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
})
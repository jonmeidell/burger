$(document).ready(function () {
    // add a burger
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devour]:checked").val()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
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
    // change devoured status
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
    // delete a burger
    $(".delete").on("click", function (event) {
		let id = $(this).data("id");

		$.ajax("/api/burger/" + id, {
			type: "DELETE",
		}).then(
			function () {
				console.log("thrown away");
				// Reload the page to get the updated list
                location.reload();
			}
		);
    });

})
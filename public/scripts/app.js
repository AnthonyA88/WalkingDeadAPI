console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
	$('#character').on('click', function(e){
		e.preventDefault();
		// TODO: make an event listener that will trigger when the character id is clicked
		$.ajax({
			method: "GET",
			url: "/api/characters",
			success: function (json){
				console.log('json', json)
				$("#characterList").append("<div>Rick Grimes</div>");
			}, 
			error: function (a, b, c){
				console.log (b, c)
			}
		})
		
	})

	// TODO: create an event listener for a form
	// TODO: on submit 
	// TODO: ajax POST request (with method, url, data, success, error)
	// TODO: in onSuccess function, append the new Character sent back to you to your list of characters
});

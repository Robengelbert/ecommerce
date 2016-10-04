//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// Add overlay
// An image
// A caption
$("body").append('<div id="overlay"></div>')

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
	// Show the overlay
	// Update overlay with the image linked in the link
	// Get child's alt attribute and set caption
});

// When overlay is clicked
	// Hide the overlay
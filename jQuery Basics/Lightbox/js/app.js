//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightboxss

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
  //An image
  //A caption
$overlay.append($caption);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay
  $overlay.show();

  //Get child's alt attribute and set captions
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});

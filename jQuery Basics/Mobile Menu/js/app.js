//Problem: It looks gross in smaller browser widths and small devices
//Solution: Hide the text links and sawp them out with a more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");
  //Deal with selected options depending on current page
  if($ancor.parent().hasClass("selected"){
    $option.prop("selected", true);
  }
  //Create an option
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
/*//Create button
var $button = $("<button>Go</button>");
$("#menu").append($button);*/
/*$button.click(function(){
  //go to select's location
  window.location = $select.val();
});*/
//Bind change listener to the select
$select.change(function(){
  //go to select's location
  window.location = $select.val();
});

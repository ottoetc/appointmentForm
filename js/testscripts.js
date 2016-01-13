$(document).ready(function() {
  $("button#funnyDog").click(function() {
    $("ul#dog").prepend("<img src='http://lorempixel.com/400/200'/>");
  });

  $("button#funnyCat").click(function() {
    $("ul#cat").prepend('<img src="http://lorempixel.com/400/200" />');
  });
});

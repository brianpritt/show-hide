$(document).ready(function() {
  $("#initiallyShowing .clickable").click(function() {
    $("#initiallyHidden1").toggle();
  });
  $("#initiallyHidden1 .clickable").click(function() {
    $("#initiallyHidden2").fadeToggle();
  });
  $("#initiallyHidden2 .clickable").click(function() {
    $("#initiallyHidden3").slideToggle();
  });
  $("#initiallyHidden3 .clickable").click(function() {
    $("#initiallyHidden4").toggle();
  });
  $("#initiallyHidden4 .clickable").click(function() {
    $("#initiallyHidden5").toggle();
  });
});



$(document).ready(function() {
  $(".pigLatin").submit(function(event) {
    event.preventDefault();
    var testWord = $("input#word").val();
    alert("testWord");

  });
});

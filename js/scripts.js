

$(document).ready(function() {
  $("#normalWords").submit(function(event) {
    event.preventDefault();
    var inputWord = $("input#word").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var outputWord = inputWord;
    // if (inputWord === "Job") {
    //   var outputWord = inputWord + "ay"
    // } else {
    //   var outputWord = inputWord;
    // }
    $("#pigLatin").text(outputWord);
    var result = []

  });
});

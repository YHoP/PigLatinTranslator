var findVowelsAdday = function(word){
  var wordArray = word.match(/[AaEeIiOoUu]/gi);
  if (wordArray.length === 0){
    return word;
  }else {
    return word.concat("ay");
  }
}

var findConsonantsMoveToTheEnd = function(word){
  if ((word.charAt(0) ==="Q" || word.charAt(0) ==="q") && word.charAt(1) ==="u"){
    var qU = word.slice(0, 2);
    var newWord = word.slice(2);
    return newWord.concat(qU);
  }else if (word.charAt(0).match(/[BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvxXZzWwYy]/gi)){
    var newWord = word.slice(1);
    return newWord.concat(word.charAt(0));
  }else {
    return word;
  }
}

var PigLatinTranslator= function(sentence){
  var StringArray = sentence.split(" ");
  for (var i = 0; i < StringArray.length; i++){
    StringArray[i] = findVowelsAdday(findConsonantsMoveToTheEnd(StringArray[i]));
  }
  return StringArray;
}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    $(".result").empty();
    var userSentence = $("input#sentence").val();
    var translatedString = PigLatinTranslator(userSentence);
    for(var i = 0; i < translatedString.length; i++) {
       $(".result").append(translatedString[i]+" ");
    }


    $(".result").fadeIn();

    $(".original").text(userSentence);
    $("#original").click(function() {
      $(".original").fadeToggle();
    });

    event.preventDefault();
  });
});

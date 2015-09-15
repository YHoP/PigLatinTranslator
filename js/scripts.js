var findVowelsAdday = function(word){
  var wordArray = word.match(/[AaEeIiOoUu]/gi);
  if (wordArray.length === 0){
    return word;
  }else {
    return word.concat("ay");
  }
}

var findFirstConsonants = function(word){
  return (word.charAt(0).toLowerCase().match(/[bcdfghjklmnpqrstvxzwy]/gi) !== null);
}

var findBlendsAndDiagraphs = function(word){
  var blendDiagraphArray = ["fl", "bl", "sl", "cl", "pl", "bl", "gr", "tr", "br", "cr", "dr", "pr", "fr", "wh", "sw", "sp", "sc", "sn", "sm", "sk", "st", "sh", "ch", "th", "wh", "qu"];
  var firstTwo = word.slice(0, 2).toLowerCase();
  return blendDiagraphArray.indexOf(firstTwo) > -1;
}

var checkWordsBeginsStr = function(word){
  var firstThree = word.slice(0, 3).toLowerCase();
  return (firstThree === "str");
}

var findConsonantsMoveToTheEnd = function(word){
  if (checkWordsBeginsStr(word)){
    var firstThree = word.slice(0, 3);
    var newWord = word.slice(3);
    return newWord.concat(firstThree);
  }else if (findBlendsAndDiagraphs(word)){
    var firstConsonants = word.slice(0, 2);
    var newWord = word.slice(2);
    return newWord.concat(firstConsonants);
  }else if (findFirstConsonants(word)){
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

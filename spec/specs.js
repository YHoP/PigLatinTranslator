describe('findVowelsAdday', function() {
  it("If the word contains vowels, add ay to the end", function() {
    expect(findVowelsAdday("Hello")).to.equal("Helloay");
  });
});

describe('findFirstConsonants', function() {
  it("If the first character is consonant, return true", function() {
    expect(findFirstConsonants("Town")).to.equal(true);
  });
  it("If the first character is not consonant, return false", function() {
    expect(findFirstConsonants("Ocean")).to.equal(false);
  });
});

describe('findBlendsAndDiagraphs', function() {
  it("If the first two characters found in blends, return true", function() {
    expect(findBlendsAndDiagraphs("Quiz")).to.equal(true);
  });
  it("If the first two characters not found in blends, return false", function() {
    expect(findBlendsAndDiagraphs("Tuesday")).to.equal(false);
  });
});

describe('findWordsBeginsStr', function() {
  it("If the first three characters is str, return true", function() {
    expect(findWordsBeginsStr("strange")).to.equal(true);
  });
  it("If the first three characters is not str, return false", function() {
    expect(findWordsBeginsStr("Portland")).to.equal(false);
  });
});

describe('findSpecialCharacter', function() {
  it("If the last character is special character, return true", function() {
    expect(findSpecialCharacter("Hello?")).to.equal(true);
  });
  it("If the last character is special character, return false", function() {
    expect(findSpecialCharacter("Portland")).to.equal(false);
  });
});

describe('getLastSpecialCharacters', function() {
  it("If the last character is special character, return it", function() {
    expect(getLastSpecialCharacters("Hello?")).to.equal("?");
  });
});

describe('findConsonantsMoveToTheEnd', function() {
  it("If the word contains consonants, move all of the first consecutive consonants to the end", function() {
    expect(findConsonantsMoveToTheEnd("Strange")).to.equal("angeStr");
  });
});

describe('PigLatinTranslator', function(){
  it("Split the sentence into string array and move the vowels and consonants to the end", function() {
    expect(PigLatinTranslator("Hello stranger")).to.eql(["elloHay", "angerstray"]);
  });
  it("Split the sentence into string array and move the special character to the end", function() {
    expect(PigLatinTranslator("Hello stranger!")).to.eql(["elloHay", "angerstray!"]);
  });
});

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

describe('checkWordsBeginsStr', function() {
  it("If the first three characters is str, return true", function() {
    expect(checkWordsBeginsStr("strange")).to.equal(true);
  });
  it("If the first three characters is not str, return false", function() {
    expect(checkWordsBeginsStr("Portland")).to.equal(false);
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
})

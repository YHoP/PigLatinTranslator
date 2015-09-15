describe('findVowelsAdday', function() {
  it("If the word contains vowels, add ay to the end", function() {
    expect(findVowelsAdday("Hello")).to.equal("Helloay");
  });
});

describe('findConsonantsMoveToTheEnd', function() {
  it("If the word contains consonants, move all of the first consecutive consonants to the end", function() {
    expect(findConsonantsMoveToTheEnd("Tuesday")).to.equal("uesdayT");
  });

  it("If the word begins \'qu\', move the \'qu\' to the end.", function() {
    expect(findConsonantsMoveToTheEnd("Quiz")).to.equal("izQu");
  });
});

describe('PigLatinTranslator', function(){
  it("Split the sentence into string array and move the vowels and consonants to the end", function() {
    expect(PigLatinTranslator("Hello there")).to.eql(["elloHay", "heretay"]);
  });
})

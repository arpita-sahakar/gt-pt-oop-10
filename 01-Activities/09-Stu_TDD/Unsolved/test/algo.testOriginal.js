const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should return a reversed string", () => {
      const str = "abcd";
      const expectedStr = "dcba";

      const algo = new Algo();

      expect(algo.reverse(str)).toEqual(expectedStr);
    });
  });

  describe("isPalindrome", () => {
    it("should return true if the provided string is a palindrome", () => {
      const str = "abcdcba";
     

      const algo = new Algo();

      expect(algo.isPalindrome(str)).toEqual(true);
    });
    it("should return false if the provided string is not a palindrome", () => {
      const str = "1234";
     

      const algo = new Algo();

      expect(algo.isPalindrome(str)).toEqual(false);
    });
    
  });

  describe("capitalize", () => {
    it("should return a capitalized string", () => {
      const str = "abcd";
      const expectedStr = "ABCD";

      const algo = new Algo();

      expect(algo.capitalize(str)).toEqual(expectedStr);
    });
  });
  
});

const Child = require("../child");

// describe("Child", () => {

// });

describe("Child", () => {
  describe("Initialization", () => {
    //Negative test
    it("should throw error if name argument is not a string when called with the 'new' keyword", () => {
      // Arrange
      const name = 1123;
      const age = 2;

      const callBack = () => new Child(name, age);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

     // Assert
     expect(callBack).toThrowError(err);
    });
  });
});

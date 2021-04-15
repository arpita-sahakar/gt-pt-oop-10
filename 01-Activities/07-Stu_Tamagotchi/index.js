function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = false;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
  this.feed = function () {
    if (this.hungry) {
      console.log("That was yummy");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks! I'm full.");
    }
  };
  this.sleep = function () {
    if (this.sleepy) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("No way! I'm not tired.");
    }
  };
  this.play = function () {
    if (this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  };
  this.increaseAge = function () {
    this.age = this.age + 1;
    console.log("Happy Birthday to me! I am " + this.age + " old!");
  };

  this.bark = function () {
    console.log("Woof! Woof!");
  };
  this.goOutside = function () {
    if (this.outside === false) {
      console.log("Yay! I love the outdoors!");
      this.outside = true;
      this.bark();
    } else {
      console.log("We're already outside though...");
    }
  };
  this.goInside = function () {
    if (this.outside) {
      console.log("Do we have to? Fine...");
      this.outside = false;
      console.log("I'm already inside...");
    }
  };
  this.meow = function () {
    console.log("Meow! Meow!");
  };
  this.destroyFurniture = function () {
    if (this.houseCondition > 0) {
      this.houseCondition = this.houseCondition - 10;
      console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
      this.bored = false;
      this.sleepy = true;
    }
  };
  this.buyNewFurniture = function () {
      this.houseCondition = this.houseCondition + 50;
      console.log("Are you sure about that?");
  };
}

const dog = new DigitalPal();
    dog.feed();
    dog.sleep();
    dog.play();
    dog.increaseAge();
    dog.bark();
    dog.goOutside();
    dog.goInside();
    dog.meow();
    dog.destroyFurniture();
    dog.buyNewFurniture();

const cat = new DigitalPal();

cat.feed();
cat.sleep();
cat.play();
cat.increaseAge();
cat.bark();
cat.goOutside();
cat.goInside();
cat.meow();
cat.destroyFurniture();
cat.buyNewFurniture();
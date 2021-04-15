// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(r, n) {
  this.raining = r;
  this.noise = n;
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, "Woof!");
const cats = new Animal(false, "Meow!");

Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();
console.log("*********************");
// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = (d, c) => {
  if (d.raining === true && c.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);
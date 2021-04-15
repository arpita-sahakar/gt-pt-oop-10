function Characters(nme, prof, age, str, hitPts) {
  this.name = nme;
  this.profession = prof;
  this.age = age;
  this.strength = str;
  this.hitPoints = hitPts;
  this.printStats = function () {
    console.log(
      `Name: ${this.name}, Profession: ${this.profession}, age:${this.age}, strength${this.strength}, hit-points: ${this.hitPoints}`
    );
  };
}

const character1 = new Characters("bhopii","timepass",42,1,10);
const character2 = new Characters("bhop","timepass",42,1,100);
character1.printStats();
character2.printStats();

Characters.prototype.isAlive = function(){
    // this.hitPoints>=0 ? console.log("alive") : console.log("dead");
    if(this.hitPoints>=0){
        console.log("alive");
    }else {
        console.log("dead");
    }
}

Characters.prototype.attack = function(secChar){
    secChar.hitPoints = secChar.hitPoints - this.strength;
}

Characters.prototype.levelUp = function(){
    this.age = this.age + 1;
    this.strength = this.strength + 5;
    this.hitPoints = this.hitPoints + 25
}


character1.isAlive();

character1.attack(character2);

character1.printStats();
character2.printStats();

character1.levelUp();
character1.printStats();



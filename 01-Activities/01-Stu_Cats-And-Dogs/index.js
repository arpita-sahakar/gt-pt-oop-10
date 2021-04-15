const makeNoiseFunc = function(){
    if(this.raining){
        console.log(this.noise);
    }
};

dog = {
    raining : true,
    noise : "Woof!",
    makeNoise: makeNoiseFunc
    
};

cat = {
    raining : false,
    noise : "Meow!",
    makeNoise: makeNoiseFunc
}



dog.makeNoise();
cat.raining=true;
cat.makeNoise();
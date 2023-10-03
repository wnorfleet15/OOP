class Animal {
    constructor(name, type, noise) {
      this.name = name;
      this.type = type;
      this.noise = noise;
    }
  
    // Methods
    makeNoise() {
      console.log('I go', this.noise);
    }
  }
  
  class Dog extends Animal {
    constructor(name,type,noise) {
      super(name,type,noise);
    }
  }
  
  const dog = new Dog('Wally', 'Golden Retriever', 'Woof');
  
  dog.makeNoise();
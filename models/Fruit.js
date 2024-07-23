// capital and non plurarl because its a class
const fruits = require("../fruits.json");
// .. going out the folder

class Fruit {
  constructor(fruit) {
    this.name = fruit.name;
    this.genus = fruit.genus;
    this.family = fruit.family;
    this.nutritions = fruit.nutritions;
    this.id = fruit.id;
    this.order = fruit.order;
  }

  static showAll() {
    return fruits.map((fruit) => new Fruit(fruit));
  }

  static show(name) {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "The fruit doesnt exist";
    }
  }

  static create(data) {
    const newFruit = data;

    fruits.push(newFruit);

    return new Fruit(newFruit);
  }

  update(data) {
    const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );
    // putting it on an instance with this.name

    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw "fruit not found";
    }
  }


  destroy() {
    const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());
  
    if (deletedFruit) {
      const index = fruits.indexOf(deletedFruit);
      fruits.splice(index, 1);
    } else {
      throw "Quote not found";
    }
};

}

module.exports = Fruit;

//   using OOP method
// need fruits.js and app.js, index.js, fruitrouter

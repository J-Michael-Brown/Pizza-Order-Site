 // Business Logic -------------------------------------------------------------

function Pizza (name, topping, size = 1){
  this.name = name,
  this.size = size,
  this.topping = topping,
}

Pizza.prototype.changeSize = function(newSize){
  this.size = newSize;
  return this.size;
}
Pizza.prototype.changeTopping = function(toppings, newToppingIndex){
  this.topping = toppings[newToppingIndex];
  return this.topping;
}
Pizza.prototype.changePrice = function(newPrice){
  this.price = newPrice;
  return this.price;
}

var myPizza = new Pizza ("tester", 2, "Pepperoni");
var toppings = ["Cheese", "Pepperoni", "Meat Lovers", "Supreme"];


Pizza.prototype.findPriceOfPizza = function(toppings) {
  var currentToppings = toppings;
  var size = this.size;
  var pizzaTopping = this.topping;
  var newPrice = 10;

  if (size === 2) {
    newPrice += 3;
  } else if (size === 3) {
    newPrice += 5;
  }

  if (pizzaTopping === toppings[2] || pizzaTopping === toppings[3]) {
    newPrice += 2;
  }

  return newPrice;
}

// Considering making topping an object

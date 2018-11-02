 // Business Logic -------------------------------------------------------------

function Pizza (name, size = 1, topping = "Cheese") {
  this.name = name,
  this.size = size,
  this.topping = topping
}

Pizza.prototype.changeSize = function(newSize) {
  if (newSize && newSize < 4 && newSize > 0) {
    this.size = newSize;
  }
  return this.size;
}
Pizza.prototype.changeTopping = function(toppings, newToppingIndex){
  if (toppings && newToppingIndex) {
    this.topping = toppings[newToppingIndex];
  }
  return this.topping;
}
Pizza.prototype.changePrice = function(newPrice) {
  var price = newPrice;
  if (parseInt(newPrice)) {
    price = (Math.floor(Math.round(price*100)))/100;
    this.price = price;
  }
  return this.price;
}

Pizza.prototype.findPriceOfPizza = function(toppingsArray) {
  var currentToppings = toppingsArray;
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


  this.changePrice(newPrice);
  return newPrice;
}

function Topping (toppingName, toppingCost) {
  this.cost = toppingCost,
  this.toppingName = toppingName
} // not currently being used

var myPizza = new Pizza ("my pizza");
var toppings = ["Cheese", "Pepperoni", "Meat Lovers", "Supreme"];

var cheese = new Topping("Cheese", 0.99);
var pepperoni = new Topping("Pepperoni", 1.99);
var meatLovers = new Topping("Meat Lovers", 3.99);
var supreme = new Topping("Supreme", 3.99);

var winterToppings = [cheese, pepperoni, meatLovers, supreme];

Pizza.prototype.findToppingPriceByNameFromArray = function(nameOfTopping, toppingsArray) {
  console.log("got to use function");
  for (var i = 0; i < toppingsArray.length; i++) {
    console.log("got inside for loop for index " + i);
    if (this.topping === toppingsArray[i].toppingName) {
      return toppingsArray[i].cost;
    } else {
      console.log("skipped " + toppingsArray[i].toppingName);
    }
  }
}

// Considering making topping an object

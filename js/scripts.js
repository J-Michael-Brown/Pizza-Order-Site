 // Business Logic -------------------------------------------------------------

 function Topping (toppingName, toppingCost) {
   this.cost = toppingCost,
   this.toppingName = toppingName
 }

 var cheese = new Topping("Cheese", 0.99);
 var pepperoni = new Topping("Pepperoni", 1.99);
 var meatLovers = new Topping("Meat Lovers", 3.99);
 var supreme = new Topping("Supreme", 3.99);

 var winterToppings = [cheese, pepperoni, meatLovers, supreme];

function Pizza (name, size = 1, topping = cheese) {
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

var myPizza = new Pizza ("Michael");

Pizza.prototype.displayInfo = function() {
  console.log("for: " + this.name + ", size: " + this.size + ", topping type: " + this.topping.toppingName);
  if (this.price) {
    return "current price: " + this.price;
  }
}

Pizza.prototype.changeTopping = function(topping){
  if (topping) {
    this.topping = topping;
  }
  return this.topping.toppingName;
}
Pizza.prototype.changePrice = function(newPrice) {
  var price = newPrice;
  if (parseInt(newPrice)) {
    price = (Math.floor(Math.round(price*100)))/100;
    this.price = price;
  }
  return this.price;
}

Pizza.prototype.findPriceOfPizza = function() {
  var size = this.size;
  var pizzaTopping = this.topping;
  var newPrice = 9;

  if (size === 2) {
    newPrice += 3;
  } else if (size === 3) {
    newPrice += 5;
  }

  newPrice += pizzaTopping.cost;

  this.changePrice(newPrice);
  return newPrice;
}

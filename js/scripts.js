 // Business Logic -------------------------------------------------------------

 function Topping(title, toppingCost) {
   this.cost = toppingCost,
   this.title = title
 }

 function Size(title, sizeCost) {
   this.title = title,
   this.cost = sizeCost
 }

function Pizza(name, size, topping) {
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

Pizza.prototype.displayInfo = function() {
  console.log("for: " + this.name + ", size: " + this.size.title + ", topping type: " + this.topping.title);
  if (this.price) {
    return "current price: " + this.price;
  }
}

Pizza.prototype.changeTopping = function(topping){
  if (topping) {
    this.topping = topping;
  }
  return this.topping.title;
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
  var newPrice = 9;

  newPrice += size.cost;

  newPrice += this.topping.cost;

  this.changePrice(newPrice);
  return newPrice;
}

// --------- UI logic -------------------------------------------------------

function returnObjectByName(availableArray, userChoiceString) {
  var toppings = availableArray;
  var choice = userChoiceString;

  for (var i = 0; i < toppings.length; i++) {
    if (choice === toppings[i].title) {
      return toppings[i];
    }
  }

}

$(document).ready(function() {

   var cheese = new Topping("Cheese", 0.99);
   var pepperoni = new Topping("Pepperoni", 1.99);
   var meatLovers = new Topping("Meat Lovers", 3.99);
   var supreme = new Topping("Supreme", 3.99);

   var winterToppings = [cheese, pepperoni, meatLovers, supreme];

  $("form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#nameInput").val();
    var sizeInput = $("#sizeInput").val();
    var userPizza = new Pizza(nameInput, sizeInput);
    var toppingInput = $("#toppingInput").val();

    console.log(userPizza);

  });
});

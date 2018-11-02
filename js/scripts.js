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

function returnObjectByTitle(userChoiceString, availableArray) {
  var arrayUsed = availableArray;
  var choice = userChoiceString;

  for (var i = 0; i < arrayUsed.length; i++) {
    if (choice === arrayUsed[i].title) {
      return arrayUsed[i];
    }
  }

}

 Pizza.prototype.displayOrder = function() {
  $("#buyer-input-field").hide();
  $("#pizza-order-display").show();

  var userName = this.name;
  var toptype = this.topping.title;
  var pizzaSize = this.size.title;
  var totalCost = this.findPriceOfPizza();

  $("#user-name").text(userName);
  $("#pizza-size").text(pizzaSize);
  $("#topping-type").text(toptype);
  $("#cost-display").text("$" + totalCost);

}

$(document).ready(function() {

   var cheese = new Topping("Cheese", 0.99);
   var pepperoni = new Topping("Pepperoni", 1.99);
   var meatLovers = new Topping("Meat Lovers", 3.99);
   var supreme = new Topping("Supreme", 3.99);
   var winterToppings = [cheese, pepperoni, meatLovers, supreme];

   var smallSize = new Size("Small", 0);
   var mediumSize = new Size("Medium", 3);
   var largeSize = new Size("Large", 5);
   var sizes = [smallSize, mediumSize, largeSize];

  $("#buyer-input-field").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#nameInput").val();
    var sizeInput = returnObjectByTitle($("#sizeInput").val(), sizes);
    var toppingInput = returnObjectByTitle($("#toppingInput").val(), winterToppings);

    var userPizza = new Pizza(nameInput, sizeInput, toppingInput);
    userPizza.displayOrder();

  });
});

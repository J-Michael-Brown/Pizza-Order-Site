current specs:

if myPizza is ["my pizza", "cheese", 1] (represents a small, cheese pizza) and I use method 'findPriceOfPizza()' on it with my array toppings, I should get a return of the price and change the price of the current pizza object
too $10.

Example input: myPizza.findPriceOfPizza(toppings);
Example output: 10;

If I want to change the size to 2 (medium) and find the new price, I can use myPizza.changeSize(2) then myPizza.findPriceOfPizza(toppings) to both change the size and the price, even without a previously known price, to $13.

Example inputs: myPizza.changeSize(2);
myPizza.findPriceOfPizza(toppings);
Example outputs: 2, myPizza {"my pizza", 2, "Cheese"}
13, myPizza {"my pizza", 2, "Cheese", 13}

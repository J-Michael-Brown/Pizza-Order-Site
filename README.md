Business specs:

**Topping carries info about a pizza topping's info: its display name (Topping.toppingName), and it's (current) cost: Topping.cost.**   
  Example input: var cheese = new Topping("Cheese", 0.99)   
  Example output: cheese ==> {toppingName: "Cheese", cost: 0.99}

Pizza carries the name of the orderer (Pizza.name), size of the order (Pizza.size) as an integer, the Topping of the order (Pizza.topping), and eventually the price -see Pizza.findPriceOfPizza and Pizza.changePrice-.    

  Example input: myPizza = new Pizza(Michael)   
  Example output: myPizza ==> {name: "Michael", size: 1, Topping: cheese}   

\*I will be using Pizza: myPizza and Topping: cheese as part of my examples from here on.

Pizza.changeTopping(Topping) will change the topping of the pizza to the Provided Topping object, and return the new topping's name. If no topping is provided the method will simply return the current topping's name.

Pizza.changeSize(Integer) will take the integer associated with pizza size, and change the size associated with your Pizza object, then return the new size

Pizza.changePrice(Number) will take any number and change the price of the pizza object to a usable number price number.

  Example input: myPizza.changePrice(12.99)   
  Example output: 12.99, myPizza {"Michael", 1, Topping, 12.99}

  Example input: myPizza.changePrice(14.985000001)    
  Example output: 14.99, myPizza {"Michael", 1, Topping, 12.99}

Pizza.findPriceOfPizza() adjusts the price of the Pizza object based on its other parameters. Regardless of current price (whether it exists or not), make a calculation of the asking price for this pizza and returns the new price.

Example input: myPizza.findPriceOfPizza()   
Example output: 9.99, myPizza {"Michael", 1, cheese, 9.99}

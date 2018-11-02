
# _Pizza Delivery_

#### _Site that you can "order" a pizza from._

#### By _**J. Michael Brown**_

## Description

_User fills out some fields, such as toppings and size, and the website finds the price of the purchase based off of those parameters._  
_The purpose of this project is to Practice using Objects to minimize the amount of coding and tracking of different elements on the developer's part._

## Business specs:

* **Topping carries info about a pizza topping's info: its display name (Topping.toppingName), and it's (current) cost: Topping.cost.**   
  Example input: var cheese = new Topping("Cheese", 0.99)   
  Example output: cheese ==> {toppingName: "Cheese", cost: 0.99}

* **Pizza carries the name of the orderer (Pizza.name), size of the order (Pizza.size) as an integer, the Topping of the order (Pizza.topping), and eventually the price -see Pizza.findPriceOfPizza and Pizza.changePrice-.**   
  Example input: myPizza = new Pizza(Michael)   
  Example output: myPizza ==> {name: "Michael", size: 1, Topping: cheese}   

  \*I will be using Pizza: myPizza and Topping: cheese as part of my examples from here on.

* **Pizza.changeTopping(Topping) will change the topping of the pizza to the Provided Topping object, and return the new topping's name. If no topping is provided the method will simply return the current topping's name.**

* **Pizza.changeSize(Integer) will take the integer associated with pizza size, and change the size associated with your Pizza object, then return the new size**

* **Pizza.changePrice(Number) will take any number and change the price of the pizza object to a usable number price number.**
  Example input: myPizza.changePrice(12.99)   
  Example output: 12.99, myPizza {"Michael", 1, Topping, 12.99}

  Example input: myPizza.changePrice(14.985000001)    
  Example output: 14.99, myPizza {"Michael", 1, Topping, 12.99}

* **Pizza.findPriceOfPizza() adjusts the price of the Pizza object based on its other parameters. Regardless of current price (whether it exists or not), make a calculation of the asking price for this pizza and returns the new price.**
Example input: myPizza.findPriceOfPizza()   
Example output: 9.99, myPizza {"Michael", 1, cheese, 9.99}

## User Interface Logic Specs:

* **returnObjectByTitle(userChoiceString, availableArray) method matches a string to an object in an array by the given 'title' associated with those objects, and return that match**
Example input: var topping = returnObjectByTitle("Cheese", toppingChoicesArray)   
Example output: topping ==> {"Cheese", 0.99}

* **Pizza.displayOrder() function hides the pizza creation area and puts the user gives the user a message with basic info about there order and it's price.**
Example input: myPizza.displayOrder()   
Example of Dom:   
  "Thank you Michael  
  Your Small Cheese pizza will cost $9.99"





## Setup/Installation Requirements

  _Requires git to be downloaded on your devise to use instructed git terminal commands._

  _1. Open your terminal (command+spacebar on homepage for mac, to search for "terminal")_

  _2. Navigate to your desktop (input "cd ~" to go to home directory then "cd desktop" to move to desktop)_

  _3 . Copy url for a clone (located top right of listed files in green)_

  _4. Clone onto Desktop (type "git clone <url link>" replacing '<url link>' with the link you copied in step 3)_

  _5. Open website in a browser (double click the "Beep-Boop" file on your desktop then double click the "index.html" file)_

* _Or open the page at this url: https://j-michael-brown.github.io/Beep-Boop/_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_No known bugs yet. Contact me via email if you would like to report any._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, or if you want to make a contribution to the code. You can email me @jmichaelbrown132737@gmail.com_

## Technologies Used

_Utilizes Bootstrap.css, javascript, and jQuery_

### License

MIT License

Copyright (c) 2018, _J. Michael Brown_  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

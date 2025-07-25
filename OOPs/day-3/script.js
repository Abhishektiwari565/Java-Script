//module 1.1.Define a class named Rectangle with private attributes length and width. 
//Implement public member functions to set and get the values of these attributes. 
//Include a method to calculate the area of the rectangle. 
//Create an object of the Rectangle class and demonstrate the functionality of the implemented methods.

// class Rectangle{//create a class and give name rectangle
//     #length;//create a private attributes and give name length 
//     #width;//create a private attributes and give name width

    // getValues(length,width){ //create a method for getting length ans width
//         this.#length=length; //local variable value assign in global variable
//         this.#width=width; //local variable value assign in global variable
//         document.writeln("length:",this.#length); //display value of length
//         document.writeln("width:",this.#width); //display value of width
//         document.writeln("<br>") //it is used to show output vertically
//     }
//     calculateArea(){ // create a method and give name calculateArea
//         document.writeln("Area of circle is:",this.#length*this.#width); //display area of circle with the help of global variable
//     }
// }
// const display=new Rectangle(); // create a object display
// display.getValues(4,3); //give values of length and width
// display.calculateArea(); //this show the output of calculate area

//module 2.1.Create a class representing a `Movie` with attributes like `title`, `genre`, and `releasedYear`.
// Demonstrate the instantiation of objects using array and accessing their attributes.

// class Movie{ //create a class and give name movie
//     constructor(title,genre,releasedYear){ //create a constructor
//         this.title=title;  //local variable value assign in global variable
//         this.genre=genre;  //local variable value assign in global variable
//         this.releasedYear=releasedYear;  //local variable value assign in global variable

//     }
//     display(){ // create a method and give name display
//         document.write(`title: ${this.title}<br>`); //display title 
//          document.write(`genre: ${this.genre}<br>`); //display title
//           document.write(`releasedYear: ${this.releasedYear}<br>`); //display title
//     }
// }
// const newdisplay=new Movie("pushpa","action",2016); //give a value at that place because of using constructor
// newdisplay.display(); //show the output

//module 2.2.Define a class named `BankAccount` with private attributes `accountNumber`, `balance`, and `ownerName`. 
// Encapsulate these attributes using appropriate access specifiers. 
// Implement public member functions to credit, debit, and display the balance. 
// Demonstrate encapsulation by interacting with the class through its member functions.

// class BankAccount{ // create a class and give name bankaccount
//     #accountNumber; //create private attributes accountnumber
//     #balance=1000; //create private attributes balance and also assign value of 1000
//     #ownerName; //create private attributes ownername

//     credit(accountNumber,balance,ownerName){ //create a method credit and give attributes
//         this.#accountNumber=accountNumber;  //local variable value assign in global variable
//         this.#balance=this.#balance+balance;  //local variable value assign in global variable
//         this.#ownerName=ownerName;  //local variable value assign in global variable
//     }
//     displayBalance(accountNumber,ownerName){ //create a method for check balance and provide attributes 
//         document.writeln("your current balance is:",this.#balance,"<br>"); //display a balance 
//     }
//     debit(accountNumber,amount,ownerName){ //create a method for the process of withdraw and provide attributes
//         this.#balance=this.#balance-amount; //from global variable subtract local variable 
//         document.writeln("current balance after withdraw:",this.#balance,"<br>"); //to check balance after withdraw
//         document.writeln("withdraw amount is:",amount); //to check withdraw amount 
//     }
    
// }
// const display=new BankAccount(); //create a object
// display.credit(1751101031816,4000,"rahul"); //provied all requirements according to attributes to show credit process
// display.displayBalance(1751101031842,"sharma"); //provied all requirements according to attributes to check balance
// display.debit(1751101031845,2000,"vicky");   //provied all requirements according to attributes to show debit process

//module 3.1 Create a class representing a `Book` with attributes like `title`, `author`, and `publishedYear`. 
//Demonstrate the instantiation of objects using array and accessing their attributes. 

// class Book{ // create a class and give name Book
//     constructor(title,author,publishedYear){ // create a constructor and provide attributes
//         this.title=title; //local variable value assign in global variable without
//         this.author=author; //local variable value assign in global variable
//         this.publishedYear=publishedYear; //local variable value assign in global variable
//     }
//     bookDisplay(){ //create a method bookDisplay
//         document.writeln("title:",this.title,"<br>"); // display title and use br for output show in next line 
//         document.writeln("author:",this.author,"<br>"); // display author and use br for output show in next line
//         document.writeln("year:",this.publishedYear,"<br>"); // display year and use br for output show in next line
//     } 
// }
// const releaseBook=new Book("Wings of fire","Abdul kalam",1980);
// releaseBook.bookDisplay();


//module 3.2.Define a class `Person` with private attributes `name`, `age`, and `address`. 
//Encapsulate these attributes using getter and setter methods. 
//Implement a parameterized constructor for the `Person` class. 
//Create N number of objects using this constructor and display the details.

// class Person{ //create a class and give name person
//     #name; //create attributes 
//     #age; //create attributes 
//     #address; //create attributes 
    
//     constructor(name,age,address){ //create a constructor and give attributes.
//         this.#name=name; //local variable value assign in global variable
//         this.#age=age; //local variable value assign in global variable
//         this.#address=address //local variable value assign in global variable
//     }
//     setValues(){ //create a method with setValues and dont provide attributes because this method create to display name ,age ,address
//         document.writeln("Name:",this.#name,"<br>"); // display name and use br for output show in next line 
//         document.writeln("age:",this.#age,"<br>"); // display age and use br for output show in next line 
//         document.writeln("address:",this.#address,"<br>"); // display address and use br for output show in next line 
//     }

// }
// const p1=new Person("rahul",18,"uma vihar"); // give values at that place because create a constructor 
// p1.setValues(); //display all the attribute 

//module 5.1.Create a class `Laptop` with private attributes `name`, `price`, `processor`, and a parameterized constructor. 
//Demonstrate the instantiation of objects using this constructor.

class Laptop
{
    #name;
    #price;
    #processor;

    constructor(name,price,processor){
        this.#name=name;
        this.#price=price;
        this.#processor=processor;
    }

        displayDetails(){
            document.writeln("name:",this.#name,"<br>"); 
           
            document.writeln("price:",this.#price,"<br>");
            document.writeln("processor:",this.#processor,"<br>");
             document.writeln("<br>");
    }
}
const display1=new Laptop("HP",55000,"intel i5");
const display2=new Laptop("Dell",45000,"intel i5");
const display3=new Laptop("lenovo",49000,"Ryzon 5");

display1.displayDetails();
display2.displayDetails();
display3.displayDetails();

//✅ Encapsulation (Questions 1–3)

//Q.1.Create a Car class that has brand and model properties. 
//Use a constructor to initialize them. 
//Create a method getDetails() that returns the full name of the car.

// class Car{
//    constructor(brand,model){
//     this.brand=brand;
//     this.model=model;
//    }
//    getDetails(){
//     document.writeln("Brand is:",this.brand,"<br>");
//     document.writeln("Model is:",this.model,"<br>");
//    }
// }
// const car=new Car("BMW","BMW i7");
// car.getDetails();

//Q.2.Create a Person class that stores name and age. 
//ake age private (use closure or #age) and provide methods to getAge() and setAge() safely.

// class Person{
//     #age;
//     name;
    
//     setAge(name,age){
//         this.name=name;
//         this.#age=age;
        
//     }
//     getAge(){
//         document.writeln("Name:",this.name,"<br>");
//         document.writeln("Age:",this.#age,"<br>");
//     }

// }
// const person=new Person();
// person.setAge("Virat Kohli",37);
// person.getAge();

//Q.3.Create a User class where the password should be private. 
//Add methods to changePassword() and checkPassword().

// class User{
//     #password;
//     constructor(password){
//         this.#password=password;
//     }
//     changePassword(newPassword){
//         this.#password=newPassword;
//     }
//     checkPassword(){
//         document.writeln("check your password:",this.#password);
//     }
// }
// const user=new User(123456);
// user.changePassword(456789);
// user.checkPassword();


// ✅ Abstraction (Questions 4–5)

//Q.4Create a Calculator class that hides the internal result property (e.g., using #result). 
//Add methods to add(num), subtract(num), and getResult().

// class Calculator{
//     #result
//     constructor(result){
//         this.#result=result;
//     }

//     Add(num1,num2){
//         this.num1=num1;
//         this.num2=num2
//     }
//     sub(num3,num4){
//         this.num3=num3;
//         this.num4=num4;
//     }
//     getResult(){
//         document.writeln("add:",this.num1+this.num2,"<br>");
//         document.writeln("subtract:",this.num3-this.num4,"<br>");
//     }

// }
// const cal= new Calculator();
// cal.Add(10,20);
// cal.sub(20,10);
// cal.getResult();


//Q.5Create a BankAccount class where balance is private. 
//Add deposit(amount), withdraw(amount), and getBalance() methods. 
//Try to access balance directly (it should not work).

// class BankAccount{
//     #balance
//     constructor(balance){
//         this.#balance=balance;
//     }
//     deposit(balance){
//         this.#balance+=balance;
//         document.writeln("Current balance is:",this.#balance,"<br>");
//     }
//     withdraw(amount){
//         this.amount=amount
//         this.#balance-=amount;
//         document.writeln("your balance after withdraw is:",this.amount,"<br>");
//         document.writeln("your withdraw balance is:",this.#balance);
//     }
// }
// const bank= new BankAccount(1000);
// bank.deposit(1000);
// bank.withdraw(500);


// ✅ Inheritance (Questions 6–7)

//Q.6.Create a Vehicle class with a method move(). 
//Then create a Bike class that extends Vehicle. 
//Create an object of Bike and call the move() method.

// class Vehicle{
//     constructor(color,speed,time){
//         this.color=color;
//         this.speed=speed;
//         this.time=time;
//     }
//     move(){
//         document.writeln("color is:",this.color);
//     }
//     calTime(){
//         document.writeln("your time taken to cover distance is:",this.time,"<br>");
//     }
// }
// class Bike extends Vehicle{
//     constructor(color,speed,distance,name){
//         super(color,distance,speed,Math.floor(distance/speed));
//     }
// }
// const bike= new Bike("red",90,400,"royal enfield");
// bike.calTime();
// bike.move();

//Q7.Create a Person class with a method greet(). 
//Create a Student class that extends Person and adds a method study(). 
//Use both methods on a Student object.

// class Person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         document.writeln("your name is:",this.name,"<br>");
//     }
// }
// class Student extends Person{
//     constructor(name,subject){
//         super(name);
//         this.subject=subject;
//     }
//     study(){
//         document.writeln("subject is:",this.subject,"<br>");
//     }
// }
// const stu=new Student("Bansal","Javascript");
// stu.greet();
// stu.study();


// ✅ Polymorphism (Questions 8–10)

//Q8.Create a Bird class with a method makeSound(). 
//Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.

class Bird{
    makeSound(){
        document.writeln("Some sounds of bird:");
    }
}

class Sparrow extends Bird{
    makeSound(){
        document.writeln("chirp chirp <br>");
    }
}

class Parrot extends Bird{
    makeSound(){
        document.writeln("Squawks squawks");
    }
}


const sparrow=new Sparrow();
sparrow.makeSound();

const parrot= new Parrot();
parrot.makeSound();
//Q9.Create a Shape class with a method area(). 
//Then create Circle and Square classes that extend Shape and implement their own area() logic.

// class Shape{
//     constructor(color,area){
//         this.color=color;
//         this.area=area;
//     }
//     getColor(){
//         document.writeln("color:",this.color,"<br>");
//     }
//     calculateArea(){
//         document.writeln("area is:",this.area,"<br>");
//     }
// }
// class Circle extends Shape{
//     constructor(radius,color){
//         super(color,Math.floor(Math.PI*radius*radius));
//     }
// }

// class Square extends Shape{
//     constructor(side,color){
//         super(color,side*side);
//     }
// }
// const s1=new Circle(4,"red");
// const s2=new Square(5,"blue");

// s1.getColor()
// s1.calculateArea();
// s2.getColor();
// s2.calculateArea();


































































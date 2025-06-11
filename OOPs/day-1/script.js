//Q.1 create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

// class Student{
//     //name,stream,gender,height,age
//     name;
//     stream;
//     gender;
//     height;
//     age;

//     display(name,stream,gender,height,age){
//         this.name=name;
//         this.stream=stream;
//         this.gender=gender;
//         this.height=height;
//         this.age=age;

//     }

// }
// const S1=new Student();
// S1.display("Abhi","FYBCA","male",5.5,19);
// document.writeln(S1.height);

// const S2=new Student();
// S2.display("Vicky","Bcom","male",6.0,20);
// document.writeln(S2.name);

// const S3=new Student();
// S3.display("Vivek","BBA","male",5.3,21);
// document.writeln(S3.stream);


//Q3 create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

// class Car{
//     // name,company,type,color,country
//     name;
//     company;
//     type;
//     color;
//     country;

//     records(name,compnay,type,color,country){
//         this.name=name;
//         this.company=compnay;
//         this.type=type;
//         this.color=color;
//         this.country=country;
//     }
// }

// const kia=new Car();
// kia.records("kiaSeltos","kia","Petrol","Black","India")
// document.writeln(kia.company);

// document.writeln("<br>");
// const Hondacity=new Car();
// Hondacity.records("HondaCity","Honda","Petrol","White","India")
// document.writeln(Hondacity.type);

// document.writeln("<br>");
// const Thar=new Car();
// Thar.records("Thar","Mahindra","Diesel","Black","India")
// document.writeln(Thar.company);

//  Q3 create class for ATM, with checkBalance, withdraw, deposit.

// class ATM{
//     // debit,pin,balance
//     debit;
//     pin;
//     balance=1000;

//     deposit(debit,pin,balance){
//         this.debit=debit;
//         this.pin=pin;
//         this.balance=this.balance+balance;
//     }
//     withdraw(debit,pin,balance){
//         this.debit=debit;
//         this.pin=pin;
//         this.balance=balance-this.balance;
//          document.writeln("balance after withdraw",this.balance);
//     }
//     checkBalance(debit,pin){
//         this.debit=debit;
//         this.pin=pin;
//         document.writeln("your balance is",this.balance);
//     }
// }

// const User=new ATM();
// User.deposit("VISA",4512,4000);
// User.checkBalance("VISA",4512);
// User.withdraw("VISA",4512,2000);


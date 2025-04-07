// wap to check the voting eligibility of user.

let age= 50;

 if(age > 100){
    document.writeln("more than 100 age is not allowed")
}
else if(age > 18){
    document.writeln("user is eligible for vote !");
}
else if(age < 0){
    document.writeln("negative age is not allowed")
}
else if(age == 0){
    document.writeln("please enter valid age !");
}
else{
    document.writeln("user is not eligible for vote !");
}
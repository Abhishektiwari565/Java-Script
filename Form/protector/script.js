
const email=document.getElementById("email");
const password=document.getElementById("password");
const login=document.getElementById("login");
const msg=document.getElementById("msg");

const emailRegx=  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}/; //this is email validator 
const passwordRegx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; //this is password validator


login.addEventListener('click',()=>{ //to work on login button create a click event
    if(email.value==" " || password.value==" "){ //if email and password both are not fill  then
        msg.textContent="both fields are required" //display msg 
     }else if(emailRegx.test(email.value) && passwordRegx.test(password.value)){ //if email and password are correct then
        msg.textContent="email and password are valid !"; //display msg
     }else if(!emailRegx.test(email.value) && !passwordRegx.test(password.value)){ //if email and password are not correct then
        msg.textContent="email and password both are invalid !"; //display msg
     }else if(!emailRegx.test(email.value)){ //if email are not correct then
        msg.textContent="email is not valid !"; //display msg
     }else if(!passwordRegx.test(password.value)){ //if password are not valid then
        msg.textContent="password is not valid !"; //display msg
     }
})
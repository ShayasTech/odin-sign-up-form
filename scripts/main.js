let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-pass");
let confirmMsg = document.querySelector(".password-match-msg");

confirmPassword.addEventListener('keyup', ()=>{
    if(password.value == '' || confirmPassword.value == ''){
        confirmMsg.innerText = "Confirm Password";
        confirmMsg.style.color = "red";
        password.style.border = "1px solid red"
        confirmPassword.style.border = "1px solid red"
    }
    else if(password.value == confirmPassword.value){
        confirmMsg.innerText = "Password Match";
        confirmMsg.style.color = "green";
        password.style.border = "1px solid green";
        confirmPassword.style.border = "1px solid green";
    }else{
        confirmMsg.innerText = "* Password do not match";
        confirmMsg.style.color = "red";
        password.style.border = "1px solid red"
        confirmPassword.style.border = "1px solid red"
    }
});

password.addEventListener('keyup', ()=>{
    if(password.value == '' || confirmPassword.value == ''){
        confirmMsg.innerText = "Enter The Password";
        confirmMsg.style.color = "red";
        password.style.border = "1px solid red"
        confirmPassword.style.border = "1px solid red"
    }
    else if(password.value == confirmPassword.value){
        confirmMsg.innerText = "Password Match";
        confirmMsg.style.color = "green";
        password.style.border = "1px solid green";
        confirmPassword.style.border = "1px solid green";
    }else{
        confirmMsg.innerText = "* Password do not match";
        confirmMsg.style.color = "red";
        password.style.border = "1px solid red"
        confirmPassword.style.border = "1px solid red"
    }
});
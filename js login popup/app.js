let modealToggle=document.getElementById("login-popup");
let modealLogin=document.querySelector(".login-modeal");
let closeLogin = document.getElementById("close-btn");
closeLogin.addEventListener("click",()=>{
    modealLogin.style.display="none"
})
modealToggle.addEventListener("click",()=>{
    modealLogin.style.display="flex"
})

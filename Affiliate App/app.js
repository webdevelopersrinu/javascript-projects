let user=document.getElementById("user");
let dropdown=document.getElementById("drop");
let nav=document.querySelector("nav");
let saidMenu=document.querySelector(".said-menu");
user.addEventListener("click",()=>{
    if(dropdown.style.display=="flex"){
        dropdown.style.display="none"
    }else{
        dropdown.style.display="flex"   
    }
    let darkMode=document.querySelector("input");
    darkMode.onchange=function(){
        if(darkMode.checked){
            document.body.style.background="black";
            nav.style.color="#fff";
            nav.style.borderBottomColor ="#fff"
            saidMenu.style.color="#fff";
            saidMenu.style.borderRightColor="#fff";
            dropdown.style.color="black";
        }else{
            document.body.style.background="#fff";
            nav.style.color="black";
            nav.style.borderBottomColor ="black"
            saidMenu.style.color="black";
            saidMenu.style.borderRightColor="blcak";
            saidMenu.style.borderBottomColor ="black"
        }
    }
})
// login section
let login=document.querySelector(".login-page");
let loginModal=document.getElementById("login-modal");
loginModal.addEventListener("click",()=>{
    login.style.display="flex"
})
var closeLoginModal=document.querySelector(".close-btn");
console.log(closeLoginModal)
closeLoginModal.addEventListener("click",()=>{
    login.style.display="none"
})

let body=  document.querySelector("body");
let color=document.querySelector("input");
color.addEventListener("change",(event)=>{
    body.style.background= event.target.value;
})

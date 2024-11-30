let num=document.getElementById("num");
let result=document.getElementById("output");
let submitBtn=document.getElementById("submit-btn");
submitBtn.addEventListener("click",()=>{
    let checker=num.value;
    if(checker == ""){
        result.textContent="enter any number";
        result.style.color="red";
    }
    else{
        if(checker%2 == 0){
            result.textContent="the number is even";
            result.style.color="black";
        }else{
            result.textContent="the number is odd";
            result.style.color="black";
        }
    }
})
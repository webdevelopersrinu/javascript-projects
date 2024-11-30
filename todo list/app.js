let input = document.getElementById("input");
let list = document.getElementById("list");
function add() {
  let inputValue = input.value;
  if (inputValue) {
    let myLi = document.createElement("li");
    myLi.innerText = inputValue;
    list.insertAdjacentElement("afterbegin", myLi);
    let clsIcon = document.createElement("span");
    clsIcon.innerText = "\u00d7";
    myLi.appendChild(clsIcon);
    input.value = "";
    saveData();
  } else {
    alert("enter some text.....");
  }
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();

let input = document.getElementById("inputField");
let btn = document.getElementById("addBtn");
let list = document.getElementById("list");
    input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
    });
function addItem() {
    input.focus();
    let inputData = input.value;
    let li = document.createElement("li");
    li.setAttribute("id", "item");
    document.getElementById("list").appendChild(li);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "check");
    li.appendChild(checkBox);

    let spanl = document.createElement("span");
    li.appendChild(spanl);
    spanl.innerHTML = inputData.toUpperCase();

    let container = document.createElement("div");
    container.setAttribute("class","icon-wrap")
    li.appendChild(container);
  
    // checkBox.setAttribute("onclick","toCheck()");
    // li.innerHTML = inputData;
    input.value = "";

    let trash = document.createElement("i");
    trash.classList.add("hi", "bi", "bi-trash3");
    container.appendChild(trash);

    let edit = document.createElement("i");
    edit.classList.add("bi", "bi-pencil-square");
    container.appendChild(edit);
    
    
}
function deleteItem(event) {
  if (event.target.classList[0] === "hi") {
    let item = event.target.parentElement.parentElement;
    item.remove();
  }
}
function editItem(event) {
  if (event.target.classList[1] === "bi-pencil-square") {
    let editText = prompt("edit text");
    let item = event.target.parentElement.parentElement;
    let spanl = item.querySelector("span");
    spanl.innerText = editText.toUpperCase();
  }
}


function toCheck(event) {
  let item = event.target.parentElement;
    let spanl = item.querySelector("span");
    
  if(event.target.checked){
     spanl.style.cssText = 'text-decoration: line-through;color:rgb(205,16,16)'
  }
  else{
     spanl.style.cssText = 'text-decoration: none;'
  }
 
}


btn.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);
list.addEventListener("click", editItem);
list.addEventListener("click", toCheck);

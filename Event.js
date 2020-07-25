var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    input.value.length;
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var button1 = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button1);
    ul.appendChild(li);
    button1.innerHTML = "delete";
    input.value = "";
}
function addListAfterClick(){
        if(inputLength() > 0){
            createListElement();
        }
}

function addListAfterPress(){
        if(inputLength() > 0 && event.keyCode===13){
            createListElement();
        }
}

button.addEventListener("click",addListAfterClick);
   
input.addEventListener("keypress",addListAfterPress);

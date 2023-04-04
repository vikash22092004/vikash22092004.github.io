const inputBox = document.getElementById("input-box");
const listbucket = document.getElementById("list-bucket");

function addwish(){
    if(inputBox.value===''){
        alert("C'mon dude add on something that u wish");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listbucket.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listbucket.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listbucket.innerHTML);
}
function showData(){
    listbucket.innerHTML = localStorage.getItem("data");
}
showData();
let inputItem = document.getElementById("inputItem");
let list = document.getElementById("taskList");

function addItem(){
    let item = inputItem.value;
    if(item != ""){
        let newItem = document.createElement("li");
        newItem.textContent = item;
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fas fa-times"></i>`
        deleteButton.addEventListener("click", function(){
            list.removeChild(newItem);
        })
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
        inputItem.value = "";
    } else{
        alert("Digite uma tarefa!");
    }
    inputItem.focus();
}

function clearList(){
    if(list.hasChildNodes()){
        list.innerHTML = "";
    } else{
        alert("A lista já está vazia!");
    }
}

inputItem.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addItem();
    }
    if(event.key === "Delete"){
        clearList();
    }
})
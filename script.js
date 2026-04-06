function addTask(){
    let input=document.getElementById("taskinput");
    let task=input.value;
    if(task===""){
        alert("Enter a task");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML=task+" <button onclick='removeTask(this)'>Delete</button>";
    document.getElementById("tasklist").appendChild(li);
    input.value="";
}
function removeTask(button){
    button.parentElement.remove();
}

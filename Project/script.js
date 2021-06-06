var txtTaskName = document.getElementById('taskName');
var task = document.getElementById('task');
var index = 0;

function addTask(){
    (txtTaskName.value == "") ? alert("Add the requiered information") : displayTask();
}

function displayTask(){
    var tmp="";
    tmp =  `<ul id="card-${index}" class="card line">
                <li id="task-${index}" class="task card-body"> 
                    <h3>${txtTaskName.value}</h3>
                    <button id="button-delete-${index}" class="btn btn-outline-secondary" type="button" onclick='removeTask(${index})'> Delete </button>
                </li>
            </ul>`;

    task.innerHTML += tmp;
    clearInput();
    index++;       
}

function removeTask(clickedId){
    var element = document.getElementById("card-"+clickedId);
    element.remove();
}

function clearInput (){
    txtTaskName.value = "";
}
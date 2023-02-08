let tasks = document.getElementById("tasks"),
enter = document.getElementById("enter"),
add = document.getElementById("add"),
notasks = document.getElementById("nomsg"),
trash = document.getElementById("trash"),
completed = document.getElementById("completed"),
clear = document.getElementById("clear"),
counter;

window.onload = function(){
    enter.focus();
}

add.onclick = function(){        
    if(enter.value === ''){
        Swal.fire(
            'Any Task?',
            'Please enter your task to add it to your list',
            'question'
          )
    }
    else{
        notasks.remove();
        tasks.innerHTML += '<div class="task" id="task"><input type="checkbox" class="done" id="done" value="done"><p class="task-text" id="text">'+enter.value+'</p><div class="del-edi"><button class="edit" id="edit"><span class="material-symbols-outlined">edit</span></button><button class="delete" id="delete"><span class="material-symbols-outlined">delete</span></button><input type="color" class="color" id="color"></input></div><hr>';
        let task = document.getElementById("task"),
        done = document.getElementById("done"),
        color = document.getElementById("color"),
        remove = document.getElementById("delete"),
        edit = document.getElementById("edit"),
        textmsg = document.getElementById("text");
        // counter = tasks.children.length;

        enter.value = '';
        enter.focus();

        done.onclick = function (){
            if(done.checked) {
                textmsg.style.textDecoration = "line-through";
            }else{
                textmsg.style.textDecoration = "none";
            }
            }

        color.onclick = function (){
                task.style.backgroundColor = color.value;
                remove.style.backgroundColor = color.value;
                edit.style.backgroundColor = color.value;
                color.style.backgroundColor = color.value;
        }

        remove.onclick = function (){
            task.style.display = "none";
        }

    }
}

trash.onclick = function (){
    Swal.fire(
        'Deleted Tasks',
        enter.value,
        'warning'
      )
}

completed.onclick = function (){
    Swal.fire(
        'Completed Tasks',
        textmsg.textContent,
        'success'
      )
}

clear.onclick = function(){
    tasks.innerHTML = '<div class="no" id="nomsg">No tasks to show</div>';
}
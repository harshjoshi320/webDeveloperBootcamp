todolist = new Array();

function listTodo() {
    console.log("Todo:")
    console.log("###########");
    todolist.forEach(function(todoItem, index){
        console.log(index+": "+todoItem);
    });
    console.log("###########");
}

function addTodo(){
    item = prompt("Enter a new todo:");
            todolist.push(item);
}

function delTodo(){
    ind = prompt("Enter the index of todo item to be deleted:");
            todolist.splice(ind,1);
}

function todo(){
    flag = true;
    var choice;
    while(flag) {
        choice = prompt("What do you want to do ?");
        if(choice === 'list'){
            listTodo();
        }
        else if(choice === 'new'){
            addTodo();
        }
        else if(choice === 'del'){
            delTodo();
        }
        else if(choice === 'quit'){
            flag = false;
        }
    }
}


window.setTimeout(todo, 500);
function displayTodo() {
    const todos = JSON.parse(localStorage.getItem('todos'))

    let list = ``

    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            // const element = todos[index];
            list += `
            <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div class="form-check">
                    <input class="form-check-input me-0" type="checkbox" value="" name="" id=${todos[i].id} onchange="setComplete(this.checked, this.id)" aria-label="..." ${todos[i].checked ? "checked" : ""}>
                    </div>
                </li>

                <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p class="lead fw-normal mb-0">${todos[i].name}</p>
                </li>

                <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                    <button type="button" class="btn btn-danger" onclick="deleteTodo(${todos[i].id})">Delete</button>
                </li>
            </ul>
            `
        }
    }

    document.getElementById('listTodo').innerHTML = list;
}

function submitTodo(){
    const todo = document.getElementById('add-todo').value;

    let todos = JSON.parse(localStorage.getItem('todos'))

    if (todos) {
        todos.push({
            id: todos[todos.length-1].id + 1,
            name: todo,
            checked: false
        })
    } else {
        todos = [{
            id: 0,
            name: todo,
            checked: false
        }]
    }

    localStorage.setItem('todos', JSON.stringify(todos))

    document.getElementById('add-todo').value = ''

    displayTodo();
}

const setComplete = (checked, id) => {
    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.map(el => {
        if (el.id === Number(id)) {
            el.checked = checked
        }

        return el
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    displayTodo()
}

function deleteTodo(todoId){
    // console.log("mau delete");
    // let todos = JSON.parse(localStorage.getItem('todos'))
    // let todoTarget = todoId
    // let tampSementara = []
    // todos.forEach(todo => {
    //     if (todo.id !== todoTarget) {
    //         tampSementara.push(todo)
    //         localStorage.setItem('todos', JSON.stringify(tampSementara))
    //         // console.log("mau delete todo dengan ID :", todo.id);
    //     }
    // });
    
    // console.log(tampSementara);
    
    let todos = JSON.parse(localStorage.getItem('todos'))
    
    todos = todos.filter(el => el.id !== todoId)
    
    if (todos.length) {
        localStorage.setItem('todos', JSON.stringify(todos))
    } else {
        localStorage.removeItem('todos')
    }
    
    displayTodo();
}
let todos = document.getElementById('todos');
let todosDiv = document.getElementById('todosDiv');

let removeTodos = 0
let addTodos = () => {
    ++removeTodos
    todosDiv.innerHTML += (`
        <div id='deleteTodo${removeTodos}'>${removeTodos + ")" + todos.value}
        <button onclick="deleteTodos('${removeTodos}')">Delete</button>
        </div>
        `)
}

let deleteTodos = (value) => {
    let deleteNum = "deleteTodo" + value
    // console.log(deleteNum)
    if (todosDiv.innerHTML.includes(value)) {
        let deletethis = document.getElementById(deleteNum)
        deletethis.innerHTML = ''
        console.log(value, deleteNum)
    }
    // console.log('working')
    // console.log(value)
}
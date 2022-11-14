
document.getElementById('populate').addEventListener('click', () => {
    getTodos((error, todos) => {
        if (error) {
            console.log(`Error: ${error}`)
        } else {
            const todoList = document.querySelector('#todo-list');
            todos.forEach(todo => {
                const div = document.createElement('div');
                div.textContent = `User ID - ${todo.userId} - Todo: ${todo.title} - Completed - ${todo.completed} `;
                todoList.appendChild(div);
            });
        }
    })
})



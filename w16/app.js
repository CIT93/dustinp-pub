
const filters = {
    hideCompleted: false,
  };


document.getElementById('populate').addEventListener('click', () => {
  getTodos().then((data) => {
    const todoList = document.querySelector('#todo-list');
    data.forEach((todo) => {
      const div = document.createElement('div');
      div.textContent = `User ID - ${todo.userId} - Todo: ${todo.title} - Completed - ${todo.completed} `;
      todoList.appendChild(div);
    });
    return data;
  });
});

document.getElementById('completed-todos').addEventListener('change', () => {
   if (document.getElementById('completed-todos').checked) {
       showCompleted();
    } else {
        const completedTodos = document.querySelectorAll('div');
        completedTodos.forEach((todo) => {
            todo.style.display = 'block';
        });
    };


// created a function that will only show completed todos when the checkbox is checked
function showCompleted() {
    const completedTodos = document.querySelectorAll('div');
    completedTodos.forEach((todo) => {
        if (todo.textContent.includes('true')) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    });
}
});
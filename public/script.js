document.getElementById('todoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if (todoText) {
        fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: todoText })
        }).then(() => {
            input.value = '';
            loadTodos();
        });
    }
}

function loadTodos() {
    fetch('/todos').then(response => response.json()).then(todos => {
        const list = document.getElementById('todoList');
        list.innerHTML = '';
        todos.forEach(todo => {
            const item = document.createElement('li');
            item.textContent = todo.text;
            list.appendChild(item);
        });
    });
}

loadTodos();

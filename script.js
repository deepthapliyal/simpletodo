   const todos = [];

    function renderTodos() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';
      
      todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodo(index);
        
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateTodo(index);
        
        listItem.appendChild(removeButton);
        listItem.appendChild(updateButton);
        todoList.appendChild(listItem);
      });
    }

    function addTodo() {
      const newTodoInput = document.getElementById('newTodo');
      const newTodo = newTodoInput.value.trim();
      
      if (newTodo !== '') {
        todos.push(newTodo);
        newTodoInput.value = '';
        renderTodos();
      }
    }

    function removeTodo(index) {
      todos.splice(index, 1);
      renderTodos();
    }

    function updateTodo(index) {
      const updatedTodo = prompt('Update todo:', todos[index]);
      
      if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
      }
    }

    function deleteAllTodos() {
      todos.length = 0; // Clear the array
      renderTodos();
    }

    // Initial rendering
    renderTodos();

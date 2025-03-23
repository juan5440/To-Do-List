const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'todo-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm';
    completeBtn.textContent = 'Completar';
    completeBtn.onclick = () => toggleComplete(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = () => deleteTask(li);

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);

    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}
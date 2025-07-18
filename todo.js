document.getElementById('addTask').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById('taskList');

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = ${taskText} <span class="delete">X</span>;
  taskList.appendChild(li);

  // Delete task
  li.querySelector('.delete').addEventListener('click', function () {
    li.remove();
  });

  taskInput.value = '';
});
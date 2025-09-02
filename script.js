function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

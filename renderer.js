const input = document.getElementById("new-task");
const list = document.getElementById("task-list");

function addTask() {
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => {
    li.classList.toggle("done");
    saveTasks();
  };

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", list.innerHTML);
}

function loadTasks() {
  list.innerHTML = localStorage.getItem("tasks") || "";
}
loadTasks();

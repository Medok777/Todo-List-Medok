//form
const form = document.querySelector("#form");
const taskNameInput = document.querySelector("#inputTask");
const textareaTask = document.querySelector("#textareaTask");
const taskUl = document.querySelector(".todo-task-column");
const quantity = document.querySelector("#quantity");
const deleteTaskBtn = document.querySelector(".cross");
const colorBtnDone = document.querySelector(".color");

//modal
const description = document.querySelector("#description");
const modalTask = document.querySelector(".show-modal");
const modalTaskText = modalTask.querySelector("p");
const closeModalBtn = document.querySelector("#close");

form.addEventListener("submit", addNewTask);

function addNewTask(event) {
  event.preventDefault();
  const taskText = taskNameInput.value;
  const taskdescription = textareaTask.value;

  const taskItem = document.createElement("li");
  taskItem.classList.add("todo-task");

  const taskHTML = `
  <div class="todo-task__text">
    <p class="color">${taskText}</p>
    <button id="descriptionBtn">description</button>
  </div>
  <div class="todo-task__btn">
    <button class="check-mark">
      <img src="./img/+.svg" alt="" />
    </button>
    <button class="cross"><img src="./img/X.svg" alt="" /></button>
  </div>`;

  if (taskNameInput.value === "") {
    alert("Specify the name of your task")
    return
  }

  taskItem.dataset.description = taskdescription;

  taskItem.innerHTML = taskHTML;
  taskUl.appendChild(taskItem);
  taskNameInput.value = "";
  textareaTask.value = "";

  numberTasks();
}

function numberTasks() {
  const allTask = taskUl.querySelectorAll("li");
  quantity.textContent = allTask.length;
}

taskUl.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".cross");
  const doneBtn = event.target.closest(".check-mark");
  const descriptionBtn = event.target.closest("#descriptionBtn");

  if (deleteBtn) {
    const taskItem = deleteBtn.closest(".todo-task");

    taskItem.remove();
    numberTasks();
  }

  if (doneBtn) {
    const taskItem = doneBtn.closest(".todo-task");
    const taskText = taskItem.querySelector(".color");
    taskText.classList.toggle("color-text");
  }

  if (descriptionBtn) {
    const taskItem = descriptionBtn.closest(".todo-task");
    const descriptionText = taskItem.dataset.description;

    modalTaskText.textContent = descriptionText;
    modalTask.style.display = "flex";
  }
});

closeModalBtn.addEventListener("click", () => {
  modalTask.style.display = "none";
});



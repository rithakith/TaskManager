window.onload = init;
var inputField, tasks;
var inputValue;
function init() {
  inputField = document.querySelector("#inputField");
  tasks = document.querySelector(".tasks");
}

function addTask() {
  inputValue = inputField.value;
  if (inputValue === "") {
    alert("Task Field cannot be empty");
  } else {
    tasks.innerHTML +=
      '<div class="task"><p>' +
      inputValue +
      '</p><button class="delete"><i class="fa fa-trash-alt" aria-hidden="true"></i></button>';
  }

  var deleteButtons = document.querySelectorAll(".delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  var allTasks = document.querySelectorAll(".task");
  for (var i = 0; i < allTasks.length; i++) {
    allTasks[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }

  inputField.value = "";
}

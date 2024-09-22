let inputFeild = document.querySelector("#todo_input");
let myForm = document.querySelector("#my_Form");
console.log(inputFeild);

let todos = [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  todos.push({
    id: Math.random() * 10 * Math.random() * 3,
    text: e.target[0].value,
    isCompleted: false,
  });

  renderTodo(todos);
});

function renderTodo(todos, delll) {
  let mydiv = document.getElementById("main");

  mydiv.innerHTML = "";

  todos.map((todo) => {
    let paraElement = document.createElement("p");
    let btnElement = document.createElement("button");
    paraElement.textContent = todo.text;
    btnElement.innerText = "X";

    mydiv.appendChild(paraElement);
    mydiv.appendChild(btnElement);

    //removing data

    btnElement.addEventListener("click", () => handleRemove(todo.id));
  });
}

//remove fuunctoin
function handleRemove(id) {
  todos = todos.filter((todo) => todo.id !== id);
  console.log(todos);
  renderTodo(todos);
}

//date input should not be the past
const listSection = document.querySelector(".listSection");
const input = document.querySelector(".item");
const date = document.querySelector(".date");
const sort = document.querySelector(".sort");
const add = document.querySelector(".add");

//condition
//add eventlistener
const todoArray = [];
add.addEventListener("click", () => {
  const d = new Date();
  const getDate = Date.parse(d) - Date.parse(date.value);
  if (!input.value || !date.value) {
    alert("type sth com'on.");
    return;
  }
  if (getDate < 29999999 && Math.sign(getDate) !== -1) {
    alert("that's today!");
  } else if (Math.sign(getDate) !== -1) {
    alert("fill in a future date");
  } else {
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoList = document.createElement("p");
    todoList.classList.add("li");
    todoList.innerHTML = input.value;

    let todoDate = document.createElement("p");
    todoDate.classList.add("date");
    todoDate.innerHTML = date.value;
    todoArray.push({
      id: input.value,
      date: date.value
    });

    let check = document.createElement("button");
    check.classList.add("button");
    check.classList.add("checkGreen");
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.addEventListener("click", () => {
      todo.classList.toggle("checked");
    });

    let trash = document.createElement("button");
    trash.classList.add("button");
    trash.classList.add("trashRed");
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trash.addEventListener("click", () => {
      todo.remove();
      // todoDiv.style.animation = "scaleDown 0.3s forwards"
    });

    todo.appendChild(todoList);
    todo.appendChild(todoDate);
    todo.appendChild(check);
    todo.appendChild(trash);

    listSection.appendChild(todo);
  }
});
let inputNum = 0;
let inputArray = [];

sort.addEventListener("click", () => {
  removeElementsByClass("todo");
  todoArray.sort(compare);
  // rebuild todo list
  for(var i=0; i<todoArray.length; i++) {
    var str = `
      <div class="todo">
        <p class="li">${todoArray[i].id}</p>
        <p class="date">${todoArray[i].date}</p><button class="button checkGreen"><i class="fa-solid fa-check"></i></button><button
          class="button trashRed"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    document.querySelectorAll(".listSection")[0].innerHTML = document.querySelectorAll(".listSection")[0].innerHTML + str
  }
});

// remove by class name
function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

// sort
function compare(a, b) {
  if ( a.date < b.date ){
    return -1;
  }
  if ( a.date > b.date ){
    return 1;
  }
  return 0;
}

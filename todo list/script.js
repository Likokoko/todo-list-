//date input should not be the past
const listSection = document.querySelector(".listSection");
const input = document.querySelector(".item");
const date = document.querySelector(".date");
const sort = document.querySelector(".sort");
const add = document.querySelector(".add");

//condition

//add eventlistener
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
  const todo = document.querySelectorAll(".todo");
  for (let i = 0; i < todo.length; i++) {
    let yearNum = todo[i].innerText.split("\n\n")[1].split("-")[0];
    let monthNum = todo[i].innerText.split("\n\n")[1].split("-")[1];
    let dateNum = todo[i].innerText.split("\n\n")[1].split("-")[2];
    console.log((inputNum = Number(yearNum + monthNum + dateNum)));
    //想取得inputNum的值後sort數值大小，為什麼顯示inputArray.push不能用？
    inputArray = inputArray + inputArray.push(inputNum);
  }
});

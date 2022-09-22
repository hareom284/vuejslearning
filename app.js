const btn1 = document.querySelector("button");
const goal = document.querySelector("#goal");
const lists = document.querySelector("#items");

function pushLists() {
  let list = goal.value;
  let creatLi = document.createElement("li");
  lists.textContent = list;
  lists.appendChild(creatLi);
  document.querySelector("#goal").value = "";
}

btn1.addEventListener("click", pushLists);

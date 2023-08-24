const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList();
}
);

function toDoList(){
    let newTask = inputEl.value;
    const liEl = document.createElement("li");

    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkBtnEl = document.createElement("div");

    checkBtnEl.innerHTML = `<i class="fa-regular fa-circle-check">
    </i>`
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");

    trashBtnEl.innerHTML = ` <i class="fa-regular fa-trash-can">
    </i>`
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    })

    trashBtnEl.addEventListener("click",()=>{
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();

}

function updateLocalStorage(){
    const liEls =document.querySelectorAll("li");

    let list = [];
    liEls.forEach(liEl =>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list));
}
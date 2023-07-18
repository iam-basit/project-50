const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
})
function updateCounter(){
    totalCounterEl.innerText= textareaEl.value.length;
    remainingCounterEl.innerText= textareaEl.value.length  - 60;
}
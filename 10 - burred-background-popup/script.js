const containerEl = document.querySelector(".main-container");
const btnEl = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");


btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContainer.classList.remove("active");
})

closeIcon.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContainer.classList.add("active");
})
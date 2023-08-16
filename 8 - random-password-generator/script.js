const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
    createPassword()
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+:?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const passwordLength = 14;
}
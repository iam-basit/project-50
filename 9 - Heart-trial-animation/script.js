const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const spanEl = document.createElement("span");
    bodyEl.appendChild(spanEl);
    spanEl.style.top = yPosition + "px";
    spanEl.style.left = xPosition + "px";
    const heartSize = Math.random()*100;
    spanEl.style.width = heartSize + "px";
    spanEl.style.height = heartSize + "px";
    setTimeout(()=>{
        spanEl.remove();
    },3000)
});
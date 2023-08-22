const btnEl = document.querySelector(".btn");
const emojiNameEl = document.querySelector(".emoji-name");

const emoji=[];

 async function getEmojis(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=b85d2b5df211460882577fb73d45e4355104fdc4")

    data  = await response.json();

    for(let i=0;i<=1500;i++){
        emoji.push({
            emojiName : data[i].character,
            emojiCode: data[i].unicodeName
        });
    }
}

getEmojis();

btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()* emoji.length)
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})
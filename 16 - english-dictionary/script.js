const inputEl = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word){
try {

    meaningContainerEl.style.display = "none";
    infoText.style.display = "block";
    infoText.innerText = `Searching the meaning of "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word} `
    const result = await fetch(url).then((res)=> res.json());

    if(result.title){
        meaningContainerEl.style.display = "block"; 
        infoText.style.display = "none";

        titleEl.innerText = word;
        meaningEl.innerText = "N/A"
        audioEl.style.display = "none";
    }
    else{
        infoText.style.display = "none";
        meaningContainerEl.style.display = "block";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.style.display = "inline-flex";
        audioEl.src = result[0].phonetics[0].audio;
    }

    

} catch (error) {
    infoText.innerText = `An error happened please try again latter`;

}


}

inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})
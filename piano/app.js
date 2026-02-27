const keys = document.querySelectorAll(".keys div")
const pianoHeader = document.querySelector(".piano-heaader")

const songsFirst = {
  "c": "./Songs/36.mp3",
  "c#": "./Songs/37.mp3",
  "d": "./Songs/38.mp3",
  "d#": "./Songs/39.mp3",
  "e": "./Songs/40.mp3",
  "f": "./Songs/41.mp3",
  "f#": "./Songs/42.mp3",
  "g": "./Songs/43.mp3",
  "g#": "./Songs/44.mp3",
  "a": "./Songs/45.mp3",
  "a#": "./Songs/46.mp3",
  "b": "./Songs/47.mp3"
};

const songsSec = {
  "c": "./Songs/48.mp3",
  "c#": "./Songs/49.mp3",
  "d": "./Songs/50.mp3",
  "d#": "./Songs/51.mp3",
  "e": "./Songs/52.mp3",
  "f": "./Songs/53.mp3",
  "f#": "./Songs/54.mp3",
  "g": "./Songs/55.mp3",
  "g#": "./Songs/56.mp3",
  "a": "./Songs/57.mp3",
  "a#": "./Songs/58.mp3",
  "b": "./Songs/59.mp3"
};

const songsThird = {
  "c": "./Songs/60.mp3",
  "c#": "./Songs/61.mp3",
  "d": "./Songs/62.mp3",
  "d#": "./Songs/63.mp3",
  "e": "./Songs/52.mp3",
  "f": "./Songs/53.mp3",
  "f#": "./Songs/54.mp3",
  "g": "./Songs/55.mp3",
  "g#": "./Songs/56.mp3",
  "a": "./Songs/57.mp3",
  "a#": "./Songs/58.mp3",
  "b": "./Songs/59.mp3"
};

let noteName = null;
var audio = new Audio();

function playMusic(parent,noteName){
    if(parent.classList.contains("First-row")){
         audio.src = songsFirst[noteName]
         audio.play()
        
      }
      else if(parent.classList.contains("2nd-row")){
         audio.src = songsSec[noteName]
         audio.play()
      }
      else if(parent.classList.contains("3rd-row")){
         audio.src = songsThird[noteName]
         audio.play()
      }
}

keys.forEach(key =>{
    key.addEventListener("click",()=>{
     const parent =  key.parentElement;
     noteName = key.innerText.trim().toLowerCase();
     playMusic(parent,noteName)
      pianoHeader.innerHTML = noteName;
    })

})

document.addEventListener("keydown", (e) => {

     const shift = e.shiftKey

     noteName = (e.key).trim().toLowerCase();

   if(songsSec[noteName]){
          audio.src = songsSec[noteName]
         audio.play()
         console.log(noteName)

    if(shift){
        noteName = (noteName + "#");
         audio.src = songsSec[noteName]
         audio.play()
         console.log(noteName)
    }
   }

    pianoHeader.innerHTML = noteName;
   
})

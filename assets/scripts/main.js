// main.js

// TODO

//make button work
let audio = document.getElementById("horn-sound");
function playSound(event){
    event.preventDefault();
    audio.play();
}
let button = document.getElementById("honk-btn");
button.addEventListener("click", playSound);

//slider and number
let slider = document.getElementById("volume-slider");
let field = document.getElementById("volume-number");
let volumeIcon = document.getElementById("volume-image");

slider.oninput = function() {
    let volume = this.value;
    field.value = volume;
    audio.volume = volume/100;
    if(volume < 1){
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    } else if(volume > 0 && volume < 34){
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    } else if(volume > 33 && volume < 67){
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    } else if(volume > 66){
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }
}

field.oninput = function() {
    let volume = this.value;
    slider.value = volume;
    audio.volume = volume/100;
    if(volume < 1){
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    } else if(volume > 0 && volume < 34){
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    } else if(volume > 33 && volume < 67){
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    } else if(volume > 66){
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }
}

//horn type
let hornimg = document.getElementById("sound-image");
document.getElementById("radio-air-horn").onclick = function (){
    hornimg.src = "./assets/media/images/air-horn.svg";
    audio.src = "./assets/media/audio/air-horn.mp3";
}
document.getElementById("radio-car-horn").onclick = function (){
    hornimg.src = "./assets/media/images/car.svg";
    audio.src = "./assets/media/audio/car-horn.mp3";
}
document.getElementById("radio-party-horn").onclick = function (){
    hornimg.src = "./assets/media/images/party-horn.svg";
    audio.src = "./assets/media/audio/party-horn.mp3";
}


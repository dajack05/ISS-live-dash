let currentIdx = 0;
let videoElems = document.getElementsByClassName('cell');
const cellWidth = videoElems[0].clientWidth;
const videoHolder = videoElems[0].parentElement;

let playing = true;

setInterval(() => {
    if (playing) {
        next();
    }
}, 10 * 1000);

function move(dir) {
    // Update Video `active` Class
    videoElems[currentIdx].classList.remove('active');
    currentIdx += dir;
    if (currentIdx >= videoElems.length) {
        currentIdx = 0;
    } else if (currentIdx < 0) {
        currentIdx = videoElems.length - 1;
    }
    videoElems[currentIdx].classList.add('active');

    // Slide
    const offset = (cellWidth * (videoElems.length / 2)) - cellWidth / 2;
    videoHolder.style.marginLeft = (offset - (cellWidth * currentIdx)) + "px";
}

function fullscreen() {
    videoHolder.parentElement.requestFullscreen();
}

function next() {
    move(1);
}

function previous() {
    move(-1);
}

function toggle(button) {
    playing = !playing;
    button.innerHTML = playing ? "Stop" : "Start";
}

next();
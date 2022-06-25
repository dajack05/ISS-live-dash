let currentIdx = 0;
let videoElems = document.getElementsByClassName('cell');
const videoHolder = videoElems[0].parentElement;

setInterval(() => {
    next();
}, 4000);

function next(){
    // Update Video `active` Class
    videoElems[currentIdx].classList.remove('active');
    currentIdx++
    if(currentIdx >= videoElems.length){
        currentIdx = 0;
    }
    videoElems[currentIdx].classList.add('active');

    // Slide
    const cellWidth = videoElems[currentIdx].getClientRects()[0].width;
    videoHolder.style.marginLeft = cellWidth*currentIdx+"px";
}
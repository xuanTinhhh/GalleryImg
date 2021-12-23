var images = document.querySelectorAll(".image img")
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;


function showGallery() {
    // hide prev
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    // hide next
    if(currentIndex == images.length-1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    //display
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show')
}

    // click image => show image
images.forEach((item, index) => { // forEach => duyet tung anh
    item.addEventListener('click', function () {
        currentIndex  = index; // gan dia chi khi click vao anh
        showGallery();
    }) 
}); 
    // Close
close.addEventListener('click', function () {
    gallery.classList.remove('show')
})
    // Close with ESC
document.addEventListener('keydown', function (e) {
    if(e.keyCode == 27){
    gallery.classList.remove('show')
    }
})
    // click < to prev
prev.addEventListener('click', function () {
    if(currentIndex > 0){
        currentIndex--;
        showGallery();
    }
})
    // click > to next
next.addEventListener('click', function () {
    if(currentIndex < images.length-1){
        currentIndex++;
        showGallery();
    }
})
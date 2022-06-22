let images = ['./img/iphone1.png', './img/iphone-13.png',];
let images2 = ['./img/iphone1.png', './img/iphone-13.png',];
let images3 = ['./img/iphone1.png', './img/iphone-13.png',];


// https://shop.ee.co.uk/gallery/pay-monthly/mobile-phones-h00001


let index = 0;


document.querySelector('.image').src = images[index];


let next = document.getElementById('next-img');
let previous = document.getElementById('previous-img');

next.addEventListener('click', nextImage);

function nextImage() {
    index+=1;


    if (index > images.length - 1) {
     index = 0;
    }

    document.querySelector('.image').src = images[index];

}

previous.addEventListener('click', previousImage);

function previousImage(){
    index-=1;
    if (index < 0) {
     index = images.length - 1;
    }

    document.querySelector('.image').src = images[index];

}






// function nextImage() {
//     index+=1;
//     if (index > images.length - 1) {
//      index = 0;
//     }

//      document.getElementById('imgsrc').src = images[index];

// }
// //'Previous' button

// previous.addEventListener('click', previousImage);

// function previousImage(){
//     index-=1;
//     if (index < 0) {
//      index = images.length - 1;
//     }

//      document.getElementById('imgsrc').src = images[index];

// }
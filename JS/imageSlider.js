let images = ['./img/samsung1.png', './img/iphone-13.png', './img/iphone1.png', './img/pixel-6.png'];


// https://shop.ee.co.uk/gallery/pay-monthly/mobile-phones-h00001


let index = 0;
let index2 = 1;
let index3 = 2;

document.querySelector('.image').src = images[index];
document.querySelector('.image2').src = images[index2];
document.querySelector('.image3').src = images[index3];

let next = document.getElementById('next-img');
// let previous = document.getElementById('slider-previous');

next.addEventListener('click', nextImage);

function nextImage() {
    index+=1;
    index2+=1;
    index3+=1;

    if (index > images.length - 1) {
     index = 0;
    }
    if (index2 > images.length - 1) {
        index2 = 0;
    }
    if (index3 > images.length - 1) {
        index3 = 0;
    }

     document.querySelector('.image').src = images[index];
     document.querySelector('.image2').src = images[index2];
     document.querySelector('.image3').src = images[index3];
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
window.addEventListener("load", mainFunction);

let i = 0;
let images = [];
let time = 3000;

images[0] = '/img/boreal_1.jpg';
images[1] = '/img/boreal_1.jpg';
images[2] = '/img/boreal_1.jpg';
images[3] = '/img/boreal_1.jpg';

// SLIDER FUNCTION

// function changeImg(){
//     document.slide.src = images[i];


//     if (i < images.length - 1) {
//         i++
//     } else {
//         i = 0;
//     }

//     setTimeout('changeImg()', time);
// }






function mainFunction() {



   const scrollIcon = document.querySelector('.icon');

   scrollIcon.addEventListener('click', scrollFunction);
   
    
   function scrollFunction()
 {
    document.querySelector('main').scrollIntoView({ 
        behavior: 'smooth' 
      }, 1000);

 }   
   ;



     



};
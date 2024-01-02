window.onscroll = function () {
    section_2ImgAnimation();
}

function section_2ImgAnimation () {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('#section-2-img').style = "visibility: visible;";
   } else {
    document.querySelector('#section-2-img').style = "visibility: hidden;";
   }
   
}
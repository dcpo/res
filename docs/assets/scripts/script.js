var modal = document.querySelector(".modal");
var omodal = document.querySelector(".open");
var link = document.querySelector(".primary-nav a");



function OpenModal(){
        omodal.addEventListener("click",function(){
           
      modal.classList.toggle("vmodal");
    });
}

OpenModal();

var scroll = new SmoothScroll('a[href*="#"]');
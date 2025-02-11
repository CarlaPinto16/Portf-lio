var x = document.getElementById("img_txt");

// if (x) {
  x.addEventListener("mouseover", func, false);
  x.addEventListener("mouseout", func1, false);
// }

function func()
{
   document.getElementById("toto").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("toto").setAttribute("style", "display:none;")
}
//texto responsivo
//function texto() {
// if (x.className === "texto") {
     // x.className += " responsive";
  //} else{
      //x.className = "texto";
  //}
//}

//galeria
function janela(){
  var x,i,w;

  var corpo = document.getElementById('corpo');
  var coluna = document.getElementsByClassName('coluna');
  x = corpo.clientWidth;
   /*if(x <= 750){ w = 100;}
   else{ 
    if(x <= 1000){ w = 50; }
    else{ w = 25;} 
     }*/
  x<=750 ? w= 100 : w = 49;

  for(i=0 ; i<coluna.length ; i++){

    coluna.item(i).style ='width:'+ w +'%;';
  } 
   
  
  

}



var x = document.getElementById("img_txt");

// if (x) {
  x.addEventListener("mouseover", func, false);
  x.addEventListener("mouseout", func1, false);
// }

function func()
{
   document.getElementById("toto").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("toto").setAttribute("style", "display:none;")
}
//texto responsivo
//function texto() {
// if (x.className === "texto") {
     // x.className += " responsive";
  //} else{
      //x.className = "texto";
  //}
//}
//galeria
function janela(){
  var x,i,w;

  var corpo = document.getElementById('corpo');const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Sobre

  var coluna = document.getElementsByClassName('coluna');
  x = corpo.clientWidth;
   /*if(x <= 750){ w = 100;}
   else{ 
    if(x <= 1000){ w = 50; }
    else{ w = 25;} 
     }*/
  x<=750 ? w= 100 : w = 49;

  for(i=0 ; i<coluna.length ; i++){

    coluna.item(i).style ='width:'+ w +'%;';
  } 
   
  
  

}

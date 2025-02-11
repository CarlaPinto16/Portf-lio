<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Páginna da carla</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css"> 
</head>
<script>
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
  x<=750 ? w= 100 :  (x<=1000 ? w = 50 : w = 25);

  for(i=0 ; i<coluna.length ; i++){

    coluna.item(i).style ='width:'+ w +'%;';
  } 
   
  
  

}
</script>
<body onload="janela()" onresize="janela()">
    <header>
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Início</a>
            <a href="#news">Sobre</a>
            <a href="#contact">Galeria</a>
            <a href="#about">contactos</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
          <script>
           function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }  </script>
    </header>
    <div class="carousel ">
     
    </div> <!-- Slideshow container -->
    <div class="slideshow-container">
    
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext"></div>
        <img src="galeria/banner1-crop.jpg" style="width:100%;">
        <div class="text"></div>
      </div>
    
      <div class="mySlides fade">
        <div class="numbertext"></div>
        <img src="galeria/banner2-crop.jpg" style="width:100%; ">
        <div class="text"></div>
      </div>
    
      <div class="mySlides fade">
        <div class="numbertext"></div>
        <img src="galeria/banner3_crop.jpg" style="width:100%;">
        <div class="text"></div>
      </div>
    
      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    
    <!-- The dots/circles 
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>-->
    </div> 
<script>
      let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
</script>
   
<div>
<div class="voyages">
  <a id="img_txt" class="anchorvyge" href="#">
      <img class="imgvyge" src="galeria/person.jpg" alt="person"></img>
      <p id="toto" class="text">Lê o texto a baixo e sabe mais sobre mim!</p>
  </a>

   <div class="texto" id="textores">
     <h1> Sobre</h1>
     <p>Lorum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <p>Lorum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
   </div>
  
<script href="script.js"></script>

<div id="corpo">

  <h2 class="titulo">Galeria</h2>

  <div class="coluna">
      <div class="p10">
          <img src="galeria/1.jpg" alt="">
      </div>
  </div>
  
  <div class="coluna"><div class="p10"><img src="galeria/2.jpg" alt=""></div></div>
  <div class="coluna"><div class="p10"><img src="galeria/3.jpg" alt=""></div></div>
  <div class="coluna"><div class="p10"><img src="galeria/4.jpg" alt=""></div></div>

  <div class="coluna"><div class="p10"><img src="galeria/5.jpg" alt=""></div></div>
  <div class="coluna"><div class="p10"><img src="galeria/6.jpg" alt=""></div></div>

  <div class="coluna"><div class="p10"><img src="galeria/8.jpg" alt=""></div></div>
  <!--<div class="coluna"><div class="p10"><img src="" alt=""></div></div>
  <div class="coluna"><div class="p10"><img src="" alt=""></div></div>

  <div class="coluna"><div class="p10"><img src="" alt=""></div></div>
  <div class="coluna"><div class="p10"><img src="" alt=""></div></div>-->
</div>
<script href="script.js"></script>
<!--<div class="modal">
  <div class="modal-content">
    <img src="galeria/modal1.jpg" alt="" class="imagem-modal">
    <a href="#galeria/1.jpg" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal2.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal3.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal4.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal5.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal6.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
  </div>
  <div class="modal-content">
    <img src="galeria/modal7.jpg" alt="" class="imagem-modal">
    <a href="#" class="fechar-modal">Fechar</a>
 </div>
 <div class="modal-content">
  <img src="galeria/modal8.jpg" alt="" class="imagem-modal">
  <a href="#" class="fechar-modal">Fechar</a>
</div>
</div>
<script>

  function abrirModal(imagem) {
    const modal = document.querySelector('.modal');
    const imagemModal = document.querySelector('.imagem-modal');

    imagemModal.src = imagem.src;
    modal.style.display = 'block';
  }

  document.querySelectorAll('.imagem').forEach(imagem => {
    imagem.addEventListener('click', () => abrirModal(imagem));
  });

  function fecharModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }

  document.querySelector('.fechar-modal').addEventListener('click', fecharModal);

</script>
-->

 




  
  
  
</body>

</html> 

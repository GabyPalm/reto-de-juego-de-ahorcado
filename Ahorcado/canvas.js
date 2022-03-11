function funcionPantalla(){
  return pantalla = document.querySelector("canvas");
}
function formarPincel(color){
  var pantalla = funcionPantalla();
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = color;
  return pincel;
}
   
    function formadoTriangulo(x, y, base, color){
      var pincel = formarPincel(color);
      pincel.beginPath();
      pincel.moveTo(x, y);
      pincel.lineTo(x + base, y);
      pincel.lineTo((x + base/2), (y - base/4));
      pincel.fill();
  }
  
  function hacerLineas(largo, cantidad){
      var pincel = formarPincel("black");
      var acum = 0;
      for(i = 0; i < cantidad; i++){
          pincel.fillRect(250 + acum, 700, largo, 4);
          acum = acum + largo + 50;
      }
  
  }
  
  function formadoTablero(cantidadDeLetras){
      formadoTriangulo(122, 620, 210, "black");
      formadoTriangulo(132, 620, 190, "#f1cad1");
      hacerLineas(50, cantidadDeLetras);
  }
  
  function vaciarPantalla(){
      document.getElementById("nueva-palabra").style.display = "none";
      document.getElementById("iniciar-juego").style.display = "none";
      document.getElementById("title").style.display = "none";
      document.getElementById("input-nueva-palabra").style.display = "none";
      
  }
  
  function dibujarLetra(letra, x, y){
      pincel = formarPincel("black");
      pincel.font="50pt Verdana";
      pincel.fillText(letra, x, y);
  }
  
  function dibujarFinDelJuego(frase, color){
      pincel = formarPincel(color);
      pincel.font="20pt Verdana";
      pincel.fillText(frase, 700, 400);
  }
  
  function dibujarLinea(xInit, yInit, xFinal, yFinal){
      pincel = formarPincel("black");
      pincel.strokeStyle = "black";
      pincel.lineWidth = 5;
      pincel.beginPath();
      pincel.moveTo(xInit, yInit);
      pincel.lineTo(xFinal, yFinal);
      pincel.stroke();
  }
  
  function dibujarCirculo(x, y, radio,color){
      pincel = formarPincel("black");
      pincel.strokeStyle="red";
      pincel.lineWidth = 5;
      pincel.beginPath();
      pincel.arc(x,y,radio,0,Math.PI*2,true);
      pincel.stroke();
  }
     
  
  function dibujarAhorcado(contador){
      if(contador == 1){
          dibujarLinea(226, 570, 226, 100);
      }else if(contador == 2){
          dibujarLinea(220, 100,400, 100);
      }else if(contador == 3){
          dibujarLinea(400, 100, 400, 150);
      }else if(contador == 4){
          dibujarCirculo(400,200,50,);
      }else if(contador == 5){
          dibujarLinea(400, 250, 400, 400);
      }else if(contador == 6){
          dibujarLinea(400, 300, 520, 210);
      }else if(contador == 7){
          dibujarLinea(400, 300, 280, 210);
      }else if(contador == 8){
          dibujarLinea(400, 390, 520, 540);
      }else if(contador == 9){
          dibujarLinea(400, 390, 260, 540);
      }
  
  }
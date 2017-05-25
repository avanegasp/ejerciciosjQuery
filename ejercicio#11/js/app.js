// window.addEventListener('keydown', function(e){
//   if(e.key === "a"){
//     console.log("presionaste la tecla A")
//   }else if(e.key === "l"){
//     console.log("presionaste la letra L");
//   }
// })
//

// cambiar de color cuando oprima las letras

window.addEventListener('keydown', function cambiaTd1(e){
  if(e.key === "a"){
    document.getElementById('arranque1').innerHTML='amarillo';
    document.getElementById('arranque1').style.background='yellow';
    document.getElementById('arranque1').style.fontSize='small';
    // celda = document.getElementById("fila1")
  }else if(e.key === "l"){
    document.getElementById('arranque2').style.background='blue';
  }
})


window.addEventListener('keydown', function cambiaTd2(e){
  if(e.key === "s"){
    document.getElementById('arranque5').style.background='green';
    // celda = document.getElementById("fila1")
  }else if(e.key === "k"){
    document.getElementById('arranque6').style.background='purple';
  }
})

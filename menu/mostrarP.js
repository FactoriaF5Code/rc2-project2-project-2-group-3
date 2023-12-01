const btn = document.querySelector("#btn-cambiar");
const parrOculto = document.querySelector('#parrOculto');

function mostrarParr() {
  if (parrOculto.className == 'oculto') {
    parrOculto.className = 'mostrado';
    parrOculto.style.display = 'block';
    btn.innerText = 'Pulsa para ocultar menú';    
  } else {
    parrOculto.className = 'oculto';
    btn.innerText = 'Pulsa para ver menú';
    parrOculto.style.display = 'none';
  }
}
const btn2 = document.querySelector("#btn-cambiar2");
const parrOculto2 = document.querySelector('#parrOculto2');

function mostrarParr2() {
  if (parrOculto2.className == 'oculto') {
    parrOculto2.className = 'mostrado';
    parrOculto2.style.display = 'block';
    btn2.innerText = 'Pulsa para ocultar menú';
  } else {
    parrOculto2.className = 'oculto';
    btn2.innerText = 'Pulsa para ver menú';
    parrOculto2.style.display = 'none';
  }
}

const btn3 = document.querySelector("#btn-cambiar3");
const parrOculto3 = document.querySelector('#parrOculto3');
function mostrarParr3() {
  if (parrOculto3.className == 'oculto') {
    parrOculto3.className = 'mostrado';
    parrOculto3.style.display = 'block';
    btn3.innerText = 'Pulsa para ocultar menú';
  } else {
    parrOculto3.className = 'oculto';
    btn3.innerText = 'Pulsa para ver menú';
    parrOculto3.style.display = 'none';
  }
}






// função = tocar
function tocar(idElementoAudio) {
    document.querySelector (idElementoAudio).play();
 }
 const ListaDeTeclas = document.querySelectorALL('.,tecla');
 
 let cotador = 0;
 
 while (contador< ListaDeTeclas.length) {
     const classe =ListaDeTeclas[Contador].classList[1];
     const idAudio = `#som_${classe}`;
     tecla.onclick = function () {
     ListaTeclas[contador].onclick = function () {
        tocar(IdAudio);    

     }
      Contador = Contador +1;
      tecla.onkeydown = fuction () {
       tecla.classList.add('ativa');
    } 
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
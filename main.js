// função = tocar
function tocar(idElementoAudio) {
    document.querySelector (idElementoAudio).play();
 }
 const ListaDeTeclas = document.querySelectorALL('.,tecla');
 
 
 for (contador< ListaDeTeclas.length) {
     const tecla = ListaDeTeclas[Contador++];
     const classe = tecla.classList[1];
     const idAudio = `#som_${classe}`;
     tecla.onclick = function () {
     ListaTeclas[contador].onclick = function () {
        tocar(IdAudio);    

     }
      Contador = Contador +1;
      tecla.onkeydown = fuction () (evento) {
        if (evento.code === 'Space'   evento.code ==='Enter')
       tecla.classList.add('ativa');
       //console.log(evento.code==='Space' evento.code ==='Enter")
    } 
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    } 
}
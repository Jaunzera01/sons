// função = tocar
function tocar() {
    document.querySelector ('#som_tecla_pow').play();
 }
 
 //constante = lista de botões 
 const ListaDeTeclas = document.querySelectorALL('.,tecla');
 
 //variavel =0 a infinito 
 let cotador = 0;
 
 // enquanto ou condição
 while (contador< ListaDeTeclas.length) {
     // acessando o elemento dentro da constante lista
     ListaTeclas[contador].onclick = tocar;
 
      //adicionado a variavel= novo valor
      Contador = Contador +1;
     }
                               
     
     //console conversando comigo
     console.log(contador);
const botaoTopo = document.getElementById("botao-topo");

function topoPagina(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}
botaoTopo.addEventListener("click",topoPagina)

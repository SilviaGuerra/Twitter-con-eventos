var cajaTexto = document.getElementById("tweets");
var tweet = cajaTexto.value;
var timeline = document.getElementById("timeline");
var articulo = document.createElement("article");
var enviar = document.getElementById("enviar");

// cajaTexto.addEventListener("keydown", contador);
enviar.addEventListener("click", imprimir)

// function contador(){
//  console.log("hello");
// }

function imprimir(){
  timeline.innerText = articulo;
  timeline.appendChild(articulo);
  console.log("ya paso");
}

// Tenemos un li de productos

const productos = [
  /* Corregir la ruta de las imagenes */
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/img/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/img/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/img/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/img/zapato-rojo.jpg"}
]

//const li = document.getElementsByName("lista-de-productos")
const li2 = document.querySelector('input');
let li = document.getElementsByName("lista-de-productos"); // se cambió var por let

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") // se cambió var por let
  d.classList.add("productos") //se modificó el elemento productos

  let titulo = document.createElement("p") //se modificó el nombre de la variable ti
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(titulo) //correción de ti
  d.appendChild(imagen)
  //li.appendChild(d)
}

//displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function(a) {
  a.tar
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = li.value; //se cambió la referencia de li
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto") //producto
  
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(titulo)
    d.appendChild(imagen)
  
    //li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  
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
const li = document.getElementById("lista-de-productos") // llamamos el id correctamente con getElementById
const li2 = document.querySelector('.input');

function displayProductos(productos){

  for (let contador = 0; contador < productos.length; contador++) {
    let zapato = `<div class ="producto">
    <p class="titulo">${productos[contador].nombre}</p>
    <img src=${productos[contador].img}></img></div>`
    li.innerHTML+= zapato;  
  }
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = li2.value; //se cambió la referencia de li por li2
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto") //producto
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)


  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  
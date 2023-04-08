let listaProductos = [
    {id:1, nombre:"10 Alitas + Papas", precio: 800, stock:100, descripcion: "10 Alitas de pollo frito acompañadas de papas fritas y un dip de salsa a elcción", cantidad: 1, img: "./img/10a.jpg", alt: "Promo 10"},
    {id:2, nombre:"15 Alitas Trio + Papas", precio: 800, stock:100, descripcion: "15 Alitas de pollo frito acompañadas de papas fritas y tres dips de salsa a elcción", cantidad: 1,  img: "./img/15a.jpeg",  alt: "Trio"},
    {id:3, nombre:"20 Alitas + Papas", precio: 800, stock:100, descripcion: "20 Alitas de pollo frito acompañadas de papas fritas y un dip de salsa a elcción", cantidad: 1,  img: "./img/20a.jpg", alt: "10 Alitas"},
    {id:4, nombre:"Pulled Pork Sandwich + Papas", precio: 120, stock:140, descripcion: "Sandwich de carne de cerdo en hebras estilo sureño acompañado de papas fritas", cantidad: 1,  img: "./img/pulled.jpeg",  alt: "Pulled"},
    {id:5, nombre:"8 Tenders + Papas", precio: 880, stock:100, descripcion: "8 Tenders de pollo frito acompañadas de papas fritas y un dip de salsa a elcción", cantidad: 1,  img: "./img/tenders.jpg", alt: "Tenders"},
    {id:6, nombre:"Papas Poderosas", precio: 700, stock:100, descripcion: "Papas fritas con topping a elección", cantidad: 1,  img: "./img/poderosas.jpeg", alt: "Poderosas"},
    {id:7, nombre:"Fiesta Borges", precio: 2200, stock:100, descripcion: "36 Alitas (Salsas a elección), 8 tenders acompañado de papas fritas con cheddar, verdeo y panceta", cantidad: 1,  img: "./img/fiestaborges.jpeg", alt: "FiestaBorges"},
]

const arrEnFormatoJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos",arrEnFormatoJSON)



/*let listaProductos;
let obtenerListaJSON = localStorage.getItem("listaProductos")

if(obtenerListaJSON){
    listaProductos = JSON.parse(obtenerListaJSON)
    
}else{
    listaProductos = []
}

console.log(listaProductos)

const form = document.getElementById("formulario")


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value

    listaProductos.push({id:id,nombre:nombre,precio:precio,descripcion:descripcion})

    const listaProductosJSON = JSON.stringify( listaProductos )

    localStorage.setItem("listaProductos",listaProductosJSON)

    form.reset()

    console.log(listaProductos)
})
*/
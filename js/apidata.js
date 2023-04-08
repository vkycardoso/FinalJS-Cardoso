
let listado = document.getElementById("listado");

fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-sm-4", "col");
    div.innerHTML = `

<div class="card" style="width: 18rem;">
<img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
<div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">
        ${producto.descripcion}
    </p>

</div>
</div>

`


    ;

    listado.append(div);
  });
})
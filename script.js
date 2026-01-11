const inputUrl = document.getElementById("url");
const btnAgregar = document.getElementById("btn-agregar");
const btnEliminar = document.getElementById("btn-eliminar");
const contenedorGaleria = document.getElementById("galeria");

let imagenElegida = null;

btnAgregar.onclick = function() {
    if (inputUrl.value === "") return;

    const nuevaFoto = document.createElement("img");
    nuevaFoto.src = inputUrl.value;

    nuevaFoto.onclick = function() {
        if (imagenElegida) {
            imagenElegida.classList.remove("seleccionada");
        }
        imagenElegida = nuevaFoto;
        imagenElegida.classList.add("seleccionada");
    };

    contenedorGaleria.appendChild(nuevaFoto);
    inputUrl.value = "";
};

btnEliminar.onclick = function() {
    if (imagenElegida) {
        imagenElegida.remove(); 
        imagenElegida = null;  
    }
};
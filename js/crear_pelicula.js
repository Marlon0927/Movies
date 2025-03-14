document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita el envío del formulario

    // Recoger los datos del formulario
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;
    const duracion = document.getElementById('duracion').value;

    // Crear un objeto de película
    const nuevaPelicula = {
        titulo: titulo,
        descripcion: descripcion,
        imagen: imagen,
        duracion: duracion
    };

});
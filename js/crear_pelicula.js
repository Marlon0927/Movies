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

        // Guardar la nueva película en el almacenamiento local
        let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
        peliculas.push(nuevaPelicula);
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
    
        // Mostrar una alerta de éxito
        alert("¡Película creada exitosamente!");
    
        // Redirigir al usuario a la página principal (index.html)
        window.location.href = 'index.html';

});
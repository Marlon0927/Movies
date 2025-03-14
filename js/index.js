window.onload = function() {
    // Obtener las películas almacenadas en localStorage
    const peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    const contenedorPeliculas = document.getElementById('peliculas-container');

    // Limpiar el contenedor antes de cargar las películas (en caso de que ya haya datos previos)
    contenedorPeliculas.innerHTML = '';

    // Recorrer las películas y crear recuadros para cada una
    peliculas.forEach(pelicula => {
        // Crear el div para cada recuadro
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        const recuadro = document.createElement('div');
        recuadro.classList.add('recuadro', 'border', 'p-3', 'mb-4');

        // Crear el contenido del recuadro
        const imagen = document.createElement('img');
        imagen.src = pelicula.imagen;
        imagen.alt = pelicula.titulo;
        imagen.classList.add('img-fluid');

        const titulo = document.createElement('h5');
        titulo.classList.add('titulo');
        titulo.textContent = `Título: ${pelicula.titulo}`;

        const descripcion = document.createElement('p');
        descripcion.classList.add('descripcion');
        descripcion.textContent = `Descripción: ${pelicula.descripcion}`;

        const duracion = document.createElement('p');
        duracion.classList.add('descripcion');
        duracion.textContent = `Duración: ${pelicula.duracion}`;

        // Agregar todo el contenido al recuadro
        recuadro.appendChild(imagen);
        recuadro.appendChild(titulo);
        recuadro.appendChild(descripcion);
        recuadro.appendChild(duracion);

        // Agregar el recuadro al contenedor
        col.appendChild(recuadro);
        contenedorPeliculas.appendChild(col);
    });
};

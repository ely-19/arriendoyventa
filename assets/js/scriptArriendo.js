import propArriendo from './arriendo.js';

const mostrarPropiedades = (prop, containerId) => {
  const container = document.getElementById(containerId); // Obtener el contenedor
  const propFiltrados = prop.slice(0, 6); // Filtrar las primeras 3 propiedades
  
  propFiltrados.forEach((prop) => { // Iterar sobre las propiedades
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4"; // Concatenación correcta de clases
    
    const cardContent = `
      <div class="card">
        <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad">
        <div class="card-body">
          <h5 class="card-title">${prop.nombre}</h5>
          <p class="card-text">${prop.descripcion}</p>
          <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
          <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
            <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class="${prop.pets ? 'text-success' : 'text-danger'}">
            <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      </div>
    `;
    
    // Añadir el contenido a la tarjeta
    card.innerHTML = cardContent;
    container.appendChild(card); // Añadir la tarjeta al contenedor
  });
};

// Llamar a la función para mostrar las propiedades
mostrarPropiedades(propArriendo, 'propiedadesEnArriendo');


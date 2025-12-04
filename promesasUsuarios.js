// Base de datos ficticia (array de objetos)
const usuarios = [
  { id: 1, nombre: "Patricia", correo: "paty@example.com" },
  { id: 2, nombre: "Juan", correo: "juan@example.com" },
  { id: 3, nombre: "Carla", correo: "carla@example.com" }
];

// Función que devuelve una promesa y busca el usuario por id
function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    console.log(`Buscando usuario con id: ${id}...`);

    // Simulamos un pequeño retardo como si fuera una BD real
    setTimeout(() => {
      const usuarioEncontrado = usuarios.find((u) => u.id === id);

      if (usuarioEncontrado) {
        resolve(usuarioEncontrado); // Promesa resuelta con los datos
      } else {
        reject(new Error(`No se encontró el usuario con id ${id}`)); // Promesa rechazada
      }
    }, 1000);
  });
}

// Función async/await que consume la promesa
async function mostrarUsuario(id) {
  try {
    const usuario = await buscarUsuarioPorId(id);
    console.log("✅ Usuario encontrado:", usuario);
  } catch (error) {
    console.error("❌ Error al buscar usuario:", error.message);
  }
}

// PRUEBAS
mostrarUsuario(1);   // Debería encontrar a Patricia
mostrarUsuario(3);   // Debería encontrar a Carla
mostrarUsuario(10);  // Debería lanzar error: no existe

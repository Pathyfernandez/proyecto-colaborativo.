/*

function validarUsuario(usuario) {
    
    // Validar nombre
    if (!usuario.nombre || usuario.nombre.trim() === "") {
        return { valido: false, mensaje: "El nombre no puede estar vacío." };
    }

    // Validar edad
    if (usuario.edad < 18) {
        return { valido: false, mensaje: "El usuario debe ser mayor o igual a 18 años." };
    }

    // Validar correo
    if (!usuario.correo.includes("@")) {
        return { valido: false, mensaje: "El correo debe contener el símbolo '@'." };
    }

    // Si todo es válido
    return { valido: true, mensaje: "Usuario válido." };
}


// =============================
// PRUEBAS DE LA FUNCIÓN
// =============================

const usuario1 = { nombre: "Patricia", edad: 28, correo: "paty@example.com" };
const usuario2 = { nombre: "", edad: 28, correo: "paty@example.com" };
const usuario3 = { nombre: "Juan", edad: 15, correo: "juan@gmail.com" };
const usuario4 = { nombre: "Carla", edad: 22, correo: "carlagmail.com" };

console.log("Prueba 1:", validarUsuario(usuario1));
console.log("Prueba 2:", validarUsuario(usuario2));
console.log("Prueba 3:", validarUsuario(usuario3));
console.log("Prueba 4:", validarUsuario(usuario4)); 
*/

function validarUsuario(usuario) {
    if (!usuario.nombre || usuario.nombre.trim() === "") {
        return { valido: false, mensaje: "El nombre no puede estar vacío." };
    }

    if (usuario.edad < 18) {
        return { valido: false, mensaje: "El usuario debe ser mayor o igual a 18 años." };
    }

    if (!usuario.correo.includes("@")) {
        return { valido: false, mensaje: "El correo debe contener el símbolo '@'." };
    }

    return { valido: true, mensaje: "Usuario válido." };
}


// ==========================
// TOMAR DATOS DESDE TERMINAL
// ==========================
// process.argv = ["node", "archivo.js", nombre, edad, correo]

const [ , , nombre, edad, correo ] = process.argv;

const usuario = {
    nombre,
    edad: Number(edad),
    correo
};

console.log("Entrada recibida:", usuario);
console.log("Resultado:", validarUsuario(usuario));


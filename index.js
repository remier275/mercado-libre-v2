const nombreInput = document.getElementById('nombre');
const errorNombre = document.getElementById('error-nombre');

nombreInput.addEventListener('input', () => {
    const nombre = nombreInput.value.trim();
    if (nombre.length === 1) {
        errorNombre.textContent = 'El nombre debe tener más de un carácter.';
    } else {
        errorNombre.textContent = '';
    }
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
    loadUser();
    loadInvestment();
});

const loadInvestment = () => {
    // Suponiendo que el token está disponible
    const token = AuthHelper.getToken(); // Reemplaza con tu método para obtener el token

    if (!token) {
        console.error('Token no encontrado. Asegúrate de estar autenticado.');
        alert('Debes iniciar sesión para acceder a esta información.');
    } else {
        fetch('https://backend.arkcode.io/investment/calculado', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Agregar el token al encabezado Authorization
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la red: respuesta no válida');
                }
                return response.json();
            })
            .then(({resumen, inversiones}) => {
                document.getElementById('balance-header').textContent = `$${(+resumen.montoTotalCon8).toFixed(2)}`;
            })
        }
}
const loadUser = () => {
    const user = AuthHelper.getPayload();
    if (user) {
        document.getElementById('user-name-header').innerText = user.nombre;
    }
}

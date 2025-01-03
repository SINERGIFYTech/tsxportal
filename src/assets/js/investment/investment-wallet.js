/*! investment-wallet.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    try {
        
        /* chart js areachart summary  */
        window.randomScalingFactor = function () {
            return Math.round(Math.random() * 20);
        }
        var areachartblue = document.getElementById('areachartblue1').getContext('2d');
        var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 300);
        gradientblue.addColorStop(0, 'rgba(0, 73, 232, 1)');
        gradientblue.addColorStop(1, 'rgba(0, 73, 232, 0)');
    
        var gradientred = areachartblue.createLinearGradient(0, 0, 0, 280);
        gradientred.addColorStop(0, 'rgba(0, 73, 232, 0.5)');
        gradientred.addColorStop(1, 'rgba(0, 73, 232, 0)');
        var myareachartblue = {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '12'],
                datasets: [{
                    label: '# of Votes',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
    
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
    
                    ],
                    radius: 0,
                    backgroundColor: gradientblue,
                    borderColor: '#015EC2',
                    borderWidth: 0,
                    borderRadius: 4,
                    fill: true,
                    tension: 0.5,
                }, {
                    label: '# of Votes',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
    
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    radius: 0,
                    backgroundColor: gradientred,
                    borderColor: '#015EC2',
                    borderWidth: 0,
                    borderRadius: 4,
                    fill: true,
                    tension: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true
                    },
                },
                scales: {
                    y: {
                        display: true,
                        beginAtZero: true,
                    },
                    x: {
                        display: true,
                    }
                }
            }
        }
        var myAreaChartblue1 = new Chart(areachartblue, myareachartblue);
        /* my area chart randomize */
        setInterval(function () {
            myareachartblue.data.datasets.forEach(function (dataset) {
                dataset.data = dataset.data.map(function () {
                    return randomScalingFactor();
                });
            });
            myAreaChartblue1.update();
        }, 3000);
    } catch (err) {
        console.log(err)
    }


    // obtener la data de las transacciones

    const getTransactions = () => {
        // Suponiendo que el token está disponible
        const token = AuthHelper.getToken(); // Reemplaza con tu método para obtener el token

        if (!token) {
            console.error('Token no encontrado. Asegúrate de estar autenticado.');
            alert('Debes iniciar sesión para acceder a esta información.');
        } else {
            fetch('https://liquidvault.sinergifyworld.com:3000/transactions/my', {
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
                .then(({transactions: data}) => {

                    if (data.length > 0) {
                        fillTransactions(data);
                        // Inicializar variables para sumatoria
                        let totalDepositos = 0;
                        let totalRetiros = 0;

                        // Iterar sobre las transacciones para calcular sumatorias
                        data.forEach(transaction => {
                            if (transaction.tipo === 'deposito') {
                                totalDepositos += transaction.monto;
                            } else if (transaction.tipo === 'retiro') {
                                totalRetiros += transaction.monto;
                            }
                        });
                        let balance = totalDepositos -totalRetiros;
                        // Mostrar resultados en pantalla
                        document.getElementById('total-depositos').textContent = `$${(+totalDepositos).toFixed(2)}`;
                        document.getElementById('total-retiros').textContent = `-$${(+totalRetiros).toFixed(2)}`;
                    } else {
                        console.log('No se encontraron transacciones.');
                        alert('No hay transacciones disponibles.');
                    }
                })
                .catch(error => console.error('Error:', error));
        }

    }

    const getInvestmentCalculated = () => {
        // Suponiendo que el token está disponible
        const token = AuthHelper.getToken(); // Reemplaza con tu método para obtener el token

        if (!token) {
            console.error('Token no encontrado. Asegúrate de estar autenticado.');
            alert('Debes iniciar sesión para acceder a esta información.');
        } else {
            fetch('https://liquidvault.sinergifyworld.com:3000/investment/calculado', {
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
                    console.log(resumen);
                    document.getElementById('total-balance').textContent = `$${(+resumen.montoTotalCon8).toFixed(2)}`;
                    document.getElementById('inversion5').textContent = `$${(+resumen.montoTotalCon5 - resumen.montoTotalInicial).toFixed(2)}`;
                    document.getElementById('inversion8').textContent = `$${(resumen.montoTotalCon8 - resumen.montoTotalCon5).toFixed(2)}`;
                })
                .catch(error => console.error('Error:', error));
        }

    }

    const fillTransactions = data => {
        const transaccionesList = document.getElementById('lista-transacciones');
        transaccionesList.innerHTML = ''; // Limpiar contenido previo
        data.forEach(transaction => {
            let listItem = '';
            if (transaction.tipo === 'deposito') {
                // Generar HTML para depósitos
                listItem = `
                <li class="list-group-item theme-green">
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1">
                                <i class="bi bi-arrow-up-right h5"></i>
                            </div>
                        </div>
                        <div class="col">
                            <p class="mb-1 fw-medium">Depósito</p>
                            <p class="text-secondary small">${new Date(transaction.fecha).toLocaleString()}</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ ${(transaction.monto / 1000).toFixed(2)}k</h6>
                        </div>
                    </div>
                    </li>`;
            } else if (transaction.tipo === 'retiro') {
                // Generar HTML para retiros
                listItem = `
                <li class="list-group-item">
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border">
                                <i class="bi bi-arrow-down-left h5"></i>
                            </div>
                        </div>
                        <div class="col">
                            <p class="mb-1 fw-medium">Retiro</p>
                            <p class="text-secondary small">${new Date(transaction.fecha).toLocaleString()}</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ ${(transaction.monto / 1000).toFixed(2)}k</h6>
                        </div>
                    </div>
                    </li>`;
            }
            // Agregar el elemento al contenedor
            transaccionesList.innerHTML += listItem;
        });
    }

    getTransactions();
    getInvestmentCalculated();
});
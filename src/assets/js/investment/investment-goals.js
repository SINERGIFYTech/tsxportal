/*! investment-goals.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    calcularInteresCompuesto();


});
const showGraph = (percentageValue) => {
    if ($('#circleprogressblue').length > 0) {
        $('#circleprogressblue').html('');
        var progressCirclesblue = new ProgressBar.Circle(circleprogressblue, {
            color: '#000000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(0, 73, 232, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#0049e8', width: 10 },
            to: { color: '#0049e8', width: 10 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + "<small>%<small>");
                }

            }
        });
        progressCirclesblue.text.style.fontSize = '24px';
        progressCirclesblue.animate(percentageValue);  // Number from 0.0 to 1.0
    }
}

const calcularInteresCompuesto = () =>  {
    // Captura los valores de los inputs
    const monto = parseFloat(document.getElementById('range1').value);
    const tasa = parseFloat(document.getElementById('range2').value) / 100; // Convertir a decimal
    const tiempo = parseInt(document.getElementById('range3').value);

    // Verifica que los valores sean válidos
    if (isNaN(monto) || isNaN(tasa) || isNaN(tiempo) || monto <= 0 || tasa <= 0 || tiempo <= 0) {
        alert('Por favor, introduce valores válidos mayores a 0.');
        return;
    }

    // Fórmula del interés compuesto: A = P(1 + r)^t
    const montoFinal = monto * Math.pow((1 + tasa), tiempo);
    const interesGanado = montoFinal - monto;

    // Muestra los resultados en los IDs correspondientes
    document.getElementById('resultadoMontoFinal').innerText = `$${montoFinal.toFixed(2)}`;
    document.getElementById('resultadoMontoInicial').innerText = `$${monto.toFixed(2)}`;
    document.getElementById('resultadoInteresGanado').innerText = `$${interesGanado.toFixed(2)}`;
    showGraph(interesGanado/montoFinal);  // Number from 0.0 to 1.0
}
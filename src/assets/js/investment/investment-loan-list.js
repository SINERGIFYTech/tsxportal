/*! investment-wallet.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    if ($('#areachartblue1').length > 0) {
        /* chart js areachart summary  */
        window.randomScalingFactor = function () {
            return Math.round(Math.random() * 20);
        }
        var areachartblue = document.getElementById('areachartblue1').getContext('2d');
        var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 300);
        gradientblue.addColorStop(0, 'rgba(0, 73, 232, 0.5)');
        gradientblue.addColorStop(1, 'rgba(0, 73, 232, 0)');

        var gradientred = areachartblue.createLinearGradient(0, 0, 0, 280);
        gradientred.addColorStop(0, 'rgba(200, 0, 54, 0.5)');
        gradientred.addColorStop(1, 'rgba(200, 0, 54, 0)');

        var gradientgreen = areachartblue.createLinearGradient(0, 0, 0, 280);
        gradientgreen.addColorStop(0, 'rgba(0, 186, 133, 0.85)');
        gradientgreen.addColorStop(1, 'rgba(0, 186, 133, 0)');

        var myareachartblue = {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '12'],
                datasets: [{
                    label: 'EMI',
                    data: [700, 1400, 2100, 2800, 3500, 4200, 4900],
                    radius: 2,
                    backgroundColor: gradientgreen,
                    borderColor: '#00a885',
                    borderWidth: 1,
                    borderRadius: 4,
                    fill: true,
                    tension: 0.5,
                }, {
                    label: 'Principal',
                    data: [10000, 9500, 9000, 8500, 8000, 7500, 7000, 6500, 6000, 5500, 5000, 40],
                    radius: 0,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: '#015EC2',
                    borderWidth: 1,
                    borderRadius: 4,
                    fill: true,
                    tension: 0.5,
                }, {
                    label: 'Interest',
                    data: [14000, 13400, 12800, 12200, 11600, 11000, 10400, 9800, 9200, 8600, 8000],
                    radius: 0,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: '#fc7a1e',
                    borderWidth: 1,
                    borderRadius: 4,
                    fill: true,
                    tension: 0.5,
                },]
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
        // setInterval(function () {
        //     myareachartblue.data.datasets.forEach(function (dataset) {
        //         dataset.data = dataset.data.map(function () {
        //             return randomScalingFactor();
        //         });
        //     });
        //     myAreaChartblue1.update();
        // }, 3000);
    }

    if ($('#circleprogressgreen1').length > 0) {

        /* circular progress */
        var progressCirclesgreen1 = new ProgressBar.Circle(circleprogressgreen1, {
            color: '#91C300',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: '#eaf4d8',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#91C300', width: 10 },
            to: { color: '#91C300', width: 10 },
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
        // progressCirclesgreen1.text.style.fontSize = '20px';
        progressCirclesgreen1.animate(0.08);  // Number from 0.0 to 1.0

    }

    if ($('#smartwizard').length > 0) {

        $('#smartwizard').smartWizard({
            theme: 'dots',
            toolbar: {
                extraHtml: '<a class="btn btn-theme finish-btn" style="display:none" href="investment-loan-request-success.html">Finish</a>' // Extra html to show on toolbar
            },
        });
        $("#smartwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
            if (stepPosition === 'last') {
                $(".finish-btn").show();
            } else {
                $(".finish-btn").hide();
            }
        });
    }


    if ($('#doughnutchart').length > 0) {
        /* doughnut chart js */
        var doughnutchart = document.getElementById('doughnutchart').getContext('2d');
        var doughnutdata = {
            labels: ['Principle', 'Interest'],
            datasets: [
                {
                    label: 'Principle and Interest',
                    data: [55, 45],
                    backgroundColor: ['#0049e8', '#cad8f8'],
                    borderWidth: 0,
                }
            ]
        };
        var mydoughnutchartCofig = {
            type: 'doughnut',
            data: doughnutdata,
            options: {
                responsive: true,
                cutout: 70,
                tooltips: {
                    position: 'nearest',
                    yAlign: 'bottom'
                },
                plugins: {
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    }
                },
                layout: {
                    padding: 0,
                },
            },
        };
        var mydoughnutchart = new Chart(doughnutchart, mydoughnutchartCofig);
    }
});
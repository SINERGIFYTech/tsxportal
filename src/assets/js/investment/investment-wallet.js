/*! investment-wallet.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
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
});
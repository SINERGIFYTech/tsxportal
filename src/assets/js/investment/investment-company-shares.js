/*! investment company shares .js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {

    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }
    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');
    var gradient2 = areachart2.createLinearGradient(0, 0, 0, 280);
    gradient2.addColorStop(0, 'rgba(0, 73, 232, 0.8)');
    gradient2.addColorStop(0.5, 'rgba(229, 10, 142, 0.5)');
    gradient2.addColorStop(1, 'rgba(252, 122, 30, 0)');
    var myareachartCofig2 = {
        type: 'line',
        data: {
            labels: ['10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
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
                ],
                radius: 0,
                backgroundColor: gradient2,
                borderColor: '#5840ef',
                borderWidth: 1,
                fill: true,
                tension: 0.5,
            }]
        },
        options: {
            animation: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: true,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: true
                    },
                    display: true,
                    beginAtZero: true,
                }
            }
        }
    }
    var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
    /* my area chart randomize */
    setInterval(function () {
        myareachartCofig2.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        myAreaChart2.update();
    }, 3000);

})
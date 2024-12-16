/*! investment dashboard.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {

    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }
    var areachartblue = document.getElementById('areachartblue1').getContext('2d');
    var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 110);
    gradientblue.addColorStop(0, 'rgba(0, 73, 232, 1)');
    gradientblue.addColorStop(1, 'rgba(0, 73, 232, 0)');
    var myareachartblue = {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
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
                    display: false,
                    beginAtZero: true,
                },
                x: {
                    display: false,
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


    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');
    var gradient2 = areachart2.createLinearGradient(0, 0, 0, 280);
    gradient2.addColorStop(0, 'rgba(0, 73, 232, 0.85)');
    gradient2.addColorStop(1, 'rgba(0, 73, 232, 0)');
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
                borderWidth: 2,
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


    /* doughnut chart js */
    var doughnutchart = document.getElementById('doughnutchart').getContext('2d');
    var doughnutdata = {
        labels: ['Daily Vages', 'Cancelled Bookings', 'Oxygen', 'Manpower', 'Medical Facilities'],
        datasets: [
            {
                label: 'Expense categories',
                data: [40, 35, 15, 25, 20],
                backgroundColor: ['#6faa00', '#ffc107', '#fd7e14', '#0049e8', '#becede'],
                borderWidth: 0,
            }
        ]
    };
    var mydoughnutchartCofig = {
        type: 'doughnut',
        data: doughnutdata,
        options: {
            responsive: true,
            cutout: 80,
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

})
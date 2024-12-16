/*! investment statistics.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {

    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }
    var areachartblue = document.getElementById('areachartblue1').getContext('2d');
    var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 65);
    gradientblue.addColorStop(0, 'rgba(0, 73, 232, 0.95)');
    gradientblue.addColorStop(1, 'rgba(0, 73, 232, 0)');
    var myareachartblue = {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '7', '8'],
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
                    enabled: false
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
    var myAreaChartblue = new Chart(areachartblue, myareachartblue);

    var areachartred = document.getElementById('areachartred1').getContext('2d');
    var gradientred = areachartred.createLinearGradient(0, 0, 0, 65);
    gradientred.addColorStop(0, 'rgba(200, 0, 54, 0.95)');
    gradientred.addColorStop(1, 'rgba(200, 0, 54, 0)');
    var myareachartredConfig = {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '7', '8'],
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
                backgroundColor: gradientred,
                borderColor: '#f03d4f',
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
                    enabled: false
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
    var myAreaChartred = new Chart(areachartred, myareachartredConfig);

    var areachartgreen = document.getElementById('areachartgreen1').getContext('2d');
    var gradientgreen = areachartgreen.createLinearGradient(0, 0, 0, 65);
    gradientgreen.addColorStop(0, 'rgba(8, 160, 70, 0.95)');
    gradientgreen.addColorStop(1, 'rgba(8, 160, 70, 0)');
    var myareachartgreenConfig = {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '7', '8'],
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
                backgroundColor: gradientgreen,
                borderColor: '#91C300',
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
                    enabled: false
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
    var myAreaChartgreen = new Chart(areachartgreen, myareachartgreenConfig);

    var areachartyellow = document.getElementById('areachartyellow1').getContext('2d');
    var gradientyellow = areachartyellow.createLinearGradient(0, 0, 0, 65);
    gradientyellow.addColorStop(0, 'rgba(252, 122, 30, 0.95)');
    gradientyellow.addColorStop(1, 'rgba(252, 122, 30, 0)');
    var myareachartyellowConfig = {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '7', '8'],
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
                backgroundColor: gradientyellow,
                borderColor: '#fdba00',
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
                    enabled: false
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
    var myAreaChartyellow = new Chart(areachartyellow, myareachartyellowConfig);


    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');
    var gradient2 = areachart2.createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'rgba(0, 73, 232, 0.95)');
    gradient2.addColorStop(1, 'rgba(0, 73, 232, 0.25)');
    var gradient1 = areachart2.createLinearGradient(0, 0, 0, 200);
    gradient1.addColorStop(0, 'rgba(0, 73, 232, 0.5)');
    gradient1.addColorStop(1, 'rgba(0, 73, 232, 0)');
    var myareachartCofig2 = {
        type: 'bar',
        data: {
            labels: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9', '8/9', '9/9', '10/9'],
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
                backgroundColor: gradient2,
                borderColor: '#0049e8',
                borderWidth: 1,
                fill: true,
            },
            {
                label: 'earning of Votes',
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
                backgroundColor: gradient1,
                borderColor: 'rgba(0, 73, 232, 0.5)',
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {
            maintainAspectRatio: false,
            barThickness: 16,
            borderRadius: 2,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false
                    },
                    display: true,
                    beginAtZero: true,
                }
            }
        }
    }
    var myAreaChart2 = new Chart(areachart2, myareachartCofig2);

    /* doughnut chart js */
    var doughnutchart = document.getElementById('doughnutchart').getContext('2d');
    var data = {
        labels: ['0-15', '16-30', '31-45', '46-60', '60+'],
        datasets: [
            {
                label: 'Age Range',
                data: [40, 10, 15, 25, 10],
                backgroundColor: ['#6faa00', '#ffc107', '#fd7e14', '#0049e8', '#becede'],
                borderWidth: 0,
            }
        ]
    };
    var mydoughnutchartCofig = {
        type: 'polarArea',
        data: data,

        options: {
            responsive: true,
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
                    text: 'Chart.js polarArea Chart'
                }
            }
        },
    };
    var mydoughnutchart = new Chart(doughnutchart, mydoughnutchartCofig);


    /* semi doughnut chart js */
    var semidoughnutchart = document.getElementById('semidoughnutchart').getContext('2d');
    var semidata = {
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
    var mysemidoughnutchartCofig = {
        type: 'doughnut',
        data: semidata,
        options: {
            circumference: 180,
            rotation: -90,
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
    var mysemidoughnutchart = new Chart(semidoughnutchart, mysemidoughnutchartCofig);

    /* swiper no nav */
    const swiper = new Swiper('.swipernonav', {
        slidesPerView: "auto",
        spaceBetween: 16,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });



})

window.addEventListener('resize', function () {
    /* resize */
    var table = $('.table').DataTable();
    table.columns.adjust().draw();
    lastvisibletd();

});


/* responsive last visible table cell after cell hides*/
function lastvisibletd() {
    $('.table tbody tr td').removeClass('lastvisible');
    $('.table tbody tr').each(function () {
        var thisis = $(this);
        thisis.find('td:visible:last').addClass('lastvisible');
    })
}

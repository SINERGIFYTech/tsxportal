/*! investment-goals.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    if ($('#circleprogressgreen1').length > 0) {
        /* circular progress */
        var progressCirclesgreen1 = new ProgressBar.Circle(circleprogressgreen1, {
            color: '#000000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(126, 170, 0, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#6faa00', width: 10 },
            to: { color: '#6faa00', width: 10 },
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
        progressCirclesgreen1.text.style.fontSize = '24px';
        progressCirclesgreen1.animate(0.10);  // Number from 0.0 to 1.0
    }
    if ($('#circleprogressblue2').length > 0) {
        /* circular progress */
        var progressCirclesblue2 = new ProgressBar.Circle(circleprogressblue2, {
            color: '#FFFFFF',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(255, 255, 255, 0.2)',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#FFFFFF', width: 10 },
            to: { color: '#FFFFFF', width: 10 },
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
        progressCirclesblue2.text.style.fontSize = '24px';
        progressCirclesblue2.animate(0.50);  // Number from 0.0 to 1.0
    }
    if ($('#circleprogressblue').length > 0) {
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
        progressCirclesblue.animate(0.75);  // Number from 0.0 to 1.0
    }
    if ($('#circleprogressblue1').length > 0) {
        var progressCirclesblue1 = new ProgressBar.Circle(circleprogressblue1, {
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
        progressCirclesblue1.text.style.fontSize = '24px';
        progressCirclesblue1.animate(0.85);  // Number from 0.0 to 1.0
    }
    if ($('#circleprogressblue3').length > 0) {
        var progressCirclesblue3 = new ProgressBar.Circle(circleprogressblue3, {
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
        progressCirclesblue3.text.style.fontSize = '24px';
        progressCirclesblue3.animate(0.65);  // Number from 0.0 to 1.0
    }
});
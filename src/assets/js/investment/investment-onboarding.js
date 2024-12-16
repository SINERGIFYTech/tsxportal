/*! investment onboarding.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    $('body').addClass('sidebar-close');

    $('#smartwizard').smartWizard({
        theme: 'dots',
        toolbar: {
            extraHtml: '<a class="btn btn-outline-accent float-start" href="investment-dashboard.html">Skip</a><a class="btn btn-theme finish-btn" style="display:none" href="investment-dashboard.html">Finish</a>' // Extra html to show on toolbar
        },
    });
    $("#smartwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
        if (stepPosition === 'last') {
            $(".finish-btn").show();
        } else {
            $(".finish-btn").hide();
        }
    });

});
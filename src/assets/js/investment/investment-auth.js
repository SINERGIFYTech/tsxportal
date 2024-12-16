/*! investment auth.js | Adminuiux 2023-2024 */

/* ==========================================================================
Auth pages js
========================================================================== */

"use strict";

document.addEventListener('DOMContentLoaded', function () {

    // main links active 
    setActivelink();

    // set header space 
    fixedHeaderSpace()

    // auto theme mode
    //autoThemeMode();

    //feature icons 
    featherjs();

    // cover img background set
    coverimg();

    // don't close dropdown
    dontclosedd()

    // check strength password 
    checkstrength();

    // bs tooltip 
    bstooltip();

    //swiper carousel
    swipernavpagination();

    // hide page loader 
    PageLoaderHide()
});
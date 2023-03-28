"use strict";

/*
    File:   einstein.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   3/22/2019
    Purpose: 
*/

$(function() {
    let einsteinImage = $("#einstein");

    $("#hide").on("click", () => einsteinImage.hide("fast") );

    $("#show").on("click", () => einsteinImage.show("slow") );

    $("#toggle").on("click", () => einsteinImage.toggle(1000) );

    $("#fadeout").on("click", () => einsteinImage.fadeOut() );

    $("#fadein").on("click", () => einsteinImage.fadeIn() );

    $("#slideup").on("click", () => $("h1").slideUp("slow") );

    $("#slidedown").on("click", () => $("h1").slideDown("fast") );

    $("#slidetoggle").on("click", () => $("h1:first").slideToggle() );

    einsteinImage.on("mouseover", function() {
        $(this).fadeOut(5000)
    });
});
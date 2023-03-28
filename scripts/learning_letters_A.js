"use strict";

/*
    File:   learning_letters_A.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   3/22/2019
    Purpose: 
*/

$(document).ready(function() {
    /* step 2 from the instructions */
    console.log("Number of elements with the class target:" + $(".target").length);

    /* step 3 from the instructions */
    $("#choices").on("click", function() {
        $(this).hide();

        /* step 6 from the instructions */
        $("span", "#displayChoices").text("+");
    });

    $("#displayChoices").on("click", function() {
        /* steps 4 and 5 from the instructions */
        $("#choices").toggle();

        /* step 6 from the instructions */
        if ($("span", "#displayChoices").text() === "-") {
            $("span", "#displayChoices").text("+");
        } else {
            $("span", "#displayChoices").text("-")
        }
    });

    /* step 7 from the instructions */
    $("header", "#game").on("click", function() {
        $(this).slideUp(1000);
    });

    /* step 8 from the instructions */
    $(".target").hover(function() {
        $(this).css("background-color", "lightgreen");
    }, function() {
        $(this).css("background-color", "");
    });

    /* step 9 from the instructions */
    $(".target").on("click", function() {
        $(this).text("\u2714").addClass("selected").fadeOut("slow");
        $("header", "#game").slideUp(1000); /* step 10 from the instructions */

        /* step 11 from the instructions */
        if ($(".target").length === $(".selected").length - 1) {
            $("#symbols").slideUp();
            $("#done").slideDown(1000);
        }
    });

    /* step 12 from the instructions */
    $("#done").on("click", function() {
        $(".target").text("A").removeClass("selected").show();
        $(this).hide();
        //$("#choices").show();
        //$("span", "#displayChoices").text("-");
        $("#symbols").show();
        $("header", "#game").show();
    });
});
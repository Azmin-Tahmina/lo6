"use strict";

/*
    File:   jqueryevents.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   3/19/2019
    Purpose: 
*/

let face = new Image();
face.src = "media/HappyFaceSmile.jpg";

$(document).ready(function() {
    $("#italic").click(function() {
        if ($(this).text() === "Italic") {
            $("p").addClass("special");
            $(this).html("<strong>Un</strong>Italic");
        } else {
            $("p").removeClass("special");
            $(this).html("Italic");
        }
    });

    $("#bold").click(function() {
        $("p").addClass("bold");
    });

    $("#undecorate").click(function() {
        $("p").removeClass("special bold");
    });

    $("#firstPara").mouseover(function() {
        $(this).addClass("green");
    });

    $("#firstPara").mouseout(function() {
        $(this).removeClass("green");
    });

    $("#secondPara").hover(function() {
        $(this).addClass("green");
    }, function() {
        $(this).removeClass("green");
    });

    $("#firstPara").on("click", function() {
        $(this).addClass("invisible");
        $("#secondPara").removeClass("invisible");
    });

    $("#secondPara").on("click", function() {
        $(this).addClass("invisible");
        $("#firstPara").removeClass("invisible");
    });

    $("#myNewButton").on("click", function() {
        $("#firstPara").off();
        $(this).val("Done").attr("disabled", true);
    });

    $("#happy").hover(function() {
        $(this).attr("src", "media/HappyFaceSmile.jpg").attr("alt", "Happy Face");
    }, function() {
        $(this).attr("src", "media/HappyFaceNoSmile.jpg").attr("alt", "Apathetic Face");
    });
});

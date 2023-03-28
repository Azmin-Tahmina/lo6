"use strict";

/*
    File:   menu.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   3/26/2019
    Purpose: Create menu bar with effects
*/

$(document).ready(function() {
    $("#menubar > li").hover(
        function() {
            // code to cause menu to appear
            $("ul", this).show(200);
        },
        function() {
            // code to cause menu to disappear
            $(this).find("ul").hide(200);
        }
    );
});

/* add code here  */
$(document).ready(function() {

    //Add class "highlight" for all input type elements

    $("input").focus(function() {

        $(this).addClass("highlight");

    });

    // Remove Class on Blur

    $("input").blur(function() {

        $(this).removeClass("highlight");

    });

    // Form Submission event

    $('#mainForm').submit(function(e) {

        e.preventDefault(); //preventing default submit

        var title = $("#title").val(); //getting title

        var description = $("#description").val(); //description

        var year = $("#year").val(); //year

        // Check the value of Title

        if (title == "") {

            // If value is not provided, activate error class

            $("#title").addClass("error");

        }

        // Check value of Description
        if (description == "") {

            // if value is not provided, activate error class

            $("#description").addClass("error");

        }

        // Check value of Year
        if (year == "") {

            //if value is not provided, activate error class

            $("#year").addClass("error");

        }

    });

});
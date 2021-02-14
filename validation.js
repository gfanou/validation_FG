$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,
                    min:5,
                    max:8,
                    digits:true
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Please enter your first name",
                },
            grade:
                {
                    required: "Don't leave this blank !",
                    min:"Must be at least in grade 5",
                    max: "Maximum grade is 8",
                    digits:" only whole numbers are required"
                },
        };

    function  runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.

        var name = $("#firstName").val();
        var myGrade = $("#grade").val();
        $("#message").text(`Hey ${name} ! You have registered for grade ${myGrade}`);
    }



    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

});
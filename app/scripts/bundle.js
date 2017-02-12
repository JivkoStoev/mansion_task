'use strict';


$(document).ready(function() {
    console.log('ready');
    $('#bonus-code-checkbox').click(function() {
        $('#bonus-code').toggle();
    })



    $('#reg-form').validate({
        rules: {
            inputFirstName: "required",
        },
        messages: {
            inputFirstName: "Please enter your firstname",
        }
    })
});
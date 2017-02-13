'use strict';


$(document).ready(function() {
    console.log('ready');
    $('#bonus-code-checkbox').click(function() {
        $('#bonus-code').toggle();
    });

    $('#step_one_btn').click(function(){
        
        var asd = $('#reg-form').valid();
        if ($('#reg-form').valid()){
           $('#modalStep2').modal('show');
        }
    });

    $('#step_3_btn').click(function(){
        $('#modalStep4').modal('show');
    });

    $('#show_step_3').click(function(){
        $('#step_3').show();
        $('#step_one_btn').hide();
        $('#modalStep2').modal('hide');
    });

    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/i.test(value);
    }, 'Please enter alphanumeric'); 

    

    $('#reg-form').validate({
        rules: {
            inputFirstName: "required",
            inputUserName: {
                required:true,
                minlength: 4,
                maxlength: 12   
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputPassword: {
                required:true,
                minlength: 6,
                maxlength: 12
            },
            agree: "required"
        },
        messages: {
            // inputFirstName: "Please enter your firstname",
            // inputUserName: "Please enter your User Name",
            // inputEmail: "Please enter your email",
            // inputPassword: "Please enter your password"
        }
    })
});
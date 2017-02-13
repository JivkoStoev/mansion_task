'use strict';

$(document).ready(function() {
    function detectmob() {
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        } else {
            return false;
        }
    }


    var userId;

    $('#bonus-code-checkbox').click(function() {
        $('#bonus-code').toggle();
    });

    $('#step_one_btn').click(function() {
        if ($('#reg-form').valid()) {

            var formData = $('#reg-form').serialize();
            //fake submit form
            setTimeout(function(formData) {
                userId = 21312;
                $('#modalStep2').modal('show');
            }, 500);

        }
    });

    $('#step_3_btn').click(function() {
        if ($('#user-info-form').valid()) {

            var formData = $('#user-info-form').serialize();
            //fake submit form
            if (userId) {
                setTimeout(function() {
                    console.log('make request to api with user id= ' + userId + ' &data = ' + formData);
                }, 500);
            }
            $('#modalStep4').modal('show');
        }
    });

    $('#show_step_3').click(function() {
        $('#reg-form').hide();
        $('#user-info-form').fadeIn();
        $('#modalStep2').modal('hide');
    });

    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/i.test(value);
    }, 'Please enter alphanumeric');

    $('#reg-form').validate({
        rules: {
            inputFirstName: "required",
            inputUserName: {
                required: true,
                minlength: 4,
                maxlength: 12
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputPassword: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            agree: "required"
        }
    });

    $('#user-info-form').validate({
        rules: {
            inputAddress1: {
                required: true,
                minlength: 4
            },
            inputAddress2: {
                minlength: 4
            },
            inputCity: {
                required: true
            },
            inputPostalCode: {
                required: true,
                number: true
            },
            inputPhone: {
                required: true,
                number: true
            }
        }
    });
});
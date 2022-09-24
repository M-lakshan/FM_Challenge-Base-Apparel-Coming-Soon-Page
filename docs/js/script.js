let elm_body = document.querySelector('body');
let elm_main = document.querySelector('main');
let elm_form = document.querySelector('form');
let elm_error = document.querySelector('.errors');
let submit_btn = document.getElementById('submit_btn');
let input_user_email = document.getElementById('subsc_email');
let user_email_error = document.querySelector('.subsc_email_error');

// keyup eventlistner for email input
input_user_email.addEventListener('keyup', error_check);

// form validation event for submit btn
submit_btn.addEventListener('click', function(e) {
    e.preventDefault();
    error_check();
});

function error_check() {

    if(input_user_email.value == '') {
        user_email_error.parentElement.children[0].innerHTML = "Email Address cannot be empty";
        user_email_error.parentElement.classList.add('active');
        input_user_email.classList.add('sts_error_emptyfield');
        input_user_email.value = "";
        input_user_email.classList.add('sts_error');
    }
    else {
        if(input_user_email.value.length <=12) {
            user_email_error.parentElement.children[0].innerHTML = "Looks like this is not an email";
            user_email_error.parentElement.classList.add('active');
            input_user_email.classList.add('sts_error');
            input_user_email.classList.add('pending_error');
            input_user_email.classList.remove('sts_error_emptyfield');
        }
        else if(input_user_email.value.length >=12) {
            let uem_char_set = input_user_email.value.length - 1;
            let provided_string = input_user_email.value;
            input_user_email.classList.remove('sts_error_emptyfield');

            if((provided_string.includes(".")) && !(provided_string.indexOf('.') >= (provided_string.length-3))) {

                while(uem_char_set >= 0) {
                    if(input_user_email.value.charCodeAt(uem_char_set) >= 46 && input_user_email.value.charCodeAt(uem_char_set) <= 122) {
                        if(input_user_email.value.charCodeAt(uem_char_set) >= 58 && input_user_email.value.charCodeAt(uem_char_set) <= 63) {
                            user_email_error.parentElement.children[0].innerHTML = "Provide a valid email address";
                            user_email_error.parentElement.classList.add('active');
                            input_user_email.classList.add('sts_error');
                            input_user_email.classList.add('pending_error');
                            break;
                        }
                        else {
                            user_email_error.parentElement.classList.remove('active');
                            input_user_email.classList.remove('sts_error');
                            input_user_email.classList.remove('pending_error');
                        }
                    }
                    else {
                        user_email_error.parentElement.children[0].innerHTML = "Provide a valid email address";
                        user_email_error.parentElement.classList.add('active');
                        input_user_email.classList.add('sts_error');
                        input_user_email.classList.add('pending_error');
                        break;
                    }
                    uem_char_set--;
                }
            }
            else {
                user_email_error.parentElement.children[0].innerHTML = "Provide the email domain ending correctly";
                user_email_error.parentElement.classList.add('active');
                input_user_email.classList.add('sts_error');
                input_user_email.classList.add('pending_error');
            }
        }
        else {
            user_email_error.parentElement.children[0].innerHTML = "Provide a valid email address";
            user_email_error.parentElement.classList.add('active');
            input_user_email.classList.add('sts_error');
            input_user_email.classList.remove('sts_error_emptyfield');
        }
    }

    if(elm_error.classList.contains('active')) {
        if(!elm_form.classList.contains(".error_triggered")) {
            elm_form.classList.add("error_triggered");
        }
    }
    else {
        if(!elm_form.classList.length>=2) {
            elm_form.classList.remove("error_triggered");
        }
    }
}

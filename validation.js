 //onsubmit; //capture submit event and validate the whole form
//make sure you prevent the default event as well as event bubbling
//you can check whether a form is 'valid' by using the DOM function
//form.checkValiditiy() //this returns false if any input is invalid

//onChange; //for a given element, as the person exits the field
//validate the element and display a custom message
//if the field is invalid, make boarders of field
//green if they are valid



//you must validate the form manually, this can be done
//with javascript, you have to use at least one regular
//expression (regex) when doing this

//when setting an input as valid or invalid use this
//DOM function
//el.setCustomValidity("")
//and this one for invalid
//el.setCustomValidity('Field is invalid because...')

//after submit button is clicked, validation is performed
// on the whole form. If the form is valid, display a 
//thank you message.
//If the form is invalid, mark the fields that are invalid
//using and show the error message below the field just like
//the error message from onChange
//also have an error message at the top of the page
//appear if the form is invalid saying, "The form has erros with the following fields," and the list the fieds
//"Please fix them and re-submit."



/*Your "initValidation" function should: Set up validation event callbacks
    onSubmit - Capture submit event and validate the whole form.
Make sure you prevent the default event as well as event bubbling
You can check whether a form is 'valid' you may use the DOM function
form.checkValidity()   //returns false if any input is invalid
    onChange - for a given element, as the person exits the field,  
validate the element and display a custom message.
*/

var formIsValid;

function initValidation(formName) {
    let $form = $(formName);

    $('.phone').mask('(000) 000-000');

    $(':input').change(function (ev) {
        validateInput('#' + this.id);
    });

    $form.submit(function (event) {

        validateForm();

        if (formIsValid === false) {
            event.preventDefault(); //prevent default browser submit
            event.stopPropagation(); //this stops event bubbling
            alert("The form has erros with the following fields, Please fix them and re-submit.");
        }
        else {
            event.preventDefault();
            alert("Thank you");
            var first = document.getElementById("first-name").value;
            var last = document.getElementById("last-name").value;
            var theirAddress = document.getElementById("address").value;
            var theirCity = document.getElementById("city").value;
            var theirState = document.getElementById("state").value;
            var theirZip = document.getElementById("zip").value;
            var theirPhone = document.getElementById("phone").value;
            var theirEmail = document.getElementById("email-req").value;

            saveVisitor(first, last, theirAddress, theirCity, theirState, theirZip, theirPhone, theirEmail);

            $form.get(0).reset();
        }

    });
}


function validateInput(inputSel) {
    $el = $(inputSel);
    checkRequired(inputSel, "This field is Required");
}

function validateForm() {
    checkRequired("#first-name", "First Name is Required");
    checkRequired("#last-name", "Last Name is Required");
    checkRequired("#address", "Address is Required");
    checkRequired("#city", "City is Required");
    checkRequired("#state", "State is Required");
    checkRequired("#phone", "Phone number is Required");
    checkRequired("#email-req", "Email is Required");
    checkRequired("#found3", "Please pick one");
    checkRequired("#rating3", "Please pick one");
}


function checkRequired(fieldName, message) {
    var $el = $(fieldName);
    let valid = false;
    switch ($el.attr('type')) {
        case 'text':
            valid = ($el.val().length > 0);
            break;

        case 'tel':
            valid = $.isNumeric($el.val());
            break;

        case 'email':
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
            if (pattern.test($el.val()) && $el.val() !== '') {
                valid = true;
            }
            else {
                valid = false;
            }
            break;

        case 'radio':
            switch ($el.attr('name')) {
                case 'found':
                    var selectedRadio = $("input[name='found']:checked").val();
                    if (selectedRadio) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                    break;

                case 'rate':
                    var selectedRadio = $("input[name='rate']:checked").val();
                    if (selectedRadio) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                    break;
            }
    }
    setElementValidity(fieldName, valid, message);
    return valid;
}

function formValidated() {
    let $form = $(".needs-validation");
    $form.addClass("was-validated");
}

function setElementValidity(fieldName, valid, message) {
    let $form = $("myForm");

    let $field = $(fieldName);
    let $el = $field.get(0);

    if (valid) {
        $el.setCustomValidity(''); //sets to no error message and field is valid
        if (formIsValid === false) {
        }
        else {
            formIsValid = true;
        }
    }
    else {
        $el.setCustomValidity(message); //sets error message
        formIsValid = false;
    }
    $(fieldName + "+div").html($el.validationMessage);
}








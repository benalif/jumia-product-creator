const username = document.querySelector('.text-username');
const errorLabel = document.querySelector('.invalid-message');
const submit = document.querySelector('.send-pin');

username.addEventListener("keyup", function () {
    console.log(username.value);
    if (username.value == "") {
        error.innerText = "";
    }
    ;
});

function checkMsisdn() {
    var val = username.value;
    if (val.length < 10 && val.length != 0) {
        errorLabel.innerText = "username too short"
    } else if (!(/^05[0-9]{8}$/).test(val) && val.length != 0) {
        error.innerText = "invalid username"
    }

}

function usernameValidation() {
    var val = username.value;
    if (val.length < 10 && val.length != 0) {
        errorLabel.innerText = "username too short"
        event.preventDefault();
    } else if (!(/^05[0-9]{8}$/).test(val) && val.length != 0) {

        errorLabel.innerText = "invalid username"
        event.preventDefault();
    }
}
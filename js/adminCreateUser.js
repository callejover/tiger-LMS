


// =================================================================================

//On submit button, changes the modals inner HTML

let fullNameCreate = document.querySelector("#account-name input");
let createdUserMassage = document.querySelector(".createdUserMassage");
let accountResponse = document.querySelector("#accountResponse");

let accountEmail = document.querySelector("#account-email input");
let accountUsername = document.querySelector("#account-username input");
let accountPassword = document.querySelector("#account-password input");

accountResponse.addEventListener("click", function (event) {

    event.preventDefault();

    if (fullNameCreate.value == "") {
        createdUserMassage.innerHTML = "Skriv in namn";
    } else if (accountEmail.value == "") {
        createdUserMassage.innerHTML = "Skriv in e-post";
    } else if (accountUsername.value == "") {
        createdUserMassage.innerHTML = "Skriv in användarnamn";
    } else if (accountPassword.value == "") {
        createdUserMassage.innerHTML = "Skriv in lösenord";
    } else {
        createdUserMassage.innerHTML = "<h3>En ny användare har skapats!</h3><br><p>Ett mail med bekräftelsekod har skickats till den nya användarens e-postadress.</p>";

        fullNameCreate.value = "";
        accountEmail.value = "";
        accountUsername.value = "";
        accountPassword.value = "";

        setTimeout(function () {
            createdUserMassage.innerHTML = "";
        }, 2000);
    }
});
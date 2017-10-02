let usersObject = {
    usersArray: [
        student = [
            username = "student",
            password = "123"
        ],
        teacher = [
            username = "teacher",
            password = "123"
        ],
        admin = [
            username = "admin",
            password = "123"
        ]
    ],
    validateForm: function () {

            let usernameValue = document.forms["signIn"]["username"].value;
            let passwordValue = document.forms["signIn"]["password"].value;

            this.usersArray.forEach(function(element) {
                if (usernameValue == "" || passwordValue == "") {
                    alert("Du måste fylla i användarnamn och lösenord!");
                    // valid = false;
                    // break;
                } else if (usernameValue ==  element[0] && passwordValue == element[1]) {
                    alert("Rätt användarnamn och lösenord");
                    // valid = true;
                    // break;
                } else if (usernameValue != element[0] && passwordValue != element[1]) {
                    alert("Antigen var användarnamnet eller lösenordet fel! Försök igen!");
                    // valid = false;
                    // break;
                }

            }, this);
        }
};

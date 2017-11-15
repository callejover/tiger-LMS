// For the modal
var assignmentModal = document.querySelector("#assignmentModal"); // Get the modal
var assignmentButton = document.querySelectorAll(".assignmentButton"); // Get the button that opens the modal
var assignmentClose = document.querySelector(".assignmentClose"); // Get the <span> element that closes the modal

var assignmentFeedbackModal = document.querySelector("#assignmentFeedbackModal"); // Get the modal
var assignmentFeedbackButton = document.querySelectorAll(".assignmentFeedbackButton"); // Get the button that opens the modal
var assignmentFeedbackClose = document.querySelector(".assignmentFeedbackClose"); // Get the <span> element that closes the modal


// For the code validaiton
var assignmentHeader = document.querySelector(".headerAssignment");

// Validation for setting a grade on assignment
function gradeApproved() {

    let gradeSelectList = document.querySelector("#grade").value;
    let assignmentApprovalContent = document.querySelector(".assignmentApprovalContent");
    // let courseList = document.querySelector("#courseList");
    // let studentName = document.querySelector("#studentList");
    // let assignment = document.querySelector("#assignmentList");

    if (gradeSelectList == "") {
        document.querySelector(".gradeSelectListMessage").innerHTML = "Du måste välja ett betyg!";
        return false;
    } else {
        assignmentApprovalContent.innerHTML = "";
        assignmentApprovalContent.innerHTML = "<h4 class=\"assignmentApprovalContentText\">Du har givit eleven betyget <strong>" + gradeSelectList + "</strong>";
        assignmentApprovalContent.style.textAlign = "center";
        setTimeout("pageSwap()", 3000);
        return true;
    }
}

// Validation for Feedback on assignment
function assignmentFeedback() {

    let assignmentFeedbackTextarea = document.querySelector("#assignmentFeedbackTextarea").value;

    let assignmentFeedbackTextareaMessage = document.querySelector(".assignmentFeedbackTextareaMessage");

    if (assignmentFeedbackTextarea == "") {
        assignmentFeedbackTextareaMessage.innerHTML = "Du måste fylla i rutan ovan";
        return false;
    } else {
        assignmentFeedbackTextareaMessage.innerHTML = "Feedback har skickats";
    }

}

// Opens modal window to assignment
// When the user clicks on the button, open the modal
for (i = 0; i < assignmentButton.length; i++) {
    assignmentButton[i].onclick = function () {
        assignmentModal.style.display = "block";
    };
}

// When the user clicks on <span> (x), close the modal
assignmentClose.onclick = function () {
    assignmentModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
/// Gets called in attendance.js
function windowCloseAssignmentModal() {
    if (event.target === assignmentModal) {
        assignmentModal.style.display = "none";
        if (assignmentInput.value != "") {
            pageSwap();
        }
    }
}



        // Opens modal window to assignment
        // When the user clicks on the button, open the modal
        for (i = 0; i < assignmentFeedbackButton.length; i++) {
            assignmentFeedbackButton[i].onclick = function () {
                assignmentFeedbackModal.style.display = "block";
            };
        }

        // When the user clicks on <span> (x), close the modal
        assignmentFeedbackClose.onclick = function () {
            assignmentFeedbackModal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        /// Gets called in attendance.js
        function windowCloseAssignmentFeedbackModal() {
            if (event.target === assignmentFeedbackModal) {
                assignmentFeedbackModal.style.display = "none";
                if (assignmentInput.value != "") {
                    pageSwap();
                }
            }
        }


            // var feedbackShowHideContent = document.getElementById("feedbackShowHideContent");
            // var showHideFeedbackButton = document.getElementById("showHideFeedbackButton");
            // var feedbackShowHideContentMargin = document.getElementById("feedbackShowHideContentMargin");

            // function showHideFeedback() {

            //     if (feedbackShowHideContent.style.display == "block") {
            //         feedbackShowHideContent.style.display = "none";
            //         showHideFeedbackButton.innerHTML = "Visa feedback";
            //         feedbackShowHideContentMargin.style.height = "auto";
            //     } else {
            //         feedbackShowHideContent.style.display = "block";
            //         showHideFeedbackButton.innerHTML = "Dölj feedback";
            //         feedbackShowHideContentMargin.style.height = 10 + "em";
            //     }
            // }




// Redirects to same page when added grade
function pageSwap() {
    window.location.replace("../teacher/assignmentApproval.html");

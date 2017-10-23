// Validation for setting a grade on assignment
function gradeApproved() {

    let gradeSelectList = document.querySelector("#grade").value;
    let assignmentApprovalContent = document.querySelector(".assignmentApprovalContent");
    let courseList = document.querySelector("#courseList");
    let studentName = document.querySelector("#studentList");
    let assignment = document.querySelector("#assignmentList");

    if (gradeSelectList == "") {
        document.querySelector(".gradeSelectListMessage").innerHTML = "Du måste välja ett betyg!";
        return false;
    } else {
        assignmentApprovalContent.innerHTML = "";
        assignmentApprovalContent.innerHTML = "<h4 class=\"assignmentApprovalContentText\">Betyget <strong>" + gradeSelectList + "</strong> är satt för eleven <strong>" + studentName.options[studentName.selectedIndex].text + "</strong> och uppgift <strong>" + assignment.options[assignment.selectedIndex].text + "</strong> för kursen <strong>" + courseList.options[courseList.selectedIndex].text + "</strong></h4>";
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
        assignmentFeedbackTextareaMessage.innerHTML = "Du måste fylla i rutan ovan.";
        return false;
    } else {
        assignmentFeedbackTextareaMessage.innerHTML = "Tack: Datan är registrerad";
    }

}

// Redirects to same page when added grade
function pageSwap() {
    window.location.replace("../html/assignmentApproval.html");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === attendanceModal) {
        attendanceModal.style.display = "none";
    }
    windowCloseAssignmentModal();
    // closeAttendanceOverview();
    windowCloseAssignmentFeedbackModal();

    //closeModuleTeacher();
    closeNewsModal();
};
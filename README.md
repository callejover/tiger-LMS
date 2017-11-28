
# TIGER-LMS
Tiger-LMS is a simple to use Learning Management System for students and staff.

# USERNAMES AND PASSWORDS
1. Accounts.
    - username: student
    - password: student
    --------------------
    - username: teacher
    - password: teacher
    --------------------
    - username: admin
    - password: admin

2. Student Attendance Code
    - 1111


# CODE LAYOUT
1. html: Contains all html pages on the repository.
    - student: Contains the html used when you´ve logged in as a student.
    - teacher: Contains the html used when you´ve logged in as a teacher.
    - admin: Contains the html used when you´ve logged in as an administrator.
    - includes: Contains seperate html for edit feedback in admin. 
    - mocup: Contains mocup ideas for page

2. css: Contains all css files on the repository.
    - reset.css: Resets default values to null.
    - main.css: This CSS is used for the basic layout of the websites reccurent pages.
    - brandingKYH.css: Special CSS that changes the colors of the page to fit KYHs branding.
    - mediaq.css: Contains the special mediaquery widths.
    - Other CSS files are custom for its own html page.

3. js: Contains all javascript files on the repository.
    - addNewEducation.js: Creates a new education.
    - adminCreateClass.js: Creates a new class.
    - adminCreateUser.js: Creates a new user.
    - adminEditFeedback.js: Creates and removes forms in the feedback editor page.
    - attendance.js: Checks if the students attendance code is valid and gives a response.
    - currentDotsNav.js: Makes sure that the navigaton dots is hightlighted at the correct position of the page.
    - divideIntoGroups.js: Allows the teacher to randomize groups of students.
    - dragAndDrop.js: Drags students to correct groups.
    - jquery.ScrollDots.js: Animation for scroll.
    - login.js: Checks and allows access from accouts to log in.
    - navMenu.js: All javascript for the nav menu.
    - slider.js: Script for slider used at feedback pages.
    - studentAssignment.js: Allows student to turn in an assignment.
    - studentDailyFeedback.js: Script for smiley faces.
    - studentFeedback.js: Response script to feedback pages.
    - teacherAssignment.js: Allows the teacher to create assignments.
    - teacherAssignmentApproval.js: Allows the teacher to view the students work and give a response.
    - teacherAttendanceCode.js: Allows the teacher to create a random attendance code.
    - teacherAttendanceOverview.js: Contains all students attendance.
    - teacherFeedback.js: Contains the google charts.
    - modals.js: Script for all modals.
    - w3-include-html.js: Combines two html pages to one.

4. documents: Contains all doucuments to be used on the repository.

5. img: Contains the images of the website.


# REMEMBER
1. Check all pages that all functionality is working. If not, take working page and copy it to the non working page and put the important content in for simple fix

# Rules:
1. Always insert a comment at the end tag with the name of the start tag same with {}. example end-div-tag html-comment
2. Use br-tag in p-tag for good practies.
3. Use flexbox insted of float.
4. Use "let" and "const" insted of "var" in .js.

# Workflow:
1. Always create a branch to work on!
2. Name the branches with initials at the end of the name: "branchNameRE"
3. When done with feature push and merge to github and resolve possible conflicts.
4. camelCase in JavaScript and CSS/HTML-code
5. When done for the day, push to github for backup if computer gets broken.
6. Commit message structure.
<br> Exampel: "S1: Adds menu on top of page"
<br> Syntax: "story name": "what is the code doning?" "note names if has been working more then one person"


# Focus:
1. Functionalety

# Links:
1. Trello https://trello.com/b/UaFE8N4d/tiger-gu1
2. Flexbox https://css-tricks.com/snippets/css/a-guide-to-flexbox/

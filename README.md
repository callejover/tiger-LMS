
#Tiger-LMS
	Tiger-LMS is a simple to use Learning Management System for students and staff.

#Code Layout
1. html: Contains all html pages on the repository.
    1. student: Contains the html used when you´ve logged in as a student.
    2. teacher: Contains the html used when you´ve logged in as a teacher.
    3. admin: Contains the html used when you´ve logged in as an administrator.
    4. includes: Contains seperate html for edit feedback in admin. 
    5. mocup: Contains mocup ideas for page

2. css: Contains all css files on the repository.
    1. reset.css: Resets default values to null.
    2. main.css: This CSS is used for the basic layout of the websites reccurent pages.
    3. brandingKYH.css: Special CSS that changes the colors of the page to fit KYHs branding.
    4. mediaq.css: Contains the special mediaquery widths.
    5. Other CSS files are custom for its own html page.

3. js: Contains all javascript files on the repository.
    1. addNewEducation.js: Creates a new education.
    2. adminCreateClass.js: Creates a new class.
    3. adminCreateUser.js: Creates a new user.
    4. adminEditFeedback.js: Creates and removes forms in the feedback editor page.
    5. attendance.js: Checks if the students attendance code is valid and gives a response.
    6. currentDotsNav.js: Makes sure that the navigaton dots is hightlighted at the correct position of the page.
    7. divideIntoGroups.js: Allows the teacher to randomize groups of students.
    8. dragAndDrop.js: Drags students to correct groups.
    9. jquery.ScrollDots.js: Animation for scroll.
    10. login.js: Checks and allows access from accouts to log in.
    11. navMenu.js: All javascript for the nav menu.
    12. slider.js: Script for slider used at feedback pages.
    13. studentAssignment.js: Allows student to turn in an assignment.
    14. studentDailyFeedback.js: Script for smiley faces.
    15. studentFeedback.js: Response script to feedback pages.
    16. teacherAssignment.js: Allows the teacher to create assignments.
    17. teacherAssignmentApproval.js: Allows the teacher to view the students work and give a response.
    18. teacherAttendanceCode.js: Allows the teacher to create a random attendance code.
    19. teacherAttendanceOverview.js: Contains all students attendance.
    20. teacherFeedback.js: Contains the google charts.
    21. modals.js: Script for all modals.
    22. w3-include-html.js: Combines two html pages to one.

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

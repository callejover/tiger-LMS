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

# To do list (Tim & Robban):
1. Main.css
    index id:s to .class see comment in main.css. (Done)
2. Side menu for features.html create structure.
3. Pricing with info section.
... 3. footer with contact info on every site.
... 4. show current page in menu


# Reflection aka To do list. 171005
1. Logotype link to index.html (Done)
2. Bread text adjustments (Done)
3. textbox ajustmets to width:100%, in mediaq.css (Done)
4. Link under emojis in courses.html to work (Done)
6. Calle (atendens function). (Done)
7. Kanya week evaluation (done)
8. Fix overflow with text. (Done)

# To do list 171010
1. Login Enter butten (Done)
2. Courses mobile version (done)
3. Buttens in pricing.html (done)

# To do list 171011
1. Robbin: Login design (button and inputs/placeholders) (done)
2. Tim A/Tim L: Login - Submit form on Enter (done)
3. Robbin: Make attendence like loginmodule (done)
4. Robbin: make loginmodule in mobileview 100% (done)
5. Tim L: Placsement of text for pricing and features (done)
6. Kanya: Redirect weekley-evaluation to courses.html (done)


# To do list 171017
1. Title på alla sidor ska ha en relativ titel.
2. Tim A: menu adjusting to mediaq in all menus
3. Tim L: Fix course info pages


---

# IF HAVE TIME DO THIS:
1. Footer (if have time)
2. Tim A: Logotype


To do 171122
1. Datum inte bara dagens
2. Drag and drop för edit feedback
3. Tydligare klassnamn för create i admin
4. Backlog få en fungerande knapp för att importera exel dokument
5. Skapa konto funkar inte.
6. Testa allt för presentationen och gör en intressant sale pisch.

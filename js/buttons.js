/*js file for the buttons*/

//switch theme
function switchTheme() {
    document.body.classList.toggle("light-body");

    // for all elements with class dark-switch-theme-button, change the class to light-switch-theme-button
    var elementsToModify=document.getElementsByClassName("dark-switch-theme-button");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-switch-theme-button"); }

    // for all elements with class dark-main-menu-button, change the class to light-main-menu-button
    elementsToModify=document.getElementsByClassName("dark-main-menu-button");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-main-menu-button"); }

    // for all elements with class dark-default-button, change the class to light-default-button
    elementsToModify=document.getElementsByClassName("dark-default-button");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-default-button"); }

    // for all elements with class dark-hard-skills-table-column, change the class to light-hard-skills-table-column
    elementsToModify=document.getElementsByClassName("dark-hard-skills-table-column");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-hard-skills-table-column"); }

    // for all elements with class dark-hard-skills-table-column-title, change the class to light-hard-skills-table-column-title
    elementsToModify=document.getElementsByClassName("dark-hard-skills-table-column-title");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-hard-skills-table-column-title"); }

    // for all elements with class dark-hard-skills-table-row-normal, change the class to light-hard-skills-table-row-normal
    elementsToModify=document.getElementsByClassName("dark-hard-skills-table-row-normal");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-hard-skills-table-row-normal"); }

    // for all elements with class dark-hard-skills-table-row-bottom, change the class to light-hard-skills-table-row-bottom
    elementsToModify=document.getElementsByClassName("dark-hard-skills-table-row-bottom");
    for (var i = 0; i < elementsToModify.length; i++) { elementsToModify[i].classList.toggle("light-hard-skills-table-row-bottom"); }
}

//redirect to the about me section
function redirectAboutMe() { window.location.href = "index.html#id-aboutme-section"; }

//redirect to the skills section
function redirectSkills() { window.location.href = "index.html#id-skills-section"; }

//redirect to the formation section
function redirectFormation() { window.location.href = "index.html#id-formation-section"; }

//redirect to the university projects page
function redirectUniversityProjects() { window.location.href = "universityProjects.html"; }

// redirect to the about me section from the project folder
function redirectAboutMeFromProject() { window.location.href = "../index.html#id-aboutme-section"; }

//redirect to the personal projects page
function redirectPersonalProjects() { window.location.href = "personalProjects.html"; }


//redirect to the skills section from the project folder
function redirectSkillsFromProject() { window.location.href = "../index.html#id-skills-section"; }

//redirect to the formation section from the project folder
function redirectFormationFromProject() { window.location.href = "../index.html#id-formation-section"; }

//redirect to the university projects page from the project folder
function redirectUniversityProjectsFromProject() { window.location.href = "../universityProjects.html"; }

//redirect to the personal projects page from the project folder
function redirectPersonalProjectsFromProject() { window.location.href = "../personalProjects.html"; }


//go to the top of the page
function redirectTopOfPage() { window.scrollTo(0, 0); }

//go to the bottom of the page
function redirectBottomOfPage() { window.scrollTo(0, document.body.scrollHeight); }


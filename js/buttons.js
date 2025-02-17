/*js file for the buttons*/

//redirect to the about me section
function redirectAboutMe() { window.location.href = "home.html#id-aboutme-section"; }

//redirect to the skills section
function redirectSkills() { window.location.href = "home.html#id-skills-section"; }

//redirect to the formation section
function redirectFormation() { window.location.href = "home.html#id-formation-section"; }

//redirect to the university projects page
function redirectUniversityProjects() { window.location.href = "university-projects.html"; }

//redirect to the personal projects page
function redirectPersonalProjects() { window.location.href = "personal-projects.html"; }



//go to the top of the page
function redirectTopOfPage() { window.scrollTo(0, 0); }

//go to the bottom of the page
function redirectBottomOfPage() { window.scrollTo(0, document.body.scrollHeight); }



// switch language
function switchLanguage() {
    const currentURL = window.location.href;

    if (currentURL.includes('/en/')) { window.location.href = currentURL.replace('/en/', '/fr/'); }
    else if (currentURL.includes('/fr/')) { window.location.href = currentURL.replace('/fr/', '/en/'); }
    else { console.error("Language folder not detected in the URL."); }
}


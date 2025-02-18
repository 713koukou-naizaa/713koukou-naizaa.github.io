/*js file for the buttons*/

//redirect to the home page
function redirectHome() { window.location.href = "home.html"; }

//redirect to the web projects page
function redirectWebProjects() { window.location.href = "web-projects.html"; }

//redirect to the desktop apps page
function redirectDesktopApps() { window.location.href = "desktop-apps.html"; }

//redirect to the scripts page
function redirectScripts() { window.location.href = "scripts.html"; }

//redirect to the other projects page
function redirectOtherProjects() { window.location.href = "other-projects.html"; }



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


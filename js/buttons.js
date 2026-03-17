/*js file for the buttons*/

function redirectHome() { window.location.href = "home.html"; }


function redirectAIML() { window.location.href = "ai-ml.html"; }
function redirectAiiredPage() { window.location.href = "aiired.html"; }


function redirectSystemsAlgorithms() { window.location.href = "systems-algorithms.html"; }

function redirectPresentationsSchedulerPage() { window.location.href = "presentations-scheduler.html"; }
function redirectPresentationsSchedulerGitHub() { window.open("https://github.com/713koukou-naizaa/presentations_scheduler", "_blank"); }
function redirectVisionTunerPage() { window.location.href = "vision-tuner.html"; }
function redirectVisionTunerGitHub() { window.open("https://github.com/713koukou-naizaa/visiontuner", "_blank"); }
function redirectOwlEyeGitHub() { window.open("https://github.com/713koukou-naizaa/owl-eye", "_blank"); }


function redirectApplications() { window.location.href = "applications.html"; }

function redirectQuestLogPage() { window.location.href = "quest-log.html"; }
function redirectQuestLogGitHub() { window.open("https://github.com/713koukou-naizaa/quest-log", "_blank"); }

function redirectReimuPage() { window.location.href = "reimu.html"; }


function redirectWebProjects() { window.location.href = "web-projects.html"; }

function redirectComusPartyPage() { window.location.href = "comus-party.html"; }
function redirectComusPartyGitHub() { window.open("https://github.com/ValbionGroup/Comus-Party/", "_blank"); }



function redirectTopOfPage() { window.scrollTo(0, 0); }
function redirectBottomOfPage() { window.scrollTo(0, document.body.scrollHeight); }

// switch language
function switchLanguage() {
    const currentURL = window.location.href;

    if (currentURL.includes('/en/')) { window.location.href = currentURL.replace('/en/', '/fr/'); }
    else if (currentURL.includes('/fr/')) { window.location.href = currentURL.replace('/fr/', '/en/'); }
    else { console.error("Language folder not detected in the URL."); }
}

function redirectToHomeLanguage(pLanguage) {
    // based on pLanguage, redirect to either /en/home.html or /fr/home.html
    window.location.href = `/${pLanguage}/home.html`;
}

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


//redirect to vision tuner page
function redirectVisionTunerPage() { window.location.href = "vision-tuner.html"; }
//redirect to vision tuner github
function redirectVisionTunerGitHub() { window.open("https://github.com/713koukou-naizaa/visiontuner", "_blank"); }

//redirect to comus party page
function redirectComusPartyPage() { window.location.href = "comus-party.html"; }
//redirect to comus party github
function redirectComusPartyGitHub() { window.open("https://github.com/ValbionGroup/Comus-Party/", "_blank"); }
//redirect to comus party website
function redirectComusPartyWebsite() { window.open("https://comus-party.com/", "_blank"); }

//redirect to songs market page
function redirectSongsMarketPage() { window.location.href = "songs-market.html"; }
//redirect to songs market github
function redirectSongsMarketGitHub() { window.open("https://github.com/713koukou-naizaa/songs-market/", "_blank"); }

//redirect to book-n-go page
function redirectBookNGoPage() { window.location.href = "book-n-go.html"; }

//redirect to auto-recorder github
function redirectAutoRecorderGitHub() { window.open("https://github.com/713koukou-naizaa/auto-recorder", "_blank"); }

//redirect to db-backup github
function redirectDbBackupGitHub() { window.open("https://github.com/713koukou-naizaa/db-backup", "_blank"); }
//redirect to db-restore github
function redirectDbRestoreGitHub() { window.open("https://github.com/713koukou-naizaa/db-restore", "_blank"); }

//redirect to dl-yt-playlist github
function redirectDlYtPlaylistGitHub() { window.open("https://github.com/713koukou-naizaa/dl-yt-playlist", "_blank"); }

//redirect to tp.sh github
function redirectTpshGitHub() { window.open("https://github.com/713koukou-naizaa/tp.sh", "_blank"); }

//redirect to cleanDownloads.py github
function redirectCleanDownloadsGitHub() { window.open("https://github.com/713koukou-naizaa/cleanDownloads.py", "_blank"); }

//redirect to getAllFilesStats.ps1 github
function redirectGetAllFilesStatsGitHub() { window.open("https://github.com/713koukou-naizaa/getAllFilesStats.ps1", "_blank"); }

//redirect to reimu page
function redirectReimuPage() { window.location.href = "reimu.html"; }

//redirect to aiired page
function redirectAiiredPage() { window.location.href = "aiired.html"; }

//redirect to memoris-recollection page
function redirectMemorisRecollectionPage() { window.location.href = "memoris-recollection.html"; }


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

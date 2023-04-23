//checks the window url to determine which mode is activated before loading appropriate css file.
if(window.location.href.indexOf("&mode=night") > -1) {
    //if night mode is activated.
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/generalNight.css">'
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/exclusiveArticle2Night.css">' 
} else {
    //if light mode is activated.
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/general.css">'
    document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/exclusiveArticle2.css">'
}

//navbar links
const runwayLink = document.getElementById("runwayAnchor")
const metGalaLink = document.getElementById("metGalaAnchor")
const collectionLink = document.getElementById("collectionAnchor")

//hamburger menu links
const runwayLinkHamburg = document.getElementById("runwayAnchor2")
const metGalaLinkHamburg = document.getElementById("metGalaAnchor2")
const collectionLinkHamburg = document.getElementById("collectionAnchor2")


//footer links
const runwayLinkFooter = document.getElementById("runwayAnchor3")
const metGalaLinkFooter = document.getElementById("metGalaAnchor3")
const collectionLinkFooter = document.getElementById("collectionAnchor3")

//checks the window url to determine which mode is activated before sending the user to the requested page.
//sends user to runway section of main page.
runwayLink.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#runwaySection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#runwaySection"
    }
})

//sends user to met gala section of main page.
metGalaLink.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#metGalaSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#metGalaSection"
    }
})

//sends user to collection section of main page.
collectionLink.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#collectionSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#collectionSection"
    }
})

//links found inside the hamburger menu.
//sends user to runway section of main page.
runwayLinkHamburg.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#runwaySection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#runwaySection"
    }
})

//sends user to met gala section of main page.
metGalaLinkHamburg.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#metGalaSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#metGalaSection"
    }
})

//sends user to the collection section of the main page.
collectionLinkHamburg.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#collectionSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#collectionSection"
    }
})

//links found in the footer section.
//sends user to runway section of main page.
runwayLinkFooter.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#runwaySection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#runwaySection"
    }
})

//sends user to met gala section of main page.
metGalaLinkFooter.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#metGalaSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#metGalaSection"
    }
})

//sends user to collection section of main page.
collectionLinkFooter.addEventListener('click', () => {
    //if night mode is activated.
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night#collectionSection"
    //if light mode is activated.
    } else {
        window.location.href = "index.html#collectionSection"
    }
})
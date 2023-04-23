//hamburger menu stored as an object.
const hamburgerMenu = {
    overlay: document.getElementById("hamburgerMenu"),
    links: document.querySelectorAll(".hamburgerLinks li"),
    cross: document.getElementById("crossButton2"),
    extras: document.getElementsByClassName("hamburgerExtras")[0]
}

//search page stored as an object.
const searchPage = {
    overlay: document.getElementById("searchPage"),
    bar: document.getElementById("searchForm"),
    cross: document.getElementById("crossButton1")
}

//search page controls.
showSearchPage = () => {
    document.body.style.overflow = "hidden"
    var navBar = document.getElementById("navBar")
    var navBarTopPos = navBar.getBoundingClientRect()

    //navbar to be hidden if navbar was sticked.
    if(navBarTopPos.top == 0) {
        navBar.style.transform = "translateY(-100px)"
        navBar.style.animation = `hideNavBar .25s linear`
    }

    //search overlay set to visible.
    searchPage.overlay.setAttribute("style", "visibility: visible; background-Color: rgba(238, 0, 0, .85); transition: all .25s linear")
    searchPage.cross.style.visibility = "visible"
    searchPage.bar.style.visibility = "visible"
}

//search page cross button.
closeSearchPage = () => {
    document.body.style.overflow = "visible"
    var navBar = document.getElementById("navBar")
    var navBarTopPos = navBar.getBoundingClientRect()
    
    //navbar to be shown if navbar was sticked.
    if(navBarTopPos.top == -100) {
        navBar.style.transform = "translateY(0px)"
        navBar.style.animation = `showNavBar .25s linear`
    }

    //search overlay set to hidden.
    searchPage.overlay.setAttribute("style", "visibility: hidden; background-Color: transparent; transition: all .25s linear")
    searchPage.cross.style.visibility = "hidden"
    searchPage.bar.style.visibility = "hidden"
}

//hamburger menu controls.
showHamburgerMenu = () => {
    document.body.style.overflow = "hidden"    
    var navBar = document.getElementById("navBar")
    var navBarTopPos = navBar.getBoundingClientRect()

    //navbar to be hidden if navbar was stickied.
    if(navBarTopPos.top == 0) {
        navBar.style.transform = "translateY(-100px)"
        navBar.style.animation = `hideNavBar .25s linear`
    } 

    //staggered fade in animations for hamburger menu links.
    hamburgerMenu.extras.style.display = "flex"
    hamburgerMenu.overlay.setAttribute("style", "visibility: visible; background-Color: rgba(238, 0, 0, .85); transition: all .25s linear")
    hamburgerMenu.cross.style.visibility = "visible"
    hamburgerMenu.links.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`    
    })
}

//hamburger menu cross button.
closeHamburgerMenu = () => {
    document.body.style.overflow = "visible" 
    var navBar = document.getElementById("navBar")
    var navBarTopPos = navBar.getBoundingClientRect()

    //navbar to be shown if navbar was stickied.
    if(navBarTopPos.top == -100) {
        navBar.style.transform = "translateY(0px)"
        navBar.style.animation = `showNavBar .25s linear`
    }

    //hamburger menu links to be set to invisible.
    hamburgerMenu.extras.style.display = "none"
    hamburgerMenu.overlay.setAttribute("style", "visibility: hidden; background-Color: transparent; transition: all .25s linear")
    hamburgerMenu.cross.style.visibility = "hidden"

    //resets animation for hamburger menu links.
    hamburgerMenu.links.forEach((link) => {
        link.style.animation = ""
    })
}

const nightModeBtn = document.getElementById("nightModeBtn")
const lightModeBtn = document.getElementById("lightModeBtn")
const aboutLink = document.getElementById("aboutAnchor")
const aboutUsLinkHamburg = document.getElementById("aboutAnchor2")
const aboutUsLinkFooter = document.getElementById("aboutAnchor3")
const homeLink = document.getElementById("homeAnchor")

//change to night mode.
nightModeBtn.addEventListener("click", () => {
    if(!(window.location.href.indexOf("&mode=night") > -1)) {
        window.location.search += "&mode=night"
    } else {
        closeHamburgerMenu()
    }
})

//change to light mode.
lightModeBtn.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        var urlString = location.toString()
        window.location.href = urlString.replace("&mode=night", "")
    } else {
        closeHamburgerMenu()
    }
})

//sends user to homepage and loads appropriate css file depending on which mode is active.
homeLink.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "index.html?&mode=night"
    } else {
        window.location.href = "index.html"
    }
})

//navbar about us link
//sends user to about us page and loads appropriate css file depending on which mode is active.
aboutLink.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "aboutUs.html?&mode=night"
    } else {
        window.location.href = "aboutUs.html"
    }
})

//hamburger menu about us link.
//sends user to about us page and loads appropriate css file depending on which mode is active.
aboutUsLinkHamburg.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "aboutUs.html?&mode=night"
    } else {
        window.location.href = "aboutUs.html"
    }
})

//footer about us link.
//sends user to about us page and loads appropriate css file depending on which mode is active.
aboutUsLinkFooter.addEventListener('click', () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        window.location.href = "aboutUs.html?&mode=night"
    } else {
        window.location.href = "aboutUs.html"
    }
})
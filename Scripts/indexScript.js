//closes hamburger menu overlay after clicking links.
hamburgerMenu.links.forEach((li) => {
    li.getElementsByTagName('a')[0].addEventListener('click', () => {
        closeHamburgerMenu()
    })
})

//image slider controls
var images = document.getElementById("sliderImages")
var texts = document.getElementById("overlayText")

var slideIndex = 1
var textIndex
showSlide(slideIndex)

//generates image to be displayed.
function slide(n) {
    showSlide(slideIndex += n)
}

//determines which image is requested.
function showSlide(n) {
    if(n > images.children.length) {
        slideIndex = 1
    }

    if(n < 1) {
        slideIndex = images.children.length
    }

    //all images except for the one being displayed is set to invisible.
    for(var i = 0; i < images.children.length; i++) {
        images.children[i].style.display = "none"
        texts.children[i].style.display = "none"
    }
    images.children[slideIndex-1].style.display = "block"
    texts.children[slideIndex-1].style.display = "block"
    textIndex = slideIndex - 1
}

//red filter effect when hovering over the links inside the image slider
//effect triggers when hovered over. Effect is removed when mouse leaves the anchor element.
//delay to ensure filter animation finishes entirely before removing the filter.

texts.children[0].addEventListener('mouseover', () => {
    images.children[0].style.filter = "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)"
    images.children[0].style.transition = "all .35s"
})

texts.children[0].addEventListener('mouseout', () => {
    images.children[0].style.filter = ""
    setTimeout(() => {
        images.children[0].style.transition = ""
    }, 350);
})

texts.children[1].addEventListener('mouseover', () => {
    images.children[1].style.filter = "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)"
    images.children[1].style.transition = "all .35s"
})

texts.children[1].addEventListener('mouseout', () => {
    images.children[1].style.filter = ""
    setTimeout(() => {
        images.children[1].style.transition = ""
    }, 350);
})

texts.children[2].addEventListener('mouseover', () => {
    images.children[2].style.filter = "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)"
    images.children[2].style.transition = "all .35s"
})

texts.children[2].addEventListener('mouseout', () => {
    images.children[2].style.filter = ""
    setTimeout(() => {
        images.children[2].style.transition = ""
    }, 350);
})

//locks to ensure that animation only runs once until the page is refreshed.
var runwayLock = 0
var metGalaLock = 0
var collectionLock = 0

const runwayImage = document.getElementById("runwayContainer")
const runwayTag = document.getElementById("headlineTitle")
const metGalaTrigger = document.getElementById("articleOverlayContainer")
const metGalaArticles = document.getElementById("articleContainer")

const collectionTag = document.getElementById("pastCollectionTitle")
const gridElements = document.getElementById("gridElements")

//controls for scroll events.
window.addEventListener('scroll', () => {
    //landing banner parallax effect.
    const parallax = images.children[slideIndex - 1]
    var scrollPos = window.pageYOffset * 0.4
    parallax.style.transform = `translateY(${scrollPos}px)`
    
    //coordinates of the category tags to serve as triggers for animations.
    var runwayTagTopPos = runwayTag.getBoundingClientRect()
    var metGalaTriggerBotPos = metGalaTrigger.getBoundingClientRect()
    var collectionTagTopPos = collectionTag.getBoundingClientRect()

    //animation control of runway section.
    if(runwayTagTopPos.top < 400 && runwayLock == 0) {
        runwayLock = 1

        //staggers fade in animation.
        for(var i = 0; i < runwayImage.children.length; i++) {
            runwayImage.children[i].style.animation = `runwayImageFade 1s ease forwards ${i / 6}s`
        }
    }

    //animation control of met gala section.
    if(metGalaTriggerBotPos.bottom < 100 && metGalaLock == 0) {
        metGalaLock = 1
        
        //staggers fade in animation.
        for(var i = 0; i < metGalaArticles.children.length; i++) {
            metGalaArticles.children[i].style.animation = `runwayImageFade 1s ease forwards ${i / 6}s`
        }

    }

    //animation control of collection section.
    if(collectionTagTopPos.top < 100 && collectionLock == 0) {
        collectionLock = 1

        //staggers fade in animation.
        for(var i = 0; i < gridElements.children.length - 1; i++) {
            gridElements.children[i].style.animation = `collectionFade 1s ease forwards ${i / 8}s`
        }
    }

})

//controls for runway section animations.
var runwayArr = Array.from(runwayImage.children)

//red filter effect on hover. Effect is removed when mouse leaves the container.
//text appears from the bottom on hover. Text leaves after mouse leaves the container.
runwayArr.forEach((div, index) => {
    var img = div.getElementsByTagName("img")[0]
    var text = div.getElementsByTagName("p")[0]

    if(index < 4) {
        //red filter effect.
        div.addEventListener("mouseover", () => {
            img.style.filter = "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)"
            img.style.transition = "all .35s"
            text.setAttribute("style", "transform: translateY(0px); transition: all .35s")
     
        })

        //text animation.
        div.addEventListener("mouseout", () => {
            img.style.filter = ""
            text.style.transform = "translateY(100px)"
        })
    }
})

//panel changes size and from image to video preview when clicked.
runwayArr.forEach((div, index)=> {
    div.children[0].addEventListener('click', () => {
            var img = div.getElementsByTagName("img")[0]
            //resets panel animations by removing the earlier staggered fade in animations.
            for(var i = 0; i < runwayArr.length; i++) {
                runwayArr[i].style.animation = ""
                runwayArr[i].style.opacity = "1"
            }

            if(window.innerWidth > 768) {
                
                //sets selected panel to 100% width of the container.
                //image is then set to invisible and video is shown in place of image.
                div.style.width = "100%"
                img.style.display = "none"
                div.getElementsByTagName('video')[0].style.display = "block"
                div.getElementsByTagName('video')[0].play()
                div.getElementsByTagName('a')[0].style.display = "block"
                div.getElementsByTagName('button')[0].style.display = "block" 

                //shrinks other panel to 0%.
                for(var i = 0; i < runwayArr.length; i++) {
                    if(i != index) {
                        runwayArr[i].style.width = "0%"
                        runwayArr[i].style.pointerEvents = "none"
                    }
                }

            //controls for smaller screens and mobile devices.
            } else if (window.innerWidth <= 768) {
                div.style.width = "100%"
                img.style.display = "none"
                div.getElementsByTagName('video')[0].style.display = "block"
                div.getElementsByTagName('video')[0].play()
                div.getElementsByTagName('a')[0].style.display = "block"
                div.getElementsByTagName('button')[0].style.display = "block"
            }

        })         
})

var runwayCrossArr = Array.from(runwayCross)

//cross button controls to revert panel back to original size.
runwayCrossArr.forEach((button, index) => {
    button.addEventListener("click", () => {
        
        //sets selected panal back to orignal size. Preview video is hidden and image is shown in place of video.
        //preview video is reset and rewound to the starting point.
        if(window.innerWidth > 768) {
            runwayArr[index].getElementsByTagName('img')[0].style.display = "block"
            runwayArr[index].getElementsByTagName('a')[0].style.display = "none"
            runwayArr[index].getElementsByTagName('video')[0].style.display = "none"   
            runwayArr[index].getElementsByTagName('video')[0].style.display = "none"
            runwayArr[index].getElementsByTagName('video')[0].pause()
            runwayArr[index].getElementsByTagName('video')[0].currentTime = 0
            runwayArr[index].style.width = "25%"
            button.style.display = "none"

            //other panels are set back to their original size and images are set to visible. 
            for(var i = 0; i < runwayArr.length; i++) {
                if(i != index) {
                    runwayArr[i].style.display = "block"
                    runwayArr[i].style.width = "25%"
                    runwayArr[i].style.pointerEvents = "auto"
                }
            }
        //controls for smaller screens and mobile devices.
        } else if (window.innerWidth <= 768) {
            runwayArr[index].getElementsByTagName('img')[0].style.display = "block"
            runwayArr[index].getElementsByTagName('a')[0].style.display = "none"
            runwayArr[index].getElementsByTagName('video')[0].style.display = "none"   
            runwayArr[index].getElementsByTagName('video')[0].style.display = "none"
            runwayArr[index].getElementsByTagName('video')[0].pause()
            runwayArr[index].getElementsByTagName('video')[0].currentTime = 0
            button.style.display = "none"
        }

        
    })
})

const metGalaContent = document.getElementsByClassName("articleContent")
metGalaArr = Array.from(metGalaArticles.children)
metGalaArr.forEach((div, index) => {
    //red filter effect when hovered over. Effect is removed when mouse leaves the element.
    div.addEventListener("mouseover", () => {
        div.getElementsByTagName('img')[0].style.filter = "grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)"
        metGalaContent[index].style.transform = "translateX(0px)"
    })
    //text animation when hovered over. Text is removed when mouse leaves the element.
    div.addEventListener("mouseout", () => {
        div.getElementsByTagName('img')[0].style.filter = ""
        metGalaContent[index].style.transform = "translateX(-110%)"
    })
})

const viewBtn = document.getElementById("viewBtn")
const view = document.getElementById("view")
const norm = document.getElementById("normal")
const normBtn = document.getElementById("normalBtn")

//controls for the resizing of the grid.
viewBtn.addEventListener('click', () => {
    //reorganises and resizes the grid back to its original state.
    for(var j = 0; j < gridElements.children.length; j++) {
        if(j < 11) {
            gridElements.children[j].style.transform = "scale(1) translateX(0px) translateY(0px)"
            gridElements.children[j].style.overflow = "hidden"
            gridElements.children[j].style.transition = "all 1s ease-in"
            gridElements.children[j].style.pointerEvents = "auto"
        }     
    }

    view.style.animation = `collectionFadeOut .5s ease`

    //overlay text is then removed in place of a cross button. Cross button is to return the grid into its scattered state.
    //delay to ensure that overlay animation is completed before removing it.
    setTimeout(() => {
        gridElements.children[11].style.visibility = "hidden"
        view.style.display = "none"
        norm.style.display = "block"
        norm.style.visibility = "visible"
        norm.style.animation = `collectionFade .5s ease`
    }, 500);

    setTimeout(() => {
        norm.style.transform = "translateY(250px)"
        norm.style.transition = "transform .5s ease"
    }, 1000);

})

//cross button to scatter the grid.
normBtn.addEventListener("click", () => {
    for(var j = 0; j < gridElements.children.length - 1; j++) {
        gridElements.children[j].style.overflow = "hidden"
        gridElements.children[j].style.transition = "all 1s ease-in"

        if(j == 0) {
            gridElements.children[j].style.transform = `scale(0.5) translateX(-200px) translateY(-100px)`
        }
        if(j == 1) {
            gridElements.children[j].style.transform = `scale(0.5) translateX(200px) translateY(-100px)`
        }
        if(j == 2) {
            gridElements.children[j].style.transform = `scale(0.5)`
        }
        if(j == 3) {
            gridElements.children[j].style.transform = `scale(0.75) translateX(-300px)`
        }
        if(j == 4) {
            gridElements.children[j].style.transform = `scale(0.75) translateX(-200px)`
        }
        if(j == 5) {
            gridElements.children[j].style.transform = `scale(0.75)`
        }
        if(j == 6) {
            gridElements.children[j].style.transform = `scale(0.5) translateY(100px)`
        }
        if(j == 7) {
            gridElements.children[j].style.transform = `scale(0.75)`
        }
        if(j > 7) {
            gridElements.children[j].style.transform = `scale(0.5)`
        }

        gridElements.children[j].style.pointerEvents = "none"
    }
    
    //cross button is removed and text overlay returns
    //delay to ensure element animation finishes before element is removed.
    norm.style.transform = "translateY(0px)"
    setTimeout(() => {
        norm.style.animation = `collectionFadeOut .5s ease`
    }, 500);

    setTimeout(() => {
        norm.style.display = "none"
        gridElements.children[11].style.visibility = "visible"
        view.style.animation = `collectionFade .5s ease`
        view.style.display = "block"
    }, 1000);
})

const articleLink = document.getElementById("articleLink")
const exArticle1Link = document.getElementById("exArticle1Link")
const exArticle2Link = document.getElementById("exArticle2Link")

//appends the appropriate index to the url depending on which article link was clicked and which mode was selected.
function postIndex(index) {
    if(window.location.href.indexOf("&mode=night") > -1) {
        //if night mode is selected.
        document.location.href =`article.html?index=${index}&mode=night`
    } else {
        //if light mode is selected.
        document.location.href = `article.html?index=${index}`
    }
    
}

//appends the appropriate mode tag to the url before sending the user to the requested page.
exArticle1Link.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        //if night mode is selected.
        window.location.href = "exclusiveArticle1.html?&mode=night"
    } else {
        //if light mode is selected.
        window.location.href = "exclusiveArticle1.html"
    }
})

//appends the appropriate mode tag to the url before sending the user to the requested page.
exArticle2Link.addEventListener("click", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        //if night mode is selected.
        window.location.href = "exclusiveArticle2.html?&mode=night"
    } else {
        //if light mode is selected.
        window.location.href = "exclusiveArticle2.html"
    }
})

//checks the window url to determine which mode is activated before loading appropriate css file.
window.addEventListener("load", () => {
    if(window.location.href.indexOf("&mode=night") > -1) {
        //if night mode is selected.
        document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/generalNight.css">'        
    } else {
        //if light mode is selected.
        console.log("light mode")
    }
})
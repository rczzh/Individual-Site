//loads requested article on load.
window.addEventListener('load', () => {
    console.log("generating Article")

    //array containing content of 3 different articles. articles are generated dynamically based of which link was pressed in the previous page.
    //content is then injected into the template found in article.html.
    const articleInfo = [{
        brandName: "SCHIAPRELLI",
        brandImage: "Assets/SchiaparelliArticle/SchiaparelliBanner.png",
        collectionDate: "SPRING 2022 COUTURE",
        collectionSubtitle: "Where escapism meets surrealism—welcome to 'Planet Schiaparelli'",
        authorName: "BY ANDERS CHRISTIAN MADSEN",
        articleDate: "25 JANUARY 2022",
        articleContent1: "If there’s a real sense of return in the air at this season’s haute couture shows, Daniel Roseberry’s brilliant collection for Schiaparelli will be its defining memory. Passing through the Petit Palais, each of his looks was as intriguing to the senses as the inspiration behind them. “There’s this word in French for when you’re driving on a cliffside and you have the sudden urge to go off the road. It’s called ‘the call of the void,’” he said during a preview the day before. In French, the term is l’appel du vide and it’s not as hopeless as it sounds. Psychologically, it’s an intrusive thought that affirms our urge to live. “I think that’s what this spaciness felt like to me,” he explained, surrounded by orbital dresses and planetary bags in his Place Vendôme salons. “The void is the absence of this reality.”",
        articleContent2: "As Omicron put a damper on post-pandemic prospects this winter, Roseberry escaped into space cinema: Dune, Prometheus, Interstellar, Arrival. In times of refuelled space races, missions to Mars, and the metaverse—which more or less fulfills the same escapism—he’s not alone in looking to galaxies far way. It’s a mindset that comes natural at Schiaparelli where surrealism goes hand-in-hand with existentialism. If you can use the word effortless in haute couture, that’s what Roseberry’s collection felt like: a seamlessly executed idea for a house it was just right for. “We kept saying ‘Planet Schiaparelli’: I wanted to do something that looked totally unlike anybody else. Nothing else should look like this.”",
        articleContent3: "Roseberry exercised his objective in creations forged in the images of the galaxy and the science fiction we relate to it. Quite literally, saturnian brass rings orbited around a black canvas corset bodice woven with black flowers in jacquard, and encircled a gilded metal bustier that wasn’t just for show. Like previous seasons’ breastplates, Schiaparelli will cast them on the client’s body in-house. (“You can see the goose-bumps in the casts,” Roseberry smiled.) A Medusa dress debuted a new technique developed for the collection in which wet gold leather had been stretched and moulded over clay sculptures of the house’s emblems-the lock, the lobster, the dove—which had then been latticed into a mind-blowing jeweled cage and encrusted with cabochon stones from the 1930s.",
        articleContent4: "A series of structures evoked the movement of jelly fish, which in turn—in the science fiction scheme of things—evoked James Cameron’s The Abyss. A matter of exposed crin gathered around the shoulders of a minidress in black silk crepe and bounced like tentacles as the model moved down the runway of the Petit Palais. A similar effect took form around the ankles of a strapless velvet dress, and in the brass tentacles that vibrated around Mariacarla Boscono’s long black jersey dress. Interestingly, if you removed the science fiction elements, you’d be left with a series of sophisticated black dresses more lightly imbued with what Roseberry referred to as “aerodynamic” details, like the stretched-out neckline of Kiki Wilhelm’s black twill bustier.",
        articleContent5: "That sense of simplicity was the intention. After a year of celebrity exposure—Lady Gaga, Adele, Cardi B—that has catapulted Roseberry’s look for Schiaparelli into the consciousness of a new audience he wanted to pull back. “Let’s take a deep breath and start refining the language,” he’d told his team. “How do we illicit the same emotional response that we get from the couture without volume and without color?” It’s why—stripped to their core—his little dresses and jackets were almost down-to-earth in a collection literally based on the opposite. It was a clever way for Roseberry to unite anticipations for Schiaparelli grandeur with expectations for something new. (As Karl Lagerfeld once said, “I’m very much down to earth. Just not this earth.”)",
        articleContent6: "Of course, Roseberry isn’t dialing down on exposure. The morning of our preview he had fitted Julia Fox in a denim cone bra jacket to wear to the Kenzo show with Kanye West. The new couple also attended Roseberry’s show, with West in one of his masks that completely covered his face looking as existentially stirring as the collection itself. Maybe it’s Roseberry’s genuine affinity for pop culture that makes his haute couture feel so fresh. In its fusion of stupefying craftsmanship, splendor, and consistent sense of humor, the show kind of evoked a time when the likes of Christian Lacroix, Jean Paul Gaultier, and Thierry Mugler—may he rest in peace—opened Paris’s eyes to a different kind of fashion theater.",
        collectionLook1: "Assets/SchiaparelliArticle/Schiaparelli1.jpg",
        collectionLook2: "Assets/SchiaparelliArticle/Schiaparelli2.jpg",
        collectionLook3: "Assets/SchiaparelliArticle/Schiaparelli3.jpg",
        collectionLook4: "Assets/SchiaparelliArticle/Schiaparelli4.jpg",
        collectionLook5: "Assets/SchiaparelliArticle/Schiaparelli5.jpg",
        collectionLook6: "Assets/SchiaparelliArticle/Schiaparelli6.jpg",
        collectionLook7: "Assets/SchiaparelliArticle/Schiaparelli7.jpg",
        collectionLook8: "Assets/SchiaparelliArticle/Schiaparelli8.jpg"
    }, {
        brandName: "DIOR",
        brandImage: "Assets/DiorArticle/DiorBanner.webp",
        collectionDate: "WINTER 2022 MENSWEAR",
        collectionSubtitle: "See Kim Jones' reimagination of the house's signature silhouettes, cannage quilting and 'Dior grey' at Dior's fall/winter 2022 menswear collection",
        authorName: "BY ANDERS CHRISTIAN MADSEN",
        articleDate: "22 JANUARY 2022",
        articleContent1: "It might come as a surprise that Kim Jones, who has devoted most of his Dior collections to collaborations with artists and writers, approached his 75th anniversary homage to the house as a one-man show. “We’ve done a Birkenstock, but only because we didn’t want to do a Christian Dior gardening shoe and copy it,” the designer said during a preview the day before. Actually, “one-man show” isn’t entirely accurate. As a tribute to the green-fingered founder, you could say Jones collaborated with the ghost of Christian Dior himself, putting in proverbial neon lights the archive genetics that naturally underpin any collection he does.",
        articleContent2: "In true grande maison style, Jones erected a life-size copy of Pont Alexandre III in a tent on Place de la Concorde, just a stone’s throw from the real one. The nasal might of Christian Dior spoke on the soundtrack with godlike authority as Jones’s interpretations of the couturier’s signature silhouettes bathed in his favourite “Dior grey” strolled along the bridge’s banister. It was a straightforward exercise: From the Bar jacket to the wrap coat and the cannage, Jones worked each of the Dior icons into something that would resonate with a contemporary male customer.",
        articleContent3: "“It’s really complicated pattern-cutting but it looks so simple. That’s the beauty of it,” he said, pointing at one of the jackets on his board of looks. At Dior, cleanliness is next to godliness, but Jones’s time machine worked best when he deliberately chipped the polish. A series of Bar jackets and coats constructed like men’s blazers with white stitching that looked almost frayed had a deconstructed character to them we don’t often see at his Dior. It suited him. But mainly, it was nice to see a Dior collection that was purely Jones, so much so that it became self-referential.",
        articleContent4: "Asked if it felt more “him,” Jones pulled up Vogue Runway on his phone and searched for the fall 2005 collection of his eponymous label. “Funny enough, it reminds me quite a lot of this collection I did back in the noughties. That’s 20 years ago, which makes me feel very old and scary.” There were clear parallels. The sweatshirt greys in Jones’s collection became the Dior greys in this one, and he had—perhaps subconsciously—evoked the same sporty trouser silhouette as back then, although on this runway, his tailored track pants looked more like the athleisure that has seeped into menswear in recent years.",
        articleContent5: "f younger audiences like sportswear, those trousers added a more youthful element to proceedings. A collection like this may not receive the hype of last season’s Travis Scott collaboration (the release of which has been indefinitely postponed due to controversy surrounding the rapper), but in its Dior-core it will serve to enlighten new audiences in what the house historically represents. “I think young people want to learn about things,” Jones said. “The thing about Dior is it still looks modern when you see pieces from the archive. That’s probably why it’s still here, and so big.” He took his bow with milliner Stephen Jones, who is celebrating 25 years at Dior, and reworked the founder’s beret for the heads of Jones’s models.",
        articleContent6: "",
        collectionLook1: "Assets/DiorArticle/Dior1.jpg",
        collectionLook2: "Assets/DiorArticle/Dior2.jpg",
        collectionLook3: "Assets/DiorArticle/Dior3.jpg",
        collectionLook4: "Assets/DiorArticle/Dior4.jpg",
        collectionLook5: "Assets/DiorArticle/Dior5.jpg",
        collectionLook6: "Assets/DiorArticle/Dior6.jpg",
        collectionLook7: "Assets/DiorArticle/Dior7.jpg",
        collectionLook8: "Assets/DiorArticle/Dior8.jpg"
    }, {
        brandName: "BURBERRY",
        brandImage: "Assets/BurberryArticle/BurberryBanner.jpg",
        collectionDate: "SPRING 2021 READY-TO-WEAR",
        collectionSubtitle: "Vogue's fashion director Desmond Lim picks his favourite looks from the Burberry show",
        authorName: "BY LUKE LEITCH",
        articleDate: "22 JANUARY 2022",
        articleContent1: "A tidal wave swallowing a lighthouse—this key visual on the show’s e-invite started an internal dialogue. What is the intended message? Is Burberry bracing against all adversities given this current climate? Or is it about the survival of the fittest?",
        articleContent2: "Despite the massive lag during the live stream transmission, the show eventually starts inside a mirrored changing room where model Anok Yai is seen dressing herself, one item at a time, in an almost ritualistic manner. The silence is broken when the haunting voice of German artist and performer Anne Imhof fills the air and the scene slowly changes into an undisclosed forest setting. Models, accompanied by men in dark suits, wander around the woods like prisoners of war, while smoke screens add tension.",
        articleContent3: "The first look is a full denim ensemble with a built-in denim vest on trench with hip waders in a matching material. As the collection builds, the imagery of that tidal wave starts taking shape in a wash of sea creatures like mermaids, giant squids, stingrays and, finally, the signature symbol of fear—the great white shark. They act as motifs across pussy bow shirts and trenches, while digital prints of atmospheric tides trick the eyes into believing that it’s all tie-dye when splashed across a dress that doubles as a trench.",
        articleContent4: "Titled ‘In Bloom‘, the collection pushes the senses into overdrive when the bold orange section of the collection—that screams boiler suits worn by seamen—gives way to a devastatingly beautiful series of aquatic humanoid prints, naïve doodles and comic-like graphic images (another signature of Riccardo Tisci’s). The show comes to a glittery crescendo when square-cut crystal dresses, draped across torsos like the glistening flesh of a mermaid, bring the presentation to an eventual close.",
        articleContent5: "To many, the Burberry spring/summer 2021 show had all the trappings of Tisci’s past work, which may not be seen as new, but to me, it felt the most Tisci—the very essence of his DNA, that fine balance of mixing beauty, strength, fear and fragility coupled by that great sense of showmanship that has earned him a cult following right till this very day.",
        articleContent6: "",
        collectionLook1: "Assets/BurberryArticle/Burberry1.png",
        collectionLook2: "Assets/BurberryArticle/Burberry2.png",
        collectionLook3: "Assets/BurberryArticle/Burberry3.png",
        collectionLook4: "Assets/BurberryArticle/Burberry4.png",
        collectionLook5: "Assets/BurberryArticle/Burberry5.png",
        collectionLook6: "Assets/BurberryArticle/Burberry6.png",
        collectionLook7: "Assets/BurberryArticle/Burberry7.png",
        collectionLook8: "Assets/BurberryArticle/Burberry8.png"

    }]

    //checks the window url to determine which mode is activated before loading appropriate css file.
    if(window.location.href.indexOf("&mode=night") > -1) {
        //if night mode is activated.
        document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/generalNight.css">'
        document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/articleNight.css">' 
    } else {
        //if light mode is activated
        document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/general.css">'
        document.querySelector("head").innerHTML += '<link rel="stylesheet" href="stylesheets/article.css">'
    }

    var url = window.location.search
    const urlParams = new URLSearchParams(url)
    var articleIndex = urlParams.get("index")

    //generates the requested article based of the index stored in the window url.
    generateArticle(articleIndex)

    function generateArticle(index) {

        //gathers template from article.html.
        const templateTitleSource = document.getElementById("templateTitle").innerHTML
        const templateBodySource = document.getElementById("templateBody").innerHTML
        const templateCollectionSource = document.getElementById("templateCollection").innerHTML

        //compiling and injecting the requested article.
        var templateTitle = Handlebars.compile(templateTitleSource)
        var templateBody = Handlebars.compile(templateBodySource)
        var templateCollection = Handlebars.compile(templateCollectionSource)

        var compiledTitle = templateTitle(articleInfo[index])
        var compiledBody = templateBody(articleInfo[index])
        var compiledCollection = templateCollection(articleInfo[index])

        //pushes compiled article
        document.getElementById("outputTitle").innerHTML = compiledTitle
        document.getElementById("outputBody").innerHTML = compiledBody
        document.getElementById("outputCollection").innerHTML = compiledCollection
    }

})
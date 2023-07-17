
// Object to store the point values for each answer
var scores = {};

// Function to update the score
function updateScore(selectElement) {
    var value = selectElement.value;
    var question = selectElement.id;
    scores[question] = value;
}

// Function to calculate the results
function calculateResults(event) {
    event.preventDefault();
    var counts = {};
    for (var question in scores) {
        var value = scores[question];
        if (value in counts) {
            counts[value]++;
        } else {
            counts[value] = 1;
        }
    }
    var maxCount = 0;
    var maxArtMovement = "";
    for (var artMovement in counts) {
        if (counts[artMovement] > maxCount) {
            maxCount = counts[artMovement];
            maxArtMovement = artMovement;
        }

    var propertyName = mapArtMovementToPropertyName(maxArtMovement);
    var fashionItem = fashionItems[propertyName];
    var bookSuggestion = bookSuggestions[propertyName];
    }

    var result = document.getElementById("result");
    result.innerHTML = "Your art movement is: " + maxArtMovement;

    function mapArtMovementToPropertyName(artMovement) {
    switch (artMovement) {
        case "Ancient Art (Egyptian, Greek, Roman, etc.)":
            return "Ancient Art (Egyptian, Greek, Roman, etc.)";
        case "Gothic Art":
            return "Gothic Art";
        case "Renaissance Art":
            return "Renaissance Art";
        // Add the rest of the cases here...
        default:
            return null;
    }
}
    //var fashionItem = fashionItems[maxArtMovement];
    //result.innerHTML += "<br>Your fashion item is: " + fashionItem;

    //var bookSuggestion = bookSuggestions[maxArtMovement];
    //result.innerHTML += "<br>Your book suggestion is: " + bookSuggestion;
    // Add the fashion item and book suggestion here

    //var fashionItem = fashionItems[maxArtMovement];
    //result.innerHTML += "<br>Your fashion item is: <a href='" + fashionItem.link + "'><img src='" + fashionItem.image + "' alt='" + fashionItem.item + "'>" + fashionItem.item + "</a>";
    //var bookSuggestion = bookSuggestions[maxArtMovement];
    //result.innerHTML += "<br>Your book suggestion is: <a href='" + bookSuggestion.link + "'><img src='" + bookSuggestion.image + "' alt='" + bookSuggestion.book + "'>" + bookSuggestion.book + "</a>";

//}
var fashionItem = fashionItems[maxArtMovement];
result.innerHTML += 
"<div>Your fashion item is: </div><div><a href='" + 
fashionItem.link + 
"'><img src='" + 
fashionItem.image + 
"' alt='" + 
fashionItem.image2 + 
"' alt='" +
fashionItem.item + "'></a></div><div><a href='" + 
fashionItem.link + "'>" + 
fashionItem.item + "</a></div>";
var bookSuggestion = bookSuggestions[maxArtMovement];
result.innerHTML += 
"<div>Your book suggestion is: </div><div><a href='" + 
bookSuggestion.link + "'><img src='" + 
bookSuggestion.image + 
"' alt='" + bookSuggestion.book + "'></a></div><div><a href='" + 
bookSuggestion.link + "'>" + 
bookSuggestion.book + "</a></div>";

}

// Add an event listener to the form
var form = document.getElementById("quiz");
form.addEventListener("submit", calculateResults);

var fashionItems = {
    "Ancient Art (Egyptian, Greek, Roman, etc.)": {
        "item": "Toga and sandals",
        "image": "images/toga-small.png", 
        "image2": "images/Toga.jpg", 
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Gothic Art": {
        "item": "Long, flowing robes and intricate jewelry",
        "image": "images/gothic-small.png",
        "image2": "images/Gothic.jpg",
        "link": "https://us.shein.com/Scarlet-Darkness-Lace-Trim-Two-Tone-Skirt-p-11195538-cat-1732.html?url_from=gpt"
    },
    "Renaissance Art": {
        "item": "Elegant dresses and suits with ruffles",
        "image": "images/renaissance-small.png",
        "image2": "images/renaissance.jpg",
        "link": "https://us.shein.com/SHEIN-VCAY-Ditsy-Floral-Print-Flounce-Sleeve-Shirred-Dress-p-10729608-cat-1727.html?url_from=gpt"
    },
    "Baroque Art": {
        "item": "Extravagant, ornate clothing and accessories",
        "image": "images/baroque-small.png",
        "image2": "images/Baroque.jpg",
        "link": "https://us.shein.com/SHEIN-LUNE-Paisley-Scarf-Print-Surplice-Neck-Belted-Dress-p-11520690-cat-1727.html?url_from=gpt"
    },
    "Romanticism": {
        "item": "Flowy, ethereal dresses",
        "image": "images/romanticism-small.png",
        "image2": "images/romanticism.jpg",
        "link": "https://us.shein.com/SHEIN-MOD-Floral-Print-Lace-Up-Corset-Detail-Ruched-Bust-Dress-p-12360026-cat-1727.html?url_from=gpt"
    },
    "Impressionism": {
        "item": "Casual, comfortable clothing in light colors",
        "image": "images/impressionism-small.png",
        "image2": "images/impressionism.jpg",
        "link": "https://us.shein.com/DAZY-High-Waist-Plicated-Detail-Pants-p-14461491-cat-1740.html?url_from=gpt"
    },
    "Post-Impressionism": {
        "item": "Bold, colorful prints",
        "image": "images/post-impression-small-file.png",
        "image2": "images/post impressionism.jpg",
        "link": "https://us.shein.com/SHEIN-VCAY-Allover-Floral-Print-Cami-Dress-p-12603796-cat-1727.html?url_from=gpt"
    },
    "Cubism": {
        "item": "Geometric clothing and accessories",
        "image": "images/cubism-small.png",
        "image2": "images/cubism-dress.png",
        "link": "https://us.shein.com/SHEIN-MOD-Solid-Lace-Up-Cami-Dress-p-15331161-cat-1727.html?url_from=gpt&main_attr=27_1000119&mallCode=1"
    },
    "Surrealism": {
        "item": "Quirky, unexpected combinations and accessories",
        "image": "images/surrealism-small.png",
        "image2": "images/surrealism-hat.jpg",
        "link": "https://us.shein.com/Wide-Brim-Straw-Hat-p-13441884-cat-5903.html?url_from=gpt"
    },
    "Abstract Expressionism": {
        "item": "Freestyle, anything that makes you feel good",
        "image": "images/abstract-expressionism-small.png",
        "image2": "images/abstract-expressionism-dress.jpg",
        "link": "https://us.shein.com/SHEIN-VCAY-Geo-Print-Shirred-Back-Cami-Dress-p-15825847-cat-1727.html?url_from=gpt"
    },
    "Pop Art": {
        "item": "Bright, bold colors and graphic prints",
        "image": "images/pop-art-small.png",
        "image2": "images/pop-art.jpg",
        "link": "https://us.shein.com/SHEIN-LUNE-Allover-Print-Drop-Shoulder-Overcoat-p-11930666-cat-3051.html?url_from=gpt"
    },
    "Contemporary Art": {
        "item": "Minimalist, modern clothing",
        "image": "images/contemporary-art-small.png",
        "image2": "images/contemporary-art-gown.jpg",
        "link": "https://us.shein.com/MIUSOL-Floral-Lace-Bodice-Chiffon-Ribbon-Waist-Maxi-Formal-Dress-p-1381822-cat-5361.html?url_from=gpt"
    }
};

var bookSuggestions = {
    "Ancient Art (Egyptian, Greek, Roman, etc.)": {
        "book": "The Egyptian Book of the Dead",
        "image": "https://m.media-amazon.com/images/I/91YvW5cIRlL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Egyptian-Book-Dead-Integrated-Full-Color/dp/1452144389/ref=sr_1_1?keywords=The+Egyptian+Book+of+the+Dead&qid=1689550900&sr=8-1&tag=alproviste07-20"
    },
    "Gothic Art": {
        "book": "The Divine Comedy by Dante Alighieri",
        "image": "https://m.media-amazon.com/images/I/910RVMMAJpL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Divine-Comedy-Inferno-Purgatorio-Paradiso/dp/0451208633/ref=sr_1_1?keywords=The+Divine+Comedy+by+Dante+Alighieri&qid=1689550923&sr=8-1&tag=alproviste07-20"
    },
    "Renaissance Art": {
        "book": "The Birth of Venus by Sarah Dunant",
        "image": "https://m.media-amazon.com/images/I/913CkKNvWoL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Birth-Venus-Novel-Readers-Circle/dp/0812968972/ref=sr_1_1?keywords=The+Birth+of+Venus+by+Sarah+Dunant&qid=1689550951&sr=8-1&tag=alproviste07-20"
    },
    "Baroque Art": {
        "book": "The Girl with the Pearl Earring by Tracy Chevalier",
        "image": "https://m.media-amazon.com/images/I/91Xg3PAEfuL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Girl-Pearl-Earring-Tracy-Chevalier/dp/0452282152/ref=sr_1_1?keywords=The+Girl+with+the+Pearl+Earring+by+Tracy+Chevalier&qid=1689550974&sr=8-1&tag=alproviste07-20"
    },
    "Romanticism": {
        "book": "Frankenstein by Mary Shelley",
        "image": "https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Frankenstein-Mary-Shelley/dp/1512308056/ref=sr_1_1?keywords=Frankenstein+by+Mary+Shelley&qid=1689550994&sr=8-1&tag=alproviste07-20"
    },
    "Impressionism": {
        "book": "Claude & Camille by Stephanie Cowell",
        "image": "https://m.media-amazon.com/images/I/61CUkSl49zL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNTg0NTI2MzUwODM5Mjk1OjE2ODk1NTEwMTI6c3BfYXRmOjIwMDE3Mjg4NTUyNjU5ODo6MDo6&url=%2FAstro-School-Project-Claude-Jones%2Fdp%2F1733843949%2Fref%3Dsr_1_1_sspa%3Fkeywords%3DClaude%26qid%3D1689551012%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&tag=alproviste07-20"
    },
    "Post-Impressionism": {
        "book": "The Yellow House: Van Gogh, Gauguin, and Nine Turbulent Weeks in Arles by Martin Gayford",
        "image": "https://m.media-amazon.com/images/I/81nYqxcVIzL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Yellow-House-Gauguin-Turbulent-Provence/dp/0618990585/ref=sr_1_1?keywords=The+Yellow+House%3A+Van+Gogh%2C+Gauguin%2C+and+Nine+Turbulent+Weeks+in+Arles+by+Martin+Gayford&qid=1689551042&sr=8-1&tag=alproviste07-20"
    },
    "Cubism": {
        "book": "The Cubist Epoch by Douglas Cooper",
        "image": "https://m.media-amazon.com/images/I/71pMHlbDTpL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Cubist-Epoch-Douglas-Cooper/dp/0875870414/ref=sr_1_1?keywords=The+Cubist+Epoch+by+Douglas+Cooper&qid=1689551067&sr=8-1&tag=alproviste07-20"
    },
    "Surrealism": {
        "book": "Nadja by Andre Breton",
        "image": "https://m.media-amazon.com/images/I/41Ut+n1lzXL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Nadja-Andr%C3%A9-Breton/dp/0802150268/ref=sr_1_1?keywords=Nadja+by+Andre+Breton&qid=1689551088&sr=8-1&tag=alproviste07-20"
    },
    "Abstract Expressionism": {
        "book": "De Kooning: An American Master by Mark Stevens and Annalyn Swan",
        "image": "https://m.media-amazon.com/images/I/916ohXhp0SL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Kooning-American-Master-Mark-Stevens/dp/0375711163/ref=sr_1_2?keywords=De+Kooning%3A+An+American+Master+by+Mark+Stevens+and+Annalyn+Swan&qid=1689551115&sr=8-2&tag=alproviste07-20"
    },
    "Pop Art": {
        "book": "Pop Art: A Critical History by Steven Henry Madoff",
        "image": "https://m.media-amazon.com/images/I/61Z3K9Y1qiL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Pop-Art-Critical-Documents-Twentieth-Century/dp/0520212436/ref=sr_1_1?keywords=Pop+Art%3A+A+Critical+History+by+Steven+Henry+Madoff&qid=1689551145&sr=8-1&tag=alproviste07-20"
    },
    "Contemporary Art": {
        "book": "Seven Days in the Art World by Sarah Thornton",
        "image": "https://m.media-amazon.com/images/I/61TgVEBVUlL._AC_UY218_.jpg",
        "link": "https://www.amazon.com/Seven-Days-World-Sarah-Thornton/dp/039333712X/ref=sr_1_1?keywords=Seven+Days+in+the+Art+World+by+Sarah+Thornton&qid=1689551196&sr=8-1&tag=alproviste07-20"
    }
};




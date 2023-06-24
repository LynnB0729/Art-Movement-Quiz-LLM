
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
    }
    var result = document.getElementById("result");
    result.innerHTML = "Your art movement is: " + maxArtMovement;

    //var fashionItem = fashionItems[maxArtMovement];
    //result.innerHTML += "<br>Your fashion item is: " + fashionItem;

    //var bookSuggestion = bookSuggestions[maxArtMovement];
    //result.innerHTML += "<br>Your book suggestion is: " + bookSuggestion;
    // Add the fashion item and book suggestion here

    var fashionItem = fashionItems[maxArtMovement];
    result.innerHTML += "<br>Your fashion item is: <a href='" + fashionItem.link + "'><img src='" + fashionItem.image + "' alt='" + fashionItem.item + "'>" + fashionItem.item + "</a>";
    var bookSuggestion = bookSuggestions[maxArtMovement];
    result.innerHTML += "<br>Your book suggestion is: <a href='" + bookSuggestion.link + "'><img src='" + bookSuggestion.image + "' alt='" + bookSuggestion.book + "'>" + bookSuggestion.book + "</a>";

}

// Add an event listener to the form
var form = document.getElementById("quiz");
form.addEventListener("submit", calculateResults);

var fashionItems = {
    "Ancient Art (Egyptian, Greek, Roman, etc.)": {
        "item": "Toga and sandals",
        "image": "https://example.com/images/toga_and_sandals.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Gothic Art": {
        "item": "Long, flowing robes and intricate jewelry",
        "image": "https://example.com/images/gothic_robe.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Renaissance Art": {
        "item": "Elegant dresses and suits with ruffles",
        "image": "https://example.com/images/renaissance_dress.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Baroque Art": {
        "item": "Extravagant, ornate clothing and accessories",
        "image": "https://example.com/images/baroque_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Romanticism": {
        "item": "Flowy, ethereal dresses",
        "image": "https://example.com/images/romanticism_dress.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Impressionism": {
        "item": "Casual, comfortable clothing in light colors",
        "image": "https://example.com/images/impressionism_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Post-Impressionism": {
        "item": "Bold, colorful prints",
        "image": "https://example.com/images/post_impressionism_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Cubism": {
        "item": "Geometric clothing and accessories",
        "image": "https://example.com/images/cubism_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Surrealism": {
        "item": "Quirky, unexpected combinations and accessories",
        "image": "https://example.com/images/surrealism_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Abstract Expressionism": {
        "item": "Freestyle, anything that makes you feel good",
        "image": "https://example.com/images/abstract_expressionism_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Pop Art": {
        "item": "Bright, bold colors and graphic prints",
        "image": "https://example.com/images/pop_art_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Contemporary Art": {
        "item": "Minimalist, modern clothing",
        "image": "https://example.com/images/contemporary_art_clothing.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    }
};


var bookSuggestions = {
    "Ancient Art (Egyptian, Greek, Roman, etc.)": {
        "book": "The Egyptian Book of the Dead",
        "image": "https://example.com/images/egyptian_book.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Gothic Art": {
        "book": "The Divine Comedy by Dante Alighieri",
        "image": "https://example.com/images/divine_comedy.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Renaissance Art": {
        "book": "The Birth of Venus by Sarah Dunant",
        "image": "https://example.com/images/birth_of_venus.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Baroque Art": {
        "book": "The Girl with the Pearl Earring by Tracy Chevalier",
        "image": "https://example.com/images/girl_with_pearl_earring.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Romanticism": {
        "book": "Frankenstein by Mary Shelley",
        "image": "https://example.com/images/frankenstein.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Impressionism": {
        "book": "Claude & Camille by Stephanie Cowell",
        "image": "https://example.com/images/claude_and_camille.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Post-Impressionism": {
        "book": "The Yellow House: Van Gogh, Gauguin, and Nine Turbulent Weeks in Arles by Martin Gayford",
        "image": "https://example.com/images/yellow_house.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Cubism": {
        "book": "The Cubist Epoch by Douglas Cooper",
        "image": "https://example.com/images/cubist_epoch.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Surrealism": {
        "book": "Nadja by Andre Breton",
        "image": "https://example.com/images/nadja.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Abstract Expressionism": {
        "book": "De Kooning: An American Master by Mark Stevens and Annalyn Swan",
        "image": "https://example.com/images/de_kooning.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Pop Art": {
        "book": "Pop Art: A Critical History by Steven Henry Madoff",
        "image": "https://example.com/images/pop_art.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    },
    "Contemporary Art": {
        "book": "Seven Days in the Art World by Sarah Thornton",
        "image": "https://example.com/images/seven_days.jpg",
        "link": "https://www.amazon.com/dp/B07H9HJLG5?tag=your_affiliate_id"
    }
};




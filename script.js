function new_quote() {
    var quotes = [
        ["PIZZAAAAAAA", "The pizza monster, 1990"],
        ["There is no such thing as too much cheese on a pizza", "Aristoteles, 360bc"],
        ["No pizza is like take-away pizza", "Abraham Lincoln, 1863"],
        ["Let them eat pizza", "Marie Antoinette, 1789"],
        ["I came, I saw, I ate pizza", "Julius Ceasar, 44bc"],
        ["Cirka kvarter!", "Kongens Gate Pizza og Grill, for 15 minutter siden"],
        ["Det er bare vegetarianere som ikke lar seg friste", "Grandiosa Lørdagspizza, 2006"],
        ["If pizza is all you have, you have everything", "Jesus, 30"],
        ["Pizza is like, the best", "Winston Churchill, 1944"],
        ["Pizza is better than rockets", "Elon Musk, 2017"]
    ];

    var i = Math.floor(Math.random() * (quotes.length-1));
    var quote = document.getElementsByClassName("quote")[0];
    quote.style.opacity = 0;
    quote.style.animation = "fadeout 1s";
    window.setTimeout(function(){
        document.getElementById("quote").innerHTML = "\"" + quotes[i][0] + "\"";
        document.getElementById("person").innerHTML = "- " + quotes[i][1];
        quote.style.opacity = 1;
        quote.style.animation = "fadein 1s";
    },500)
}

function fade_in() {
    var element = document.getElementById("test");
}

window.setInterval(new_quote, 5000);
fade_in();


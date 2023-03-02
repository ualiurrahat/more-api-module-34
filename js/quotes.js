const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}




const displayQuote = (quote) => {
    const quotesSection = document.getElementById("quote");
    console.log(quote);
    quotesSection.innerHTML = quote.quote;
}


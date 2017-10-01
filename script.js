var QuoteBase;
var UsedQuotes = new Array(5);

function showQuote(value, index, ar) {
    br = document.createElement("br");
    br.className = "quote";
    document.body.appendChild(br);
    var quote = document.createElement('div');
    quote.className = "quote";
    quote.innerHTML = "\"" + QuoteBase[value].quoteText + "\" - " + QuoteBase[value].quoteAuthor;
    document.body.appendChild(quote);
}

function getRandom(max)
{
    return parseInt((Math.random() * (max + 1)), 10);
}

function randomizeQuotes()
{
    for (var i = 0; i < UsedQuotes.length; i++)
    {
        UsedQuotes[i] = getRandom(QuoteBase.length);
    }
    UsedQuotes.forEach(showQuote);
}

function showQuoteOfTheDay()
{
    var quote = document.getElementById('quoteOfTheDay');
    var index = getRandom(QuoteBase.length);
    quote.innerHTML = "\"" + QuoteBase[index].quoteText + "\" - " + QuoteBase[index].quoteAuthor;
}

function loadQuotes()
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", false);
    request.send(null)
    QuoteBase = JSON.parse(request.responseText);
    randomizeQuotes();
}

function sortQuotes()
{
    for (var i = 0; i < UsedQuotes.length; i++)
    {
        for (var j = i + 1; j < UsedQuotes.length; j++)
        {
            if (QuoteBase[UsedQuotes[i]].quoteText > QuoteBase[UsedQuotes[j]].quoteText)
                {
                    var tmp = UsedQuotes[j];
                    UsedQuotes[j] = UsedQuotes[i];
                    UsedQuotes[i] = tmp;
                }
        }
    }
    var elements = document.getElementsByClassName('quote');
    var mainQuote = document.getElementById('quoteOfTheDay');
    for(var i = 0; i < elements.length; i++) {
        if (elements[i] != mainQuote)
            elements[i].parentNode.removeChild(elements[i]);
    }
    //UsedQuotes.forEach(showQuote);
}



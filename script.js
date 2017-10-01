var QuoteBase;
var UsedQuotes = new Array(5);

function showQuote(value, index, ar)
{
    var block = document.getElementById('randomQuotesBlock');
    var br = document.createElement("br");
    var quote = document.createElement('div');
    quote.className = "quote";
    quote.innerHTML = "\"" + QuoteBase[value].quoteText + "\" - " + QuoteBase[value].quoteAuthor;
    block.appendChild(quote);
    block.appendChild(br);
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
    clearRandomQuotes();
    UsedQuotes.forEach(showQuote);
}

function clearRandomQuotes()
{
    var block = document.getElementById('randomQuotesBlock');

    while (block.firstChild) {
        block.removeChild(block.firstChild);
    }
}

function showQuoteOfTheDay()
{
    var quote = document.getElementById('quoteOfTheDay');
    var index = getRandom(QuoteBase.length - 1);
    quote.innerHTML = "\"" + QuoteBase[index].quoteText + "\" - " + QuoteBase[index].quoteAuthor;
}

function loadQuotes()
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", false);
    request.send(null);
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
    clearRandomQuotes();
    UsedQuotes.forEach(showQuote);
}



const quotes = [
    {
        quote: "There is no mistaking a real book when one meets it. It is like falling in love.",
        author: "Christopher Morley",
    },
    {
        quote: "Learn as much by writing as by reading.",
        author: "Lord Acton",
    },
    {
        quote: "Properly, we should read for power. Man reading should be man intensely alive. The book should be a ball of light in one's hand.",
        author: "Ezra Pound",
    },
    {
        quote: "Some books are undeservedly forgotten; none are undeservedly remembered.",
        author: "W. H. Auden",
    },
    {
        quote: "Life-transforming ideas have always come to me through books.",
        author: "Bell Hooks",
    },
    {
        quote: "A book that is shut is but a block.",
        author: "Thomas Fuller",
    },
    {
        quote: "Reading is to the mind what exercise is to the body.",
        author: "Sir Richard Steele",
    },
    {
        quote: "The love of learning, the sequestered nooks, And all the sweet serenity of books.",
        author: "Henry Wadsworth Longfellow",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `🎙️ ${todaysQuote.quote}`;
author.innerText = `/ 🧔 ${todaysQuote.author}`;

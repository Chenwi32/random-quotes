const quotes = [
{
    name: "Stephen king",
    quote: "Get busy living or get busy dying",
},
{
    name: 'John F.Kennedy',
    quote: 'Those who dare to fail miserably can achieve greately'
},
{
name: "Abraham lincoln",
quote: `I'm a success today because I had a friend who believed 
       in me and I didn't have the heart to let him down,`
},

{
    name: 'Leonardo Da Vinci',
    quote: `It had long since came to my attention that people of
            accomplishment rarely sat back and let things happen to them.
            They went out and happened to things`
},

{
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be'
}

]

const container = document.querySelector('.container')
const quoteAuthor = document.querySelector('#quote-author')
const quote = document.querySelector('#quote')
const quoteBtn = document.querySelector('#quotebtn')
const body = document.querySelector('body')

quoteBtn.addEventListener('click', displayQuoet)

function displayQuoet(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[random].quote
    quoteAuthor.innerHTML = quotes[random].name
}



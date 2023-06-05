let quote = document.querySelector(".quote");
let btn = document.querySelector('#new-quote');
let person = document.querySelector(".person");

let quotes = [
    {
        quote: `"Our lives begin to end the day we become silent about things that matter."`,
        person: `"Martin Luther King, Jr."`
    },
    {
        quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
        person: `"Dalai Lama"`
    },
    {
        quote: `"The journey of a thousand miles begins with one step."`,
        person: `"Lao Tzu"`
    },
    {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        person: `"Benjamin Franklin"`
    },
    {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `"Oprah Winfrey"`
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life."`,
        person: `"Steve Jobs"`
    },
    {
        quote: `"It does not matter how slowly you go as long as you do not stop."`,
        person: `"Confucius"`
    }
];

btn.addEventListener('click', function() {
    let randomValue = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomValue].quote;
    person.innerText = quotes[randomValue].person;
});

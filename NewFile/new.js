let quote =document.getElementById('quote')
let author =document.getElementById('author')

let quotes = {
    "-Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",

    "-Mahatma Gandhi": "You must be the change you wish to see in the world.",

    "-Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",

    "-Eleanor Roosevelt": "The future belongs to those who believe in the beauty of their dreams.",

    "-Oprah Winfrey": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",

    "-John Lennon": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",

    "-Thomas A. Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up.",

    "—Will Smith": "Money and success don't change people; they merely amplify what is already there.",

    "-Frank Sinatra": "The big lesson in life, baby, is never be scared of anyone or anything.",

    "— Hillary Clinton": "Do all the good you can, for all the people you can, in all the ways you can, as long as you can."
}
let colors= ['red','yellow','indigo','aliceblue','violet','navyblue','lightgreen','purple','lightgray','pink']

setInterval(function(){ 
 let random_colors =colors[Math.floor(Math.random()* colors.length)]
 document.body.style.backgroundColor= random_colors
let new_author =Object.keys(quotes)
let random_qoute =new_author[Math.floor(Math.random()* new_author.length)]

let new_quote =quotes[random_qoute]
    quote.innerHTML= new_quote
    author.innerHTML= random_qoute
},4000)
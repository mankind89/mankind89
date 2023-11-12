let texts =document.getElementById('text')
let buttons =document.getElementById('button')

let joke ={
   'a': 'I was going to tell you a joke about boxing but I forgot the punch line.',
   'b': 'What month is the shortest of the year? May, it only has three letters',
   'c': "What did the snail who was riding on the turtle's back say? Wheeeee!",
   'd': "What do you call a lazy kangaroo? A pouch potato.",
   'e': "Why do we tell actors to 'break a leg?' Because every play has a cast",
   "f": "What did one plate say to the other plate? Dinner's on me.",
   "g": "What do you call a pig that does karate? A pork chop.",
   "h": "What happens when a strawberry gets run over crossing the street? Traffic jam.",
   "i": "Why did the cow jump over the moon? The farmer had cold hands.",
   "j": "How does an octopus go into battle? Well-armed.",
   "k": "How did the student feel when he learned about electricity? Totally shocked."
}
buttons.addEventListener('click', ()=> {
    let jokes =Object.values(joke);
    let random_joke =jokes[Math.floor(Math.random() * jokes.length)]
    
    texts.innerHTML = random_joke
})
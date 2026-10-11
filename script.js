const jokes = [
  "I invented a new word: Plagiarism.",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear. Now I use my hands.",
  "Why don't programmers like nature? Too many bugs.",
  "Why do we tell actors to 'break a leg?' Because every play has a cast.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't scientists trust atoms? Because they make up everything.",
  "Why did the math book look sad? Because it had too many problems.",
  "I think therefore I am. So you exist because I think, therefore you are. Or you exist because you think, therefore you are.",
]

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  jokeEl.innerHTML = jokes[randomIndex]
})



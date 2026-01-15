const jokes = [
    "Why did HTML break up with CSS? Too many style issues.",
    "CSS and JavaScript got into a fight… JavaScript won because it had more arguments.",
    "HTML is the skeleton, CSS is the outfit, and JavaScript is the personality.",
    "Why was the JavaScript developer sad? Because they didn’t know how to ‘null’ their feelings.",
    "CSS is easy… until it isn’t."
];

const jokeBtn = document.getElementById("jokeBtn");
const jokeOutput = document.getElementById("jokeOutput");

jokeBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeOutput.textContent = jokes[randomIndex];
});
const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";

const targetElement = document.getElementById('target');
const userInputElement = document.getElementById('user-input');
const messageElement = document.getElementById('message');

let targetNumber = '';
let userTyped = '';
let timer = null;
let max_number = 10;
let score = 0;

let top_score = 0;


function changeTheme() {
    console.log("change theme");
    const theme = document.getElementById("theme");
    if (theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
    } else {
        theme.setAttribute("href", lightTheme);
    }
}


function generateNumber() {
    targetNumber = String(Math.floor(Math.random() * max_number));
    targetElement.textContent = targetNumber;
}

function checkInput() {
    userTyped += userInputElement.value;

    if (userTyped === targetNumber) {
        userInputElement.value = '';
        score++;
        messageElement.textContent = 'Correct! ' + ' Score: ' + score;
        max_number *= 10;
        clearTimeout(timer);
        generateNumber();
        startTimer();
    }

    userTyped = '';
}

function startTimer() {
    timer = setTimeout(() => {
        userInputElement.value = '';

        if (top_score < score) {
            top_score = score;
        }
        if (max_number >= 1000) {
            score -= 2;
            max_number *= .001;
        }

        messageElement.textContent = 'Time\'s up!' + ' Score: ' + score + ' Top Score: ' + top_score;
        generateNumber();
        clearTimeout(timer);
        startTimer();
    }, 5000);

}

generateNumber();
userInputElement.addEventListener('keyup', checkInput);
startTimer();

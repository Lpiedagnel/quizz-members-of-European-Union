/***** VARIABLES ******/

// INSIDE THE DOCUMENT
const countriesCount = document.getElementById('countries-count')
const timer = document.getElementById('timer')
const startBtn = document.getElementById('start-btn')
const instructionsLabel = document.getElementById('instructions')
const commentary = document.getElementById('commentary')
let answersInput = document.getElementById('answers-input')
const answersContainer = document.getElementById('answers-container')

// OUTSIDE THE DOCUMENT
const correction = ['ALLEMAGNE', 'AUTRICHE', 'BELGIQUE', 'BULGARIE', 'CHYPRE', 'CROATIE', 'DANEMARK', 'ESPAGNE', 'ESTONIE', 'FINLANDE', 'FRANCE', 'GRÈCE', 'HONGRIE', 'IRLANDE', 'ITALIE', 'LETTONIE', 'LITUANIE', 'LUXEMBOURG', 'MALTE', 'PAYS-BAS', 'POLOGNE', 'PORTUGAL', 'RÉPUBLIQUE-TCHÈQUE', 'ROUMANIE', 'SLOVAQUIE', 'SLOVÉNIE', 'SUÈDE']
let answers = []
let time = 180


/****** FUNCTIONS *******/

/* START THE GAME */

// Event listener to start the game
startBtn.addEventListener('click', function() {
    startGame()
    setInterval(removeTime, 1000)
})

// Start game function
function startGame() {
    startBtn.classList.add('hidden')
    answersInput.classList.remove('hidden')
    instructionsLabel.classList.remove('hidden')
    answersInput.select()
    setTimeout(endGame, 181000)

    // Submit the response
    answersInput.addEventListener('input', submitWhileTyping)
}

// Remove time each second after start of the game
function removeTime() {
    // Convert 'time' to minutes and second
    let minutes = parseInt(time / 60, 10)
    let secondes = parseInt(time % 60, 10)

    // Add 0 with conditionals
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    // Render time and decrement while time > 0
    timer.innerText = `${minutes}:${secondes}`
    time = time <= 0 ? 0 : time - 1
}


/* SUBMIT, VERIFY AND RENDER FUNCTIONS */

// Functions for Submit
function submitWhileTyping() {
    verifiedAnswers(answersInput.value.toUpperCase(), correction, answers)
}

// Verified answers of the user
function verifiedAnswers(answersValue, correctionValue, alreadySubmit) {
    // Verified if a country is already submitted. If not ==> Verified if the value exist on correction array.
    if (alreadySubmit.some(e => e === answersValue)) {
        returnCommentary("Already Submitted")
    }
    else if (correctionValue.some(e => e === answersValue)) {
        returnCommentary("Good")
        answers.push(answersValue)
        renderCountries(answersValue)
        updateCountriesCount()
        answersInput.value = ""
        answersInput.select()
    }
}

// Return commentary
function returnCommentary(value) {
    if (value === "Good") {
        commentary.style.color = "green";
        commentary.innerText = "Bonne réponse ! =)"
    } else if (value === "Already Submitted") {
        commentary.style.color = "red";
        commentary.innerText = "Vous avez déjà mis ce pays."
    } 
}

// Render correct answers
function renderCountries(countryName) {
    answersContainer.innerHTML += `<div>${countryName}</div>`
}

// Update countries count
function updateCountriesCount() {
    countriesCount.innerText = answers.length
}


/* FINISH THE GAME */

// Endgame function
function endGame() {
    answersInput.classList.add('hidden')
    instructionsLabel.classList.add('hidden')
    endingMessage(answers.length)
    renderMissingCountries()
}

// Ending message
function endingMessage(score) {
    commentary.style.color = "black"
    commentary.style.margin = "30px"

    if (score <= 10) {
        commentary.innerHTML = `C'est fini ! Vous avez trouvé seulement ${score} pays de l'Union européenne. <a target="_blank" href="https://fr.wikipedia.org/wiki/Union_europ%C3%A9enne">N'hésitez pas à réviser pour améliorer votre score !</a>`
    } else if (score <= 20) {
        commentary.innerHTML = `C'est fini ! Vous avez trouvé ${score} pays de l'Union européenne. Ce n'est pas mauvais du tout mais vous pouvez <a target="_blank" href="https://fr.wikipedia.org/wiki/Union_europ%C3%A9enne">toujours améliorer votre score en révisant !</a>`
    } else if (score < 27) {
        commentary.innerHTML = `C'est fini ! Vous avez trouvé ${score} pays de l'Union européenne ! C'est un score impressionnant ! <a target="_blank" href="https://fr.wikipedia.org/wiki/Union_europ%C3%A9enne">Révisez un peu plus pour atteindre les 27 !</a>`
    } else {
        commentary.innerHTML = `Incroyable ! Vous avez trouvé les 27 pays de l'Union Européenne ! Toute mes félicitations !`
    }
}

// Render missing countries afer the game is finished
function renderMissingCountries() {
    for (let i = 0; i < correction.length; i++) {
        if (!answers.includes(correction[i])) {
            answersContainer.innerHTML += `<div style="color: green; font-weight: bold;">${correction[i]}</div>`
        }
    }
}
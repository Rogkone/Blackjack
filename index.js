let player = {
    name: "Simon",
    chips: 154
}
let firstCard
let secondCard
let cards = []
let sum
let hasBlackjack = false
let isAlive = false
let message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips + "€"
function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    isAlive = true
    sum = cards[0] + cards[1]
    renderGame()
}

function getCard() {
    return Math.floor(Math.random() * 13 + 1)
}

function getCardValue(cardValue) {
    if (cardValue > 10)
        return 10
    else if (cardValue === 1)
        return 11
    else
        return cardValue
}

function getRandomCard() {
    return getCardValue(getCard())
}

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have won!"
        hasBlackjack = true
    } else {
        message = "You have lost!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}
const adviceNumber = document.getElementById("advice-id")
const adviceQuote = document.getElementById("advice-quote")
const diceButton = document.getElementById("btn")

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const generateAdvice = async () => {
  const result = await fetchAdvice();
  const content = result.slip;
  adviceNumber.innerHTML = content.id;
  adviceQuote.innerHTML = content.advice;
}

diceButton.addEventListener("click", generateAdvice);

document.addEventListener('DOMContentLoaded', generateAdvice);

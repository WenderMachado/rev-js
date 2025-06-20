import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import switchTheme from "./switchTheme.js"

document.querySelectorAll(".charKey").forEach( function(charKeyBtn)  {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById('clear').addEventListener('click',  handleClearButton)
document.getElementById('equal').addEventListener('click', calculate)
// function calculate  abaixo -, chamada aqui por hosting
document.getElementById('input').addEventListener("keydown", handleTyping)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", switchTheme)
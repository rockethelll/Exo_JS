message = prompt("Bonjour, que puis-je faire pur vous ?")

acneBot = (message) => {
  if (message.endsWith('?')) {
    console.log('Ouais Ouais ...')
  }
  else if (message === message.toUpperCase() && message.length > 0) {
    console.log("Tu vas baisser d'un ton le nain !!!")
  }
  else if (message.includes('fortnite')) {
    console.log("On se fait une tite partie vite fait en soum soum ?")
  }
  else if (message.length == 0) {
    console.log('Tu es en PLS toi !!!')
  }
  else 
  console.log('Balek, RTVA !')
}

acneBot(message)

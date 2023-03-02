factorial = (num) => {
  let result = num
  if (num === 0 || num === 1)
    return 1
  while (num > 1) {
    num--
    result *= num
  }
  return result
}

result = prompt('Quel est le nombre dont tu veux calculer la factorielle ?')
console.log(`La factorielle de ${result} vaut ${factorial(result)}`)

//ou en utillisant la fonction existante dans JS :

// choice = prompt('Quel est le nombre dont tu veux calculer la factorielle ?')
// console.log(`La factorielle de ${choice} vaut ${factorial(choice)}`)
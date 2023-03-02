choice = prompt("Combien souhaites tu d'étages pour ta pyramide ?")
pyramide = (choice) => {
  for (i = 1; i <= choice; i++) {
      console.log(" ".repeat(choice - i) + "#".repeat(i))
  }
}

pyramide(choice)
dnaToProtein = (dna) => {
  proteinArray = []
  for (let i = 0; i < dna.length; i+=3) {
    codon = dna.slice(i, i + 3)
    if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG' || codon === 'AGU' || codon === 'AGC') {
      protein = 'Sérine'
      proteinArray.push(protein)
    } else if (codon === 'CCU' || codon === 'CCC' || codon === 'CCA' || codon === 'CCG') {
      protein = 'Proline'
      proteinArray.push(protein)
    } else if (codon === 'UUA' || codon === 'UUG') {
      protein = 'Leucine'
      proteinArray.push(protein)
    } else if ( codon === 'UUU' || codon === 'UUC') {
      protein = 'Phénylalanine'
      proteinArray.push(protein)
    } else if (codon === 'CGU' || codon === 'CGC' || codon === 'CGA' || codon === 'CGG' || codon === 'AGA' || codon === 'AGG') {
      protein = 'Arginine'
      proteinArray.push(protein)
    } else if ( codon === 'UAAU' || codon === 'UAC') {
      protein = 'Tyrosine'
      proteinArray.push(protein)
    }
  }
  console.log(`Votre ARN (${dna}) traduit en protéine : ${proteinArray}`)
}
dnaToProtein('UUACGCAGUAGA')
dnaToProtein('CCGUCGUUGCGCUACAGC')
dnaToProtein('CCUCGCCGGUACUUCUCG')
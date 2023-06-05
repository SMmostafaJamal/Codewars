function DNAStrand(dna) {
  //   declare a variable which concat the complementaryDNA
  let complementaryDNA = "";

  // loop each letter and check
  for (let i = 0; i < dna.length; i++) {
    //   if it's A then replace it with T or vice versa
    if (dna[i] === "A") complementaryDNA += "T";
    if (dna[i] === "T") complementaryDNA += "A";
    //   else if it's C replace with G or vice versa
    if (dna[i] === "C") complementaryDNA += "G";
    if (dna[i] === "G") complementaryDNA += "C";
  }

  //   return the data as string
  return complementaryDNA;
}

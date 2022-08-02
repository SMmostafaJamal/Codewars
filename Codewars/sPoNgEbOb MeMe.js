// P: Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
// R: string, sentence
// E: input:  "stop Making spongebob Memes!"
//    output: "StOp mAkInG SpOnGeBoB MeMeS!"
// P:
function spongeMeme(sentence) {
  let spongeSentence = ''
  for(let i = 0; i < sentence.length; i++){
    i % 2 == 0 ? spongeSentence += sentence[i].toUpperCase() :
                spongeSentence += sentence[i].toLowerCase()  

  }
  return spongeSentence
}
spongeMeme("stop Making spongebob Memes!")


var wordList = []
var talking = false
var currWord = ''
function myFunc() {
  Mousetrap.bind(regularKeys,function(e,c) {
    currWord = currWord.concat(c)
  })
  Mousetrap.bind(specialKeys,function(e,c) {
    var newWord = currWord
    currWord = ''
    addWord(newWord)
  })
}
function addWord(word) {
  wordList.push(word)
  if(wordList.length==1) {
    talking = true
    nextWord()
  }
}
function finishedWord() {
  wordList.splice(0,1)
  if(wordList.length>0) {
    nextWord()
  } else {
    talking = false
  }
}
// states
// list empty
// list not empty
  // talking
  // not talking
function nextWord() {
  console.log(talking,wordList)
  // if currently talking, do nothing
  // if(talking==true) {
  //   return
  // }
  // if not talking, begin talking
  // talking = true
  responsiveVoice.speak(wordList.join(' ')/*wordList[0]*/,'US English Male',{
    onend: finishedWord
  });
}

var regularKeys = [
  '~','!','@','#','$','%','^','&','*','(',')','_','+',
  '`','1','2','3','4','5','6','7','8','9','0','-','=',
  'Q','W','E','R','T','Y','U','I','O','P','{','}','|',
  'q','w','e','r','t','y','u','i','o','p','[',']','\\',
  'A','S','D','F','G','H','J','K','L',':','"',
  'a','s','d','f','g','h','j','k','l',';','\'',
  'Z','X','C','V','B','N','M','<','>','?',
  'z','x','c','v','b','n','m',',','.','/'
]
var specialKeys = ['space']
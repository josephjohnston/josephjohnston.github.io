
var nextPhrase = ''
var talking = false
var currWord = ''
var box
window.onload = function() {
  box = document.getElementsByTagName('input')[0]
  box.style.position = 'absolute'
  box.style.left = window.innerWidth*2/12
  box.style.width = window.innerWidth*8/12
  box.style.top = window.innerHeight*5/12
}
function myFunc() {
  Mousetrap.bind(regularKeys,function(e,c) {
    currWord = currWord.concat(c)
  })
  Mousetrap.bind(specialKeys,function(e,c) {
    var newWord = currWord
    currWord = ''
    addWord(newWord)
  })
  box.onkeyup = function(e) {
    if(e.code=='Enter') {
      addWord(box.value)
      box.value = ''
    }
  }
}
function addWord(word) {
  nextPhrase = nextPhrase.concat(' '+word)
  if(talking) {
    return
  } else {
    talking = true
    sayNextPhrase()
  }
}
function finishedWord() {
  if(nextPhrase!=='') {
    sayNextPhrase()
  } else {
    talking = false
  }
}
function sayNextPhrase() {
  if(nextPhrase.substring(0,1)==' ') {
    nextPhrase = nextPhrase.substring(1)
  }
  responsiveVoice.speak(nextPhrase,'US English Male',{
    onend: finishedWord
  });
  nextPhrase = ''
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
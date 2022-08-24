
function getKeys(){
  var originalMessage = document.getElementById("Original_Message").value;
  var key = document.getElementById("Encryption_Key").value;

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

  //turning initial message string into array
  const messageArray = originalMessage.split("");
  console.log(messageArray);

  
  for (let i = 0; i === messageArray.length; i++) {
    
  }
};
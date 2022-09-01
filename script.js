 function getKeys() {
  //tar verdiene fra input fields
  let originalMessage = document.getElementById("Original_Message").value;
  let key = document.getElementById("Encryption_Key").value;
   
  //garanterer at key er et nummer
  key = Number(key);
  
  let encryptedMessage = "";

  //gjør originalMessage til en array
  let messageArray = [...originalMessage]
  
  const alphabet = "}jNT90cO]PaIJMÅ[CZræø123diz7K!#¤%os(pyh{8WEefglmDUBtVGHnuk)=+@£$vXY ÆØQAbq45RSwx&/FLå6";
  
  //For løkke som krypterer selve meldingen
  for (let i = 0; i < messageArray.length; i++) {
    let letter = messageArray[i];
    let encryptedIndex = alphabet.indexOf(letter) + key;
    encryptedIndex = Number(encryptedIndex);
    if (encryptedIndex > alphabet.length - 1) {
      encryptedIndex -= alphabet.length;
    } else if (encryptedIndex < 0) {
      encryptedIndex += alphabet.length;
    }
    encryptedMessage += alphabet.charAt(encryptedIndex);
    
    console.log(encryptedMessage);
    document.getElementById('finishedMessage').innerText = encryptedMessage;

  }
}
//Funksjon som setter verdi på inputfeltene til null isteden for en reaload av siden.
function clearChache() {
  document.getElementById('Original_Message').value = ('');
  document.getElementById('Encryption_Key').value = ('');
}
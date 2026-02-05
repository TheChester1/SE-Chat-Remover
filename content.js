// Find the chat window by div id and delete element.
const divToDelete = document.getElementById('wp_chat');

// If div is found, remove it from the page
if (divToDelete) {
  divToDelete.parentNode.removeChild(divToDelete);
  console.log('Target div deleted.');
 } else {
   console.log('Target div not found.');
  }

// Find the Theater Mode Button, iframe window, listen for mouse click and resize window.
const getbtn = document.getElementById('theater-mode-btn');
const iframe = document.getElementById('wp_player');

if (getbtn) {
  getbtn.addEventListener("click", function() { iframe.style.width = "1660px"});
  console.log('Video resized to 1660px.');
 } 
  else {
   console.log('Video did not resize.');
   }



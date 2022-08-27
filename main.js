// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");
modal.classList.add("hidden")
function likeBtn(event) {
    const heart = event.target;
    mimicServerCall()
        .then(() => {
            if (heart.innerText !== FULL_HEART) {
                heart.innerText = FULL_HEART;
                heart.classList = "activated-heart";
            } else {
                heart.innerText = EMPTY_HEART;
                heart.classList.remove("activated-heart")
            }
        })
        .catch((error) => {
          modal.classList.remove("hidden")
          const modal = document.getElementById("modal");
          modal.classList = "";
          modal.querySelector('h2').innerText = error;
          setTimeout(() => {modal.classList.add("hidden")}, 3000);
        });
}

for (const glyph of hearts) {
    glyph.addEventListener("click", likeBtn);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

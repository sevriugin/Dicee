window.addEventListener('load', main)

function main() {
  document.querySelector("button").addEventListener('click', function() {
    roll();
  });
}

function roll() {
  var max = 10;
  var n = 0;

  var button = document.querySelector("button");
  var left = document.getElementById("dice-left-img");
  var right = document.getElementById("dice-right-img");
  var msg = document.getElementsByClassName("message")[0];
  var header = document.getElementsByClassName("header")[0];

  button.disabled = true;

  header.classList.remove(`start`, `first-won`, `second-won`, `draw`);
  header.classList.add(`wait`);

  var timer = setInterval(function() {

    msg.classList.remove(`dice${n}`);
    n++;
    msg.classList.add(`dice${n}`);

    var l = Math.floor(Math.random() * 6) + 1;
    var r = Math.floor(Math.random() * 6) + 1;

    var lImg = `images/dice${l}.png`;
    var rImg = `images/dice${r}.png`;

    left.setAttribute("src", lImg);
    right.setAttribute("src", rImg);

    if (n == max) {
      msg.classList.remove(`dice${n}`);
      msg.classList.add(`dice${0}`);
      header.classList.remove(`wait`);

      if (l == r) {
        header.classList.add(`draw`);
      } else if (l > r) {
        header.classList.add(`first-won`);
      } else {
        header.classList.add(`second-won`);
      }

      clearInterval(timer);
      button.disabled = false;
    }

  }, 500);
}

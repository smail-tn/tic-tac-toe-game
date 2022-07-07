let blocks = document.querySelectorAll(".block");

blocks.forEach((el) =>
  el.setAttribute("onclick", "game(this.getAttribute('data-range'))")
);

let turn = "x";

function game(id) {
  let el = document.querySelector(`.block[data-range ="${id}"]`);

  if (turn == "x" && el.innerHTML == "") {
    el.innerHTML = "x";
    turn = "o";
    document.querySelector(".game-header").textContent =
      "It's  " + turn + "  turn";
  } else if (el.innerHTML == "" && turn == "o") {
    el.innerHTML = "o";
    turn = "x";
    document.querySelector(".game-header").textContent =
      "It's " + turn + "  turn";
  }
  winner();
}

function winner() {
  let els = [];
  for (let i = 0; i < blocks.length; i++) {
    els[i] = blocks[i].innerHTML;
  }
  if (els[0] == els[1] && els[1] == els[2] && els[2] !== "") {
    activate(0, 1, 2);
  } else if (els[3] == els[4] && els[3] == els[5] && els[3] !== "") {
    activate(3, 4, 5);
  } else if (els[2] == els[4] && els[4] == els[6] && els[6] !== "") {
    activate(4, 6, 2);
  } else if (els[0] == els[4] && els[4] == els[8] && els[8] !== "") {
    activate(0, 4, 8);
  } else if (els[2] == els[5] && els[5] == els[8] && els[2] !== "") {
    activate(5, 8, 2);
  } else if (els[1] == els[4] && els[4] == els[7] && els[7] !== "") {
    activate(4, 1, 7);
  } else if (els[6] == els[7] && els[7] == els[8] && els[7] !== "") {
    activate(6, 7, 8);
  } else if (els[0] == els[3] && els[3] == els[6] && els[6] !== "") {
    activate(0, 3, 6);
  }
}

function activate(i1, i2, i3) {
  let elements = [
    document.querySelector(`.block[data-range ="${i1}"]`),
    document.querySelector(`.block[data-range ="${i2}"]`),
    document.querySelector(`.block[data-range ="${i3}"]`),
  ];
  elements.forEach((e) => e.classList.add("active"));
  blocks[0].parentElement.classList.add("stop");

  document.querySelector(".game-header").innerHTML =
    elements[0].innerHTML + "  Won";
  setInterval(() => {
    document.querySelector(".game-header").textContent += ".";
  }, 1000);
  setTimeout(() => location.reload(), 4000);
  setTimeout(() => {
    document.querySelector(".game-header").innerHTML = "restarting  in ";
  }, 1000);
}

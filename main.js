document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".s");
  element.style.animationPlayState = "running";
});

const counters = document.querySelectorAll(".count");
const speed = 200;
// The code to start the animation is now wrapped in a function
const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = Number(counter.getAttribute("data-target"));
      const count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};
//call function to start the counters,on the scroll...
window.addEventListener("scroll", startCounters, {
  once: true,
});
// altrenate text .....
const texts = ["full stack DEVELOPER", "cyber security engineer"];

let sped = 100;

const textElements = document.querySelector(".alttext");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, sped);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
// hide menu botton after click
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 858) {
      document.getElementById("menu").checked = false;
    }
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".services");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

let switcherlist = document.querySelectorAll(".tap li");
let imgs = Array.from(document.images);

switcherlist.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImages);
});

function removeActive() {
  switcherlist.forEach((li) => {
    li.classList.remove("actives");
    this.classList.add("actives");
  });
}

function manageImages() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((element) => {
    element.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loading");
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.body.classList.remove("loading");
  }, 1700);
});

// reset the inputs in suuport..
function resetinp() {
  document.getElementById("inp1").value = "";
  document.getElementById("inp2").value = "";
  document.getElementById("inp3").value = "";
}
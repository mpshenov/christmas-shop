
/* 1 burger menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("lock");
  });
});


/* 2 Slider */

const sliderContent = document.querySelector('.slider-content');
const btnLeft = document.querySelector('.left-button');
const btnRight = document.querySelector('.right-button');

let currentStep = 0;

function getSliderParams() {
    const isMobile = window.innerWidth <= 768;
    const maxSteps = isMobile ? 6 : 3;
    const stepWidth = (sliderContent.scrollWidth - sliderContent.parentElement.clientWidth) / maxSteps;
    return { maxSteps, stepWidth };
}

function updateSlider() {
    const { maxSteps, stepWidth } = getSliderParams();
    
    sliderContent.style.transform = `translateX(${-currentStep * stepWidth}px)`;

    btnLeft.classList.toggle('inactive', currentStep === 0);
    btnRight.classList.toggle('inactive', currentStep === maxSteps);
}

btnRight.addEventListener('click', () => {
    const { maxSteps } = getSliderParams();
    if (currentStep < maxSteps) {
        currentStep++;
        updateSlider();
    }
});

btnLeft.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateSlider();
    }
});

window.addEventListener('resize', () => {
    currentStep = 0;
    updateSlider();
});

updateSlider();


/* 3 Timer*/
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getUTCFullYear();

    const newYear = new Date(Date.UTC(currentYear + 1, 0, 1, 0, 0, 0));

    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

/*4 best gifts*/
const gifts = [
  {
    category: "for work",
    title: "Console.log Guru",
    img: "images/gift-for-work.png",
    color: "text-blue"
  },
  {
    category: "for health",
    title: "Hydration Bot",
    img: "images/gift-for-health.png",
    color: "text-green"
  },
  {
    category: "for work",
    title: "Merge Master",
    img: "images/gift-for-work.png",
    color: "text-blue"
  },
  {
    category: "for harmony",
    title: "Spontaneous Coding Philosopher",
    img: "images/gift-for-harmony.png",
    color: "text-pink"
  },
  {
    category: "for health",
    title: "Step Master",
    img: "images/gift-for-health.png",
    color: "text-green"
  },
  {
    category: "for harmony",
    title: "Joy Charger",
    img: "images/gift-for-harmony.png",
    color: "text-pink"
  },
  {
    category: "for work",
    title: "Bug Magnet",
    img: "images/gift-for-work.png",
    color: "text-blue"
  },
  {
    category: "for health",
    title: "Snack Resistor",
    img: "images/gift-for-health.png",
    color: "text-green"
  }
];

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function renderRandomCards() {
  const container = document.querySelector(".best-gifts-content");

  if (!container) return;

  const randomCards = shuffleArray([...gifts]).slice(0, 4);

  container.innerHTML = randomCards.map(gift => `
    <a href="#">
      <div class="card">
        <img src="${gift.img}" alt="${gift.category}" class="gift-img">
        <div class="card-content">
          <h3 class="text-montserrat ${gift.color} text-uppercase">
            ${gift.category}
          </h3>
          <p class="text-montserrat text-dark text-uppercase">
            ${gift.title}
          </p>
        </div>
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderRandomCards);

/* 6 scroll top */
let mybutton = document.getElementById("scroll-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function gotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
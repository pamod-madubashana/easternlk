const list = document.querySelectorAll(".list");
const btn = document.querySelector(".button");

const home = document.querySelector(".home");
const homePage = document.querySelector(".home-page");

const attraction = document.querySelector(".attraction");
const attractionPage = document.querySelector(".attraction-page");
const pg1 = document.querySelector(".backattraction");

const facilities = document.querySelector(".facilities");
const facilitiesPage = document.querySelector(".facilities-page");

const accessibility = document.querySelector(".accessibility");
const accessibilityPage = document.querySelector(".accessibility-page");

const indicator = document.querySelector(".indicator");
const navigation =document.querySelector(".navigation");
const title = document.querySelector(".title");
const about = document.querySelector(".about");
const settings = document.querySelector(".settings");

const click = document.querySelector(".click");
const status = document.querySelector(".status");

const click1 = document.querySelector(".click1");
const status1 = document.querySelector(".status1");


var exploreButtonlg = document.querySelector('.explor-btn.lg');
var exploreButtonpt = document.querySelector('.explor-btn.pt');
var back = document.querySelector('.back-btn');
var back2 = document.querySelector('.back-btn.pt');

var laguhalaSection = document.querySelector('.laguhala-page');
var mainMenu = document.querySelector('.dot');
var pottuwilSection = document.querySelector('.pottuwil-page');


exploreButtonlg.addEventListener('click', function() {
  laguhalaSection.scrollIntoView({ behavior: 'smooth' });
});
exploreButtonpt.addEventListener('click', function() {
  pottuwilSection.scrollIntoView({ behavior: 'smooth' });
});
back.addEventListener('click', function() {
  mainMenu.scrollIntoView({ behavior: 'smooth' });
});
back2.addEventListener('click', function() {
  mainMenu.scrollIntoView({ behavior: 'smooth' });
});


home.addEventListener("click", () => {
  indicator.classList.add("ac1");
  indicator.classList.remove("ac2");
  indicator.classList.remove("ac3");
  indicator.classList.remove("ac4");
  
  homePage.classList.remove("recent");
  attraction.classList.add("nextpg");
  attractionPage.classList.remove("recent");
  facilities.classList.remove("recent");
  facilitiesPage.classList.remove("nextpg");
  
  homePage.classList.add("active")

  attractionPage.classList.remove("active");
  facilitiesPage.classList.remove("active");
  accessibilityPage.classList.remove("active");

  pg1.style.filter = "";
  pg1.style.transition = "0.2s";
});


about.addEventListener("click", () => {
  var setnav = settings.style.right;
  if (setnav === "-500px") {
    setnav = "10px";
    about.classList.add("active");
  } else {
    setnav = "-500px";
    about.classList.remove("active");
  }
  // Update the value of settings.style.right here
  settings.style.right = setnav;
});

click.addEventListener("click", () => {
  click.classList.toggle("on");

  var bar = navigation.style.right;

  if (bar === "") {
    navigation.style.right = "100px";
    status.innerHTML = "right";

  } else {
    navigation.style.right = "";
    status.innerHTML = "middle";
  }
});

click1.addEventListener("click", () => {
  click1.classList.toggle("on");

  var set1 = status1.style.left;

  if(set1 == ""){
    status1.style.left = "33px";
    status1.name = "moon";
    status1.style.rotate = "36deg"
  }
  else{
    status1.style.left = "";
    status1.name = "sunny";
    status1.style.rotate = "0deg"
  }
});


attraction.addEventListener("click", () => {
  indicator.classList.add("ac2");
  indicator.classList.remove("ac1");
  indicator.classList.remove("ac3");
  indicator.classList.remove("ac4");


  attractionPage.classList.remove("recent");
  homePage.classList.add("recent");
  facilitiesPage.classList.add("nextpg");
  facilitiesPage.classList.remove("recent");


  attractionPage.classList.add("active");
  
  setTimeout(function() {
    pg1.style.filter = "blur(8px)";
    pg1.style.transition = "2s";
  }, 500);

  homePage.classList.remove("active")
  facilitiesPage.classList.remove("active");
  accessibilityPage.classList.remove("active");
});


btn.addEventListener("click", () => {
  indicator.classList.add("ac2");
  indicator.classList.remove("ac1");
  indicator.classList.remove("ac3");
  indicator.classList.remove("ac4");

  home.classList.remove("active")
  attraction.classList.add("active");

  attractionPage.classList.remove("recent");
  homePage.classList.add("recent");
  facilitiesPage.classList.add("nextpg");
  facilitiesPage.classList.remove("recent");


  attractionPage.classList.add("active");
  
  setTimeout(function() {
    pg1.style.filter = "blur(8px)";
    pg1.style.transition = "2s";
  }, 500);

  homePage.classList.remove("active")
  facilitiesPage.classList.remove("active");
  accessibilityPage.classList.remove("active");
});

facilities.addEventListener("click", () => {
  indicator.classList.add("ac3");
  indicator.classList.remove("ac1");
  indicator.classList.remove("ac2");
  indicator.classList.remove("ac4");

  facilitiesPage.classList.add("active");
  facilitiesPage.classList.remove("recent");
  facilitiesPage.classList.remove("nextpg");
  attractionPage.classList.remove("active");
  attractionPage.classList.add("recent");
  homePage.classList.remove("active")
  accessibilityPage.classList.remove("active");
  pg1.style.filter = "";
  pg1.style.transition = "0.2s";
});

accessibility.addEventListener("click", () => {
  indicator.classList.add("ac4");
  indicator.classList.remove("ac1");
  indicator.classList.remove("ac2");
  indicator.classList.remove("ac3");


  accessibilityPage.classList.add("active");
  homePage.classList.remove("active")
  attractionPage.classList.remove("active");
  facilitiesPage.classList.remove("active");
  
  facilitiesPage.classList.add("recent");
  attractionPage.classList.add("recent");
  facilitiesPage.classList.remove("nextpg");

  pg1.style.filter = "";
  pg1.style.transition = "0.2s";
});



setTimeout(function() {
  navigation.style.top = "20px";
}, 100);

setTimeout(function() {
  title.style.left = "20px";
}, 100);

setTimeout(function() {
  about.style.right = "20px";
}, 100);

setTimeout(function() {
  document.querySelector(".home-background").style.filter = "brightness(90%) blur(10px)";
}, 1000);

list.forEach((item) => item.addEventListener("click", activeLink));

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}




function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-theme");

  // Toggle between "dark" and "light" themes
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Update the "data-theme" attribute on the root element
  root.setAttribute("data-theme", newTheme);

  // Save the current theme preference to localStorage
  localStorage.setItem("theme", newTheme);
}

// Check the user's theme preference from localStorage
const savedTheme = localStorage.getItem("theme");

// Set the initial theme based on the user's preference, or default to "light"
const root = document.documentElement;
root.setAttribute("data-theme", savedTheme || "light");

// Listen for a theme toggle event, such as a button click
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", toggleTheme);





var imgNumber = 1;
for (let i = 1; i <= 10; i++) {
  const rButton = document.querySelector(`.r${i}`);
  const lButton = document.querySelector(`.l${i}`);
  const img = document.querySelector(`.img${i}`);
  const counter = document.querySelector(`.c${i}`);

  rButton.addEventListener("click", () => {
    imgNumber++;
    if (imgNumber === 11) {
      imgNumber = 1;
    }
    img.style.background = `var(--image${imgNumber})`;
    counter.innerHTML = `${imgNumber}/10`;
  });

  lButton.addEventListener("click", () => {
    imgNumber--;
    if (imgNumber === 0) {
      imgNumber = 10;
    }
    img.style.background = `var(--image${imgNumber})`;
    counter.innerHTML = `${imgNumber}/10`;
  });
}




// Get all the page elements
const pages = document.querySelectorAll('.pg');

// Set the current page index
let currentPageIndex = 0;

// Function to scroll to the next page
const scrollToNextPage = () => {
  // Check if there is a next page
  if (currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    pages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
  }
};

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Check if the user has scrolled to the bottom of the current page
  const currentPageBottom = pages[currentPageIndex].offsetTop + pages[currentPageIndex].offsetHeight;
  const isBottomOfPage = scrollPosition >= currentPageBottom;

  // If at the bottom of the page, scroll to the next page
  if (isBottomOfPage) {
    scrollToNextPage();
  }
});

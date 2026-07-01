const words = ["Data Analyst", "MIS Executive", "Power BI Developer", "SQL Learner", "Dashboard Creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typingText");
function typeEffect(){
  const current = words[wordIndex];
  typingText.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  let speed = isDeleting ? 55 : 95;
  if(!isDeleting && charIndex === current.length + 1){speed = 1200; isDeleting = true;}
  if(isDeleting && charIndex < 0){isDeleting = false; wordIndex = (wordIndex + 1) % words.length; speed = 350;}
  setTimeout(typeEffect, speed);
}
typeEffect();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("active"); } });
},{threshold:.12});
reveals.forEach(item => observer.observe(item));

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});
topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

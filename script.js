
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

  // Duplicate children so the animation can loop without a gap
  const track = document.getElementById('skillsTrack');
  const items = Array.from(track.children);
  items.forEach(el => track.appendChild(el.cloneNode(true)));

  // Optional: set animation duration based on total width for consistent speed
  function setDuration(){
    const totalWidth = Array.from(track.children)
      .slice(0, items.length) // width of one set
      .reduce((w, el) => w + el.offsetWidth + 50 /*gap*/, 0);
    const pxPerSec = 120; // adjust for speed
    const dur = totalWidth / pxPerSec;
    track.style.animationDuration = dur + 's';
  }
  window.addEventListener('load', setDuration);
  window.addEventListener('resize', setDuration);

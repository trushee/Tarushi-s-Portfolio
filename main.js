window.onload=function(){
  var preload = document.getElementById("loading");
  setTimeout( function() {
      preload.classList.add('preload-finish');
  }, 5000 );
  preload.style.display="none";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
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

// To check the scroll position on page load
reveal();

let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('.header .navitem ');
window.onscroll = () => {
section.forEach(i => {
  let top = window.scrollY;
  let offset = i.offsetTop - 150;
  let height = i.offsetHeight;
  let id = i.getAttribute('id');
  if (top >= offset && top < offset + height) {
    menu.forEach(link => {
      link.classList.remove('active');
      document.querySelector('.header .navitem a[href*=' + id + ']')
        .classList.add('active');
    });
  }
});
};

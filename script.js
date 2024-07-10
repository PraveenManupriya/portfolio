const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon i');
const navbar = document.getElementById('navbar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


const toggleIcon = document.querySelector(".toggle_icon");

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light_mode')
});



  const typed = new Typed(".multiple_text", {
    strings: ["Frontend Designer", "UI / UX Designer", "Software Developer", "Web Developer", "Software Tester"],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 500,
    loop: true,
    cursorChar: '|',
    fadeOutDelay: 1000,
  });

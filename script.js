const tl = gsap.timeline({defaults: {ease:'power2.out'}});

tl.to(".slider", {y: "-100%", duration: 1.3});
tl.to(".intro .hero", {y: "0%", duration: 1.3});
tl.to(".socials", {y: "0%", duration: 1.3});
tl.fromTo(".na11", {opacity: 0}, {opacity:1, duration: 1.3});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
} 

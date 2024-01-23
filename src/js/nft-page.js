import './menu';
import './timer';

const timer = document.querySelector('.timer');
timer.classList.add('animated-element', 'animation-left');

const animatedElements = document.querySelectorAll('.animated-element');

let options = {
  rootMargin: '0px',
  threshold: 0.2,
};

let observer = new IntersectionObserver(addClassName, options);

animatedElements.forEach(element => {
  observer.observe(element);
});

function addClassName(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    console.log(entry.target);
    entry.target.classList.add('visible');
  });
}

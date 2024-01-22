// document.addEventListener('DOMContentLoaded', function () {
//   var elements = document.querySelectorAll('.animated-element');

//   var isInViewport = function (element) {
//     var rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight)
//     );
//   };

//   var handleScroll = function () {
//     elements.forEach(function (element) {
//       if (isInViewport(element) && !element.classList.contains('visible')) {
//         element.classList.add('visible');
//       }
//     });
//   };

//   window.addEventListener('load', function () {
//     handleScroll();
//   });

//   document.addEventListener('scroll', handleScroll);
// });

const animatedElements = document.querySelectorAll('.animated-element');

let options = {
  rootMargin: '0px',
  threshold: 1.0,
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

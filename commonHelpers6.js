import"./assets/menu-edf333c0.js";import"./assets/timer-15301c8a.js";const o=document.querySelector(".timer");o.classList.add("animated-element","animation-left");const n=document.querySelectorAll(".animated-element");let r={rootMargin:"0px",threshold:.2},s=new IntersectionObserver(a,r);n.forEach(e=>{s.observe(e)});function a(e){e.forEach(t=>{t.isIntersecting&&(console.log(t.target),t.target.classList.add("visible"))})}
//# sourceMappingURL=commonHelpers6.js.map

var c={};c=JSON.parse('[{"imageUrl":"./assets/images/index/slide-1.jpg","title":"Getting it together","category":"Comedy","url":"#","desc":"Getting it together"},{"imageUrl":"./assets/images/index/slide-2.jpg","title":"Getting it together","category":"Comedy","url":"#","desc":"Getting it together"},{"imageUrl":"./assets/images/index/slide-3.jpg","title":"Getting it together","category":"Comedy","url":"#","desc":"Getting it together"}]');const e=document.querySelector("#tv-show"),t=e.querySelector(".carousel-inner");c.forEach(c=>{t.innerHTML+=`
  <div class="carousel-item">
    <div class="body">
      <button class="button-secondary action"><a href="${c.url}">Stream</a></button>
      <div class="info">
        <span class="category">${c.category} - </span>
        <span>${c.title}</span>
      </div>
    </div>
    <img class="background" src="${c.imageUrl}" alt="${c.desc}"
      style="cursor: pointer;">
  </div>
  `});const s=e.querySelectorAll(".carousel-item"),l=Array.from(s).map(c=>c.querySelector("img").src);function a(){let c=l.shift();l.push(c),s.forEach(c=>{c.style.transition="all 0.3s ease-in-out";let e=c.offsetWidth;c.style.transform=`translateX(-${e+10}px)`}),setTimeout(()=>{r(),s.forEach(c=>{c.style.transition="none",c.style.transform="translateX(0)"})},300)}function r(){let c=e.querySelectorAll(".carousel-item");for(let e=0;e<c.length;e++)c[e].querySelector("img").src=l[e],1===e?c[e].classList.add("selected"):c[e].classList.remove("selected")}e.querySelector(".carousel-control-prev").addEventListener("click",()=>(function(){let c=l.pop();l.unshift(c),s.forEach(c=>{c.style.transition="all 0.3s ease-in-out";let e=c.offsetWidth;c.style.transform=`translateX(${e+10}px)`}),setTimeout(()=>{r(),s.forEach(c=>{c.style.transition="none",c.style.transform="translateX(0)"})},300)})()),e.querySelector(".carousel-control-next").addEventListener("click",()=>a()),r(),setInterval(()=>a(),5e3);let i=!1;const o=document.querySelector("#tv-series .carousel-slider"),h=document.querySelector("#tv-series .carousel-control-button");h.addEventListener("click",()=>{(i=!i)?h.classList.add("paused"):(m(),h.classList.remove("paused"))});var n={};console.log(n=JSON.parse('[{"imageUrl":"./assets/images/index/fam-gallery-1.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-2.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-3.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-4.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-5.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-6.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"},{"imageUrl":"./assets/images/index/fam-gallery-7.jpg","title":"Hello Kitty Island Adventure","category":"<svg viewBox=\'0 0 339 80\'><path d=\'M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14\'></path></svg>","url":"#"}]'));const v=o.querySelector(".carousel-inner");n.forEach(c=>{v.innerHTML+=`
              <div class="carousel-item">
                <img class="background" src="${c.imageUrl}" alt="...">
                <div class="body">
                  <div class="info">
                    <span>${c.title}</span>
                    <span>${c.category}</span>
                  </div>
                  <div class="action">
                    <button type="button" class="button-secondary"><a href="${c.url}">Play now</a></button>
                  </div>
                </div>
              </div>
  `});const d=v.querySelector(".carousel-item").offsetWidth;let g=d,u=10;function m(){let c=v.querySelector(".carousel-item");g=g>u?g-u:0,c.style.width=`${g}px`,setTimeout(()=>{g<u&&(v.appendChild(c),c.style.width=`${d}px`,g=d),i||m()},100)}v.addEventListener("mouseover",()=>{u=3,console.log("mouse over")}),v.addEventListener("mouseleave",()=>{u=10,console.log("mouse out")}),m();
//# sourceMappingURL=index.a703f738.js.map

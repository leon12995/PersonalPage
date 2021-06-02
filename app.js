const mainheader = document.querySelector(".main-header");
const body = document.querySelector('body');
let last_known_scroll_postion = 0;
let ticking = false;

const changeHeaderColor = ()=>{
    mainheader.style.backgroundColor ="rgba(255,255,255,0.5)";
    if(window.scollX===0 && window.scrollY===0){
    mainheader.style.backgroundColor ="rgb(238,235,235)";
    }
}

window.addEventListener("scroll" , ()=>{
   last_known_scroll_postion = window.scrollY;
   if(!ticking){
       window.requestAnimationFrame(()=>{
       changeHeaderColor();
       ticking =false;
       })
       ticking =true;
   }
   console.log(window);
})
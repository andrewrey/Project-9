button = document.querySelector('.menuButton');
let menuOpen = false;


button.addEventListener('click', ()=>{
  if(!menuOpen){
    button.classList.add('open');
    menuOpen = true
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
});
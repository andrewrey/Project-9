const button = document.querySelector('.menuButton');
const menuOverlay = document.querySelector('.menuOverlay'); 
let menuOpen = false;



button.addEventListener('click', ()=>{
  if (!menuOverlay.classList.contains('hidden')){
    menuOverlay.classList.add('hidden');
  } else {
    menuOverlay.classList.remove('hidden');
  }

  if (!menuOverlay.classList.contains('menuOverlayAnimation')){
    menuOverlay.classList.add('menuOverlayAnimation');
  } else {
    menuOverlay.classList.remove('menuOverlayAnimation');
  }
  
  if(!menuOpen){
    button.classList.add('open');
    menuOpen = true
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
});
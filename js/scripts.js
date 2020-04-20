const button = document.querySelector('.menuButton');
const menuOverlay = document.querySelector('.menuOverlay'); 
let menuOpen = false;
let overlayLi = menuOverlay.querySelectorAll('li');



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
  console.log(overlayLi);
  overlayLi.forEach((listItem, i) => {
    if (!listItem.classList.contains('liAnimation')){
      setTimeout(()=> listItem.classList.add('liAnimation'), i * 1000);
    } else {
      listItem.classList.remove('liAnimation');
    }
  });

  
  if(!menuOpen){
    button.classList.add('open');
    menuOpen = true
  } else {
    button.classList.remove('open');
    menuOpen = false;
  }
});
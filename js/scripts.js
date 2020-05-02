const button = document.querySelector('.menuButton');
const menuOverlay = document.querySelector('.menuOverlay'); 
let menuOpen = false;
let overlayLi = menuOverlay.querySelectorAll('li');
const downArrow = document.querySelector('.downArrow');
const upArrow = document.querySelector('.upArrowWrap');
const titleCard = document.querySelector('.titleCard');
const pages = document.querySelectorAll('.page');
const projectWrap = document.querySelector('.projectWrap');



/// Event Listener for switching header page from welcome to projects ///
downArrow.addEventListener('click', ()=>{
  pages.forEach(page => page.classList.add('animatedCard'));
  setTimeout(()=> pages.forEach(page => {
    if(page.classList.contains('show')){
      page.classList.remove('show');
      page.classList.add('hide');
    } else {
      page.classList.add('show');
    }
  }), 2000);
  setTimeout(()=> pages.forEach(page => page.classList.remove('animatedCard')), 4000);
});

upArrow.addEventListener('click', ()=>{
  pages.forEach(page => page.classList.add('animatedCard'));
  setTimeout(()=> pages.forEach(page => {
    if(page.classList.contains('show')){
      page.classList.remove('show');
      page.classList.add('hide');
    } else {
      page.classList.add('show');
    }
  }), 2000);
  setTimeout(()=> pages.forEach(page => page.classList.remove('animatedCard')), 4000);
})


/// Event listener that controls opening menu and animates both the menu botton and menue list items///
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

// projectWrap.innerHTML = `
//   <div class="card">
//     <figure>
//       <img src="${projects.project1.image}">
//       <figcaption>Personal Profile</figcaption>
//     </figure>
//   </div>
// `;

function createCard(object){
  let card = document.createElement('div');
  let cardFigure = document.createElement('figure');
  let cardImg = document.createElement('img');
  let caption = document.createElement('figcaption');

  card.classList.add('card');
  cardImg.src = object.image;
  caption.textContent = object.name;
  cardFigure.appendChild(cardImg);
  cardFigure.appendChild(caption);
  card.appendChild(cardFigure);
  return card;

}

function insertCards(list){
  let cards = list;
  cards.forEach(projectCard => {
    projectWrap.appendChild(createCard(projectCard));
  });
}

insertCards(projectList);
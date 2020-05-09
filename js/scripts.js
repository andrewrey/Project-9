const button = document.querySelector('.menuButton');
const menuOverlay = document.querySelector('.menuOverlay'); 
let menuOpen = false;
let overlayLi = menuOverlay.querySelectorAll('li');
const downArrow = document.querySelector('.downArrow');
const upArrow = document.querySelector('.upArrowWrap');
const titleCard = document.querySelector('.titleCard');
const pages = document.querySelectorAll('.page');
const projectWrap = document.querySelector('.projectWrap');
const projectSection = document.querySelector('.project');
const formSubmit = document.querySelector('.submit');

// ================== //
// Animation JS Start //
// ================== //

const icon = document.querySelector('.animationWrap');
const triTopLeft = document.querySelector('.topleft');
const triTopRight = document.querySelector('.topright');
const triBottomLeft = document.querySelector('.bottomleft');
const triBottomRight = document.querySelector('.bottomright');
const triangles = document.querySelectorAll('.tri');
const square = document.querySelector('.square');

let flag = false;



icon.addEventListener('click', ()=>{
  triTopLeft.classList.add('tlAnimation');
  triTopRight.classList.add('trAnimation');
  triBottomLeft.classList.add('blAnimation');
  triBottomRight.classList.add('brAnimation');
  square.classList.add('squareAnimation');
  while(projectWrap.firstChild){
    projectWrap.removeChild(projectWrap.firstChild);
  }
  if(!flag){
    insertCards(projectList, createDescriptCards);
    flag = true;
  } else {
    insertCards(projectList, createPhotoCard);
    flag = false;
  }
  
  setTimeout(()=>{
    square.classList.remove('squareAnimation');
    triangles.forEach(tri =>{
      if(tri.classList.contains('tlAnimation')){
        tri.classList.remove('tlAnimation');
      } else if (tri.classList.contains('trAnimation')) {
        tri.classList.remove('trAnimation');
      } else if (tri.classList.contains('blAnimation')){
        tri.classList.remove('blAnimation');
      } else if (tri.classList.contains('brAnimation')){
        tri.classList.remove('brAnimation');
      }
    }) 
  },3000);
});


// ================== //
//  Form Validation   //
// ================== //

formSubmit.addEventListener('click', (e)=>{
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let subject = document.querySelector('#message');
});


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
  setTimeout(()=>projectSection.style.visibility = 'visible', 2000);
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
  setTimeout(()=>projectSection.style.visibility = 'hidden', 2000);
  setTimeout(()=> pages.forEach(page => page.classList.remove('animatedCard')), 4000);
})


/// Event listener that controls opening menu and animates both the menu botton and menu list items///
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





// ================================================ //
//         Adding Cards / Descript Cards            //
// ================================================ //


//   Photo Card        //
// projectWrap.innerHTML = `
//   <div class="card">
//     <figure>
//       <a href="object.link">
//         <img src="${projects.project1.image}">
//       </a>
//       <figcaption>Personal Profile</figcaption>
//     </figure>
//   </div>
// `;


// Description Card        //
/* 
<div class='descriptCard'>
  <article>
    <div class="cardName">
      <h2>Name of project</h2>
    </div> 
    <img src="img/projectImg/project1.png">
    <p>Description of project and what it did and lots of information to that discuses such things hahahaha</p>
     <div class="imageHolder"> 
      <h3>Technologies Used</h3>
      <img class="techIcon" src="img/techImg/icons8-html-5-48.png" alt="html logo">
      <img class="techIcon" src="img/techImg/icons8-css3-48.png" alt="css logo">
      <img class="techIcon" src="img/techImg/icons8-javascript-logo-50.png" alt="js logo">
    </div>
  </article>
</div> 
*/


//     Create Description Cards ------ Function //
function createDescriptCards(object){
  let descriptionCard = document.createElement('div');
  descriptionCard.classList = "descriptCard";
  let articleElement = document.createElement('article');
  articleElement.innerHTML = `
    <div class="cardName">
      <h2>${object.name}</h2>
    </div>
    <a href=${object.link} target="_blank">
      <img class="descriptImg" src="${object.image}">
    </a>
    <p>${object.description}</p>
  `;
  let imageWrapper = document.createElement('div');
  imageWrapper.classList = 'imageHolder';
  imageWrapper.innerHTML = `<h3>Technologies Used</h3>`
  Object.keys(object.technology).forEach((key, index)=>{
    let imageElement = document.createElement('img');
    imageElement.classList = "techIcon";
    imageElement.src = object.technology[key];
    imageWrapper.appendChild(imageElement);
   
  });
  articleElement.appendChild(imageWrapper);
  descriptionCard.appendChild(articleElement);
  return descriptionCard;
  
}




//    Create Cards ----- Function  //
function createPhotoCard(object){
  let card = document.createElement('div');
  let anchor = document.createElement('a');
  let cardFigure = document.createElement('figure');
  let cardImg = document.createElement('img');
  let caption = document.createElement('figcaption');

  card.classList.add('card');
  cardImg.src = object.image;
  caption.textContent = object.name;
  anchor.href = object.link;
  anchor.target = "_blank"
  anchor.appendChild(cardImg);
  cardFigure.appendChild(anchor);
  cardFigure.appendChild(caption);
  card.appendChild(cardFigure);
  return card;

}


//      Insert Cards to screen ----- Function //
function insertCards(list, callback){
  let cards = list;
  cards.forEach(projectCard => {
    projectWrap.appendChild(callback(projectCard));
  });
}

insertCards(projectList, createPhotoCard);



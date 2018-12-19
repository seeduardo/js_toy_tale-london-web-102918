const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

const toyCollectionDiv = document.querySelector('#toy-collection');

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

function getToyList() {
  fetch('http://localhost:3000/toys').then(results => results.json()).then(data => data.forEach(showToyList)
  );
};

function showToyList(toy) {
  let newToyCard = document.createElement('div');
  newToyCard.innerHTML = `
    <div data-id="${toy.id}" class="card">
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar">
      <p>${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>
  `;
 toyCollectionDiv.appendChild(newToyCard)
};

getToyList();

function addNewToy() {
  const createNewToyButton = document.querySelector('.submit');
  createNewToyButton.addEventListener('click', buttmunch)
}
function buttmunch(event) {
  event.preventDefault();
  console.log(event)
}
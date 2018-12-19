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
  let newToyCard = document.createElement('div');
  newToyCard.className = 'card';
  fetch('http://localhost:3000/toys').then(results => results.json()).then(data => console.log(data)
  );
};

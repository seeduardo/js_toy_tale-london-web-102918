getToyList();

let likedToy;

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const toyCollectionDiv = document.querySelector('#toy-collection');

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block';
    newToyFormListener()
  } else {
    toyForm.style.display = 'none';
  }
})

function getToyList() {
  fetch('http://localhost:3000/toys')
    .then(results => results.json())
    .then(data => data.forEach(showToyList)
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

function newToyFormListener() {
  const createNewToyForm = document.querySelector('.add-toy-form');
  createNewToyForm.addEventListener('submit', submitNewToy)
};

function submitNewToy(event) {
  event.preventDefault();

  const [nameInput, imageInput] = event.target.querySelectorAll('.input-text');

  const data = {
    id: "",
    name: nameInput.value,
    image: imageInput.value,
    likes: 0
  };

  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(showToyList);
};

function allLikesListener() {
  const likeButtons = document.querySelectorAll('.like-btn');
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', event => {
      likedToy = document.querySelector(`div[data-id="${event.target.parentElement.dataset.id}"]`);
      increaseLikes(likedToy);
    });
  };
};
//
// function individualLikesListener(event) {
//   document.querySelector(`div[data-id="${event.target.parentElement.dataset.id}"]`)
// }

function increaseLikes(likedToy) {
  console.log(likedToy)
}

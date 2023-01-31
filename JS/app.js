if (!localStorage.getItem('userLog')) {
  window.location = './login.html';
}

const userLog = JSON.parse(localStorage.getItem('userLog'));

const saludar = () => {
  saludo.innerText = `${userLog.name} ${userLog.lastName}`;
};

saludar();

const closeSesion = () => {
  localStorage.removeItem('userLog');
  window.location = './login.html';
};

const ropa = [
  {
    id: 1,
    name: 'Ropa Mujer',
    Text: 'REMERA ROCKYS 5',
    TextDos: '3 cuotas de $2000',
    precio: '$6000',
    img: "./Imagenes/card1.jpg",
  },
  {
    id: 2,
    name: 'Ropa Hombre',
    Text: 'REMERA ROCKYS 4',
    TextDos: '3 cuotas de $2000',
    precio: '$5000',
    img: "./Imagenes/card2.jpg",
  },
  {
    id: 3,
    name: 'Ropa Todo',
    Text: 'REMERA ROCKYS 3',
    TextDos: '3 cuotas de $2000',
    precio: '$3000',
    img: "./Imagenes/card3.jpg",
  },
  {
    id: 4,
    name: 'Ropa Mujer',
    Text: 'REMERA ROCKYS 3',
    TextDos: '3 cuotas de $2000',
    precio: '$5000',
    img: "./Imagenes/card1.jpg",
  },
  {
    id: 5,
    name: 'Ropa Mujer',
    Text: 'REMERA ROCKYS 2',
    TextDos: '3 cuotas de $2000',
    precio: '$6000',
    img: "./Imagenes/card1.jpg",
  },
  {
    id: 6,
    name: 'Ropa Hombre',
    Text: 'REMERA ROCKYS 8',
    TextDos: '3 cuotas de $2000',
    precio: '$4000',
    img: "./Imagenes/card2.jpg",
  },
  {
    id: 7,
    name: 'Ropa Todo',
    Text: 'REMERA ROCKYS 9',
    TextDos: '3 cuotas de $2000',
    precio: '$6000',
    img: "./Imagenes/card3.jpg",
  },
  {
    id: 8,
    name: 'Ropa Mujer',
    Text: 'REMERA ROCKYS 10',
    TextDos: '3 cuotas de $2000',
    precio: '$6000',
    img: "./Imagenes/card1.jpg",
  },
];

let card = document.getElementById("cardDinamic")
ropa.map ((x) => {
  card.innerHTML += `
  <div class="col col-6 my-2 col-lg-3">
    <div class="card h-100">
      <img src="${x.img}" class="card-img-top" alt="${x.name}">
      <div class="card-body">
        <h5 class="card-title">${x.Text}</h5>
        <p class="card-text fw-semibold">Precio: ${x.precio}</p>
        <p class="card-text fw-lighter">${x.TextDos}</p>
      </div>
    </div>
  `;
});
const users = [
  {
    id: 1,
    name: 'Nico',
    lastName: 'Chaves',
    email: 'nico@gmail.com',
    password: 'nico123',
  },
  {
    id: 2,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@gmail.com',
    password: 'juan123',
  },
  {
    id: 3,
    name: 'Jose',
    lastName: 'Lopez',
    email: 'jose@gmail.com',
    password: 'jose123',
  },
];
const userJson = JSON.stringify(users);
window.localStorage.setItem('users', userJson);

const userLogin = (event) => {
  event.preventDefault()
  const emailInput = document.login.email.value.toLowerCase();
  const passwordInput = document.login.contrasena.value;
  const emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailValidation.test(emailInput)) {
    alert('El email no tiene un formato correcto');
    return;
  }
  const users = JSON.parse(localStorage.getItem('users'));
  let userLog;
  let trueUserFlag;
  users.map((user) => {
    if (emailInput === user.email.toLowerCase() && passwordInput === user.password) {
    trueUserFlag = true;
    userLog = user;
    }
  });
  if (trueUserFlag) {  
    delete userLog.password;
    localStorage.setItem('userLog', JSON.stringify(userLog));
    window.location = './index.html';
  } else {
    alert('Usuario o contraseña incorrecto.');
  }
};

document.oncontextmenu = function () {
  return false;
};
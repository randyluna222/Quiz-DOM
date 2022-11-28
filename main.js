let listaUsuarios = [];

const agregarUsuario = (e) => {
  e.preventDefault();
  const maincontainer = document.getElementById('maincontainer');
  const elementos = [...maincontainer.elements];
  let dataUsuario = {};
};

const imprimirUsuarios = (lista) => {
  const usuarioList = document.getElementById('usuarioList');
  usuarioList.innerHTML = '';

  lista.forEach ((usuario) => {
    const contenedor = document.createElement ('div');
    const titulo = document.createElement ('h2');
    const subTitulo = document.createElement ('h3');
    const age = document.createElement ('p');
    const userAccount = document.createElement ('h4');
    const correo = document.createElement ('p');
    const descripcion = document.createElement ('p');
  })



titulo.textContent = `titulo ${usuario.titulo}`;
subTitulo.textContent = `subtitulo ${usuario.firstName}`;
age.textContent = `age ${usuario.edad}`;
userAccount.textContent = `userAccount ${usuario.User}`;
correo.textContent = `correo ${usuario.email}`;
descripcion .textContent = `descripcion ${usuario.descrip}`;

contenedor.append(titulo, subTitulo, age, userAccount, correo, descripcion);

usuarioList.appendChild(contenedor);
}


console.log(listaUsuarios);

imprimirUsuarios(listaUsuarios);

/*elementos.forEach (item) => {
  if (item.name && item.name !== 'enviar'){
    dataUsuario[item.name] = item.value;
  }
}};*/
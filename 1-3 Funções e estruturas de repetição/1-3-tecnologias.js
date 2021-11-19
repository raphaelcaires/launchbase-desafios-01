// Armazena e exibe usuários e tecnologias
const usuariosDeTecnologia = [
  {
    nome: "Raphael",
    tecnologias: ["JavaScript", "Node.js"]
  },
  {
    nome: "Jonathas",
    tecnologias: ["PHP", "Java"]
  },
  {
    nome: "Nuno",
    tecnologias: ["Java", "Vue.js"]
  },
  {
    nome: "Athos",
    tecnologias: ["Pascal", "C"]
  }
]

function exibir(usuarios) {
  for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(" e ")}.`);
  }
}

const exibe = exibir(usuariosDeTecnologia);

// Busca e lista usuários que trabalham com Java
function marcarJava(usuario) {
  usuario.Java = false;
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == "Java") {
      usuario.Java = true;
    }
  }
}

function retornarJava(usuario) {
  if (usuario.Java) {
    console.log(`O usuário ${usuario.nome} trabalha com Java.`);
  }
}

function usuarioJava(usuarios) {
  for (let usuario of usuarios) {
    marcarJava(usuario);
    retornarJava(usuario);
  }
}

usuarioJava(usuariosDeTecnologia);
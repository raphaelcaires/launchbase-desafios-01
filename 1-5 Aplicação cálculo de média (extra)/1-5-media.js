// Cálculo de média das turmas
const alunosTurmaA = [
  {
    nome: "Raphael",
    nota: 2
  },
  {
    nome: "Jonathas",
    nota: 7
  },
  {
    nome: "Athos",
    nota: 2
  },
  {
    nome: "Nuno",
    nota: 8
  },
]

const alunosTurmaB = [
  {
    nome: "Raphaela",
    nota: 8
  },
  {
    nome: "Gabriela",
    nota: 10
  },
  {
    nome: "Mariana",
    nota: 9
  },
]

// Função que calcula a média das turmas
function calcMedia(aluno) {
  let soma = 0;
  for (let i = 0; i < aluno.length; i++) {
    soma = soma + aluno[i].nota
  }
  const media = soma / aluno.length
  return media
}

const mediaA = calcMedia(alunosTurmaA)
const mediaB = calcMedia(alunosTurmaB)

// Função que retorna a média das turmas
function retornaMedia(media, turma) {
  if (media > 5) {
    console.log(`A média da ${turma} foi ${media}. Parabéns!`)
  }
  else {
    console.log(`A média da ${turma} foi menor que 5. Precisamos estudar mais!`)
  }
}

retornaMedia(mediaA, 'turma A')
retornaMedia(mediaB, 'turma B')

// Reprovar alunos com nota menor que 5
function marcaReprovados(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
}

function retornaReprovados(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado!`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcaReprovados(aluno)
    retornaReprovados(aluno)
  }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)
let aluno = document.getElementById('aluno');
let idade = document.getElementById('idade');
let curso = document.getElementById('curso');

let list = [];

function addAluno() {
  let existeNome = list.some(obj => obj.nome === aluno.value);

  if (aluno.value === '') {
    alert('Aluno obrigatório');
    return;
  }

  if (existeNome) {
    alert('Aluno já cadastrado');
    return;
  }

  if (idade.value === '') {
    alert('Idade obrigatório');
    return;
  }

  if (curso.value === '') {
    alert('Curso obrigatório');
    return;
  }

  let alunoObjeto = {
    nome: aluno.value,
    idade: idade.value,
    curso: curso.value,
  };

  list.push(alunoObjeto);

  function adicionarPessoaNaTabela(aluno) {
    let tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow(tabela.rows.length);

    let celulaNome = novaLinha.insertCell(0);
    let celulaCurso = novaLinha.insertCell(1);
    let celulaIdade = novaLinha.insertCell(2);

    celulaNome.innerHTML = aluno.nome;
    celulaCurso.innerHTML = aluno.curso;
    celulaIdade.innerHTML = aluno.idade;
  }

  adicionarPessoaNaTabela(alunoObjeto);
}

function undo() {
  let tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
  tabela.deleteRow(tabela.rows.length - 1);
  list.pop();

}
function Aluno(nome, quantidadeDeFaltas, notas) {
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;
    this.calculaMedia = function () {
        let soma = 0
        for (let x = 0; x < this.notas.length; x++) {
            soma = soma + this.notas[x]
        }
        media = soma / this.notas.length
        return media
    },
        this.aumentarFalta = function () {
            somarFalta = this.quantidadeDeFaltas + 1
            return somarFalta
        }
}
let alunos = [
    new Aluno("Juliana", 2, [8, 10, 9, 8]),
    new Aluno("Bruno", 3, [10, 9.5, 8.5, 9]),
    new Aluno("Fernanda", 5, [6, 7, 6, 7]),
    new Aluno("Felipe", 5, [10, 10, 10, 10])
]

/*1º (Vale 1,5) Crie uma função construtora "Aluno" que tenha como atributos: nome (string),
quantidade de faltas (number) e notas (array de números). */
//Resposta 1:
//console.log(alunos)

/* 2º (Vale 1,5) Na função construtora crie o método "calcularMedia" que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora.  */
//Resposta 2:
//console.log("A media da aluna " + alunos[0].nome + ' é de ' + alunos[0].calculaMedia())
//console.log("Se somar 1 falta para a aluna " + alunos[0].nome + " o total de faltas fica em " + alunos[0].aumentarFalta())

/*3º (vale 1,5) Crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
(um array composto pelos alunos criados no passo 2). */
// Resposta 3:
let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    maximoFaltas: 5,
    listaEstudantes: alunos,
    aprovados: [],
    adicionarAluno(nome, quantidadeDeFaltas, notas) {
        let aluno = new Aluno(nome, quantidadeDeFaltas, notas)
        this.listaEstudantes.push(aluno)
        return this.listaEstudantes
    },
    consultarAluno(alunoParametro) {
        if (alunoParametro.calculaMedia() >= curso.notaAprovacao && alunoParametro.quantidadeDeFaltas < curso.maximoFaltas) {
            return true
        } else if (alunoParametro.calculaMedia() >= (curso.notaAprovacao * 1.1) && alunoParametro.quantidadeDeFaltas == curso.maximoFaltas) {
            return true
        }
        else {
            return false
        }
    },
    consultarEstudantes() {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].calculaMedia() >= curso.notaAprovacao && alunos[i].quantidadeDeFaltas < curso.maximoFaltas) {
                this.aprovados[i] = true
            } else if (alunos[i].calculaMedia() >= (curso.notaAprovacao * 1.1) && alunos[i].quantidadeDeFaltas == curso.maximoFaltas) {
                this.aprovados[i] = true
            }
            else {
                this.aprovados[i] = false
            }
        }
        return curso.aprovados
    }
}

// 4º (Vale 1,5) Crie o método que permite adicionar alunos à lista do curso, ou seja,
// quando chamamos nosso método em nosso objeto curso,
// deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */
//Resposta 4:
console.log(curso.adicionarAluno("Dennys", 1, [9, 10, 9, 10]))

/*5º (Vale 2) Crie um método para o objeto curso que receba um aluno (como parâmetro)
e retorne true se ele aprovou no curso ou false em caso de reprovação.
Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */
//Resposta 5:
// Aluno Aprovado
console.log(curso.consultarAluno(alunos[0]))
// Aluno Reprovado
console.log(curso.consultarAluno(alunos[2]))

/*6º (Vale 2) Crie um método para o objeto curso que percorra a lista de estudantes
e retorne um array de booleanos com os resultados se os alunos aprovaram ou não..  */
//Resposta 6:
console.log(curso.consultarEstudantes())
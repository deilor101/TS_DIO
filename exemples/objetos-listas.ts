
const andre: {nome: string, idade: number, profissao: string} =
{
    nome: "André",
    idade: 28,
    profissao: 'pintor'
}

const bia: {nome: string, idade: number, profissao: string} =
{
    nome: "Bia",
    idade: 20,
    profissao: 'dev'
}

enum Profissao{
    Professora, 
    Atriz, 
    Dev, 
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]  
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 27,
    profissao: Profissao.Professora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Dev,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 20,
    // profissao: Profissao.Dev,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias)

// Como só existe dois trabalhos entre as pessoas do exemplo, um enum com 
// os dois já basta
enum Trabalho{
    Atriz,
    Padeiro
}


// Depois criamos uma interface genérica para uma pessoa, onde definimos
// as 3 propriedades de cada pessoa e seu respectivos tipos
interface Humano {
    nome: string;
    idade: number;
    profissao: Trabalho;
}

//Depois basta definir para cada exemplo a interface Humano e colocar a profissão
// Como um tipo de trabalho
let pessoa1: Humano = {
nome : "maria",
idade : 29,
profissao : Trabalho.Atriz
}

let pessoa2: Humano = {
nome : "roberto",
idade : 19,
profissao : Trabalho.Padeiro
}

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4:Humano = {
    nome : "carlos",
    idade : 19,
    profissao : Trabalho.Padeiro
}

//Só existem dois trabalhos executados, se surgirem novos adiciona-se a lista
enum Trabalho{
    Atriz,
    Padeiro
}



interface Humano {
    nome: string;
    idade: number;
    profissao: Trabalho;

}

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
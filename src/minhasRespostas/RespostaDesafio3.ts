let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
//! diz que o elemento existe e não precisamos verificar posteriormente 
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

// o principal problema é que os elementos pegos pelo getElementById
//podem ser nulos, então é necessário verificar se eles existem e fazemos isso com ifs

//criamos uma variável para registrar o saldo total
let saldoTotal = 0;

//chamamos a função limpasaldo que zera o campo limpa saldo
limparSaldo()

//explicitamos que soma deve ser do tipo number
function somarAoSaldo(soma: number) {
    //Precisamos garantir que o elemento campoSaldo não é nulo
    if(campoSaldo){
        campoSaldo.innerHTML += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        //criamos uma função que zera sempre o valor de soma para ser utilizado novamente
        limparCampoSoma();
    }
}


//limpamos o campo soma
function limparCampoSoma(){
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo){
        //zeramos a variável que criamos
        saldoTotal = 0; 
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click',  () => {
        //lembramos de converter soma para o tipo number já que o tipo que 
        //a função somarAoSaldo aceita
        somarAoSaldo(Number(soma.value));
});
}

//verificamos se botaoLimpar não é nulo
if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

/*
    3º Trabalho de AMAQ
    Treinamento de uma rede neural utilizando a Regra de Hebb
    Aplicação à função lógica com representação bipolar
    Data: 29/03/2021
    Autor: Luciano Soares
*/

let s = [[1, 1]
    ,[-1, 1]
    ,[1, -1]
    ,[-1, -1]];

let t = [];

/*
    Etapa de treinamento
    Inicialização dos pessos
*/

let w_novo = [0, 0];
let b_novo = 0;
let w_anterior = [0, 0];
let b_anterior = 0;

/* Definição da função de ativação: degrau */
let limiar = 0;
let x = [];

/* Neurônio */
function fn_gera_neuronio()
{
    for(entrada = 0; entrada<4; entrada++)
    {
        x.push(s[entrada]);
        let y = t[entrada];
        w_novo[0] = w_anterior[0] + x[entrada][0] * y;
        w_novo[1] = w_anterior[1] + x[entrada][1] * y;
        b_novo = b_anterior + y;
        console.log(`Entrada ${entrada+1}: ${x[entrada][0]} | ${x[entrada][1]}`);;
        console.log(`Novos pesos: w1 = ${w_novo[0]} | w2 = ${w_novo[1]} bias = ${b_novo}`);
        w_anterior = w_novo;
        b_anterior = b_novo;
    }

    let text = window.document.getElementById("Saida");
    text.innerText = `Novos pesos: w1 = ${w_novo[0]} | w2 = ${w_novo[1]} bias = ${b_novo}`;
}

function fn_atualiza()
{
    for(i = 1; i < 5; i++)
    {
        var valor = document.getElementById(`entrada_${i}`).value; 
        valor = parseInt(valor);
        t.push(valor);
    }
    fn_gera_neuronio()
}

function fn_teste()
{
    let entrada0 = parseInt(document.getElementById("entrada_teste_0").value);
    let entrada1 = parseInt(document.getElementById("entrada_teste_1").value);
    let y_liquido = entrada0 * w_novo[0] + entrada1 * w_novo[1] + b_novo;
    let y = 0
    if(y_liquido >= limiar)
    {
        y = 1;
    }
    else
    {
        y = -1;
    }
    let saida = document.getElementById("Saida_teste");
    saida.innerText = `Saída: ${y}`;

    /* entrada_teste_1 */
    /* entrada_teste_2 */
}
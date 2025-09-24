const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você colocou a culpa de algo em uma pessoa e depois descobriu que ela era inocente, você pede desculpas ou permanece com o mesmo posicionamento?",
        alternativas: [
            {
                texto: "Permaneço sem voltar atrás",
                afirmacao: ""
            },
            {
                texto: "Peço desculpas",
                afirmacao: "Você admite seus erros e tem coragem e responsabilidade de arcar com as consequências disso."
            }
        ]
    },
    {
        enunciado: "Já deixou de falar com alguém por causa de posicionamento político?",
        alternativas: [
            {
                texto: "Nunca.",
                afirmacao: "Você reconhece que opiniões existem para se diferenciar e não há problema nenhum nisso."
            },
            {
                texto: "Sim.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você já deixou de fazer algo por medo do que as pessoas poderiam achar?",
        alternativas: [
            {
                texto: "Já.",
                afirmacao: ""
            },
            {
                texto: "Não.",
                afirmacao: "Você não deixa as opiniões alheias te afetarem."
            }
        ]
    },
    {
        enunciado: "Em uma briga, entre ter razão ou ficar em paz com alguém, você prefere ter razão?",
        alternativas: [
            {
                texto: "Prefiro ter razão.",
                afirmacao: ""
            },
            {
                texto: "Prefiro ficar em paz.",
                afirmacao: "Você sabe que não precisa provar nada a ninguém e não insiste no erro."
            }
        ]
    },
    {
        enunciado: "Quando alguém te conta algo pedindo para não contar pra ninguém, você conta pra outra pessoa pedindo para ela não contar pra ninguém também?",
        alternativas: [
            {
                texto: "Normalmente, não.",
                afirmacao: "Você tem consciência que agora assume um compromisso com a pessoa que te contou e não deve decepcioná-la."
            },
            {
                texto: "Normalmente, sim.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Se você for uma pessoa com uma ótima moral e um bom senso de certo e errado, você deve ter respondido que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();


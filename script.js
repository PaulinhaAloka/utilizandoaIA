const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Você prefere sair com um pequeno grupo de amigos ou com um grande grupo?",
    alternativas:[
        {
        texto:"Pequeno grupo.",
        afirmacao:"afirmação"
        },
        {
       texto:"Grande grupo.",
       afirmacao:"afirmação"
        }

    ]
},

{
    
        enunciado: "Você é o tipo de pessoa que busca ajuda quando necessário?",
        alternativas:[{
            texto:"Apenas quando realmente necessário.",
            afirmacao:"afirmação"
        },
        {        
           texto:"Procuro ajuda em qualquer situação, afinal, tudo se torna mais leve",
           afirmacao:"afirmação"
        }        
        ]
    },
    

    {
    
        enunciado: "Você tem uma vida despreocupada e lida com as situações conforme elas surgem?",
        alternativas:[
            {
            texto:"Busco ter a solução dos problemas antes mesmo que eles surjam, estando preparado para tudo.",
            afirmacao:"afrimação"
            },
            {
            texto:"Sendo resiliente, a maior parte dos problemas são solucionáveis. Então, se em algum momento surgir um equívoco, resolverei na hora o que fazer.",
            afirmacao:"afirmação"
            }
        ]
    },
    
    {
    
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas:[
            {
            texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao:"afirmação"
        },
        {
            texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas:[
            {
            texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            afirmacao:"afirmação"
            },
        {
            texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            afirmacao:"afirmação"
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada. afirmacoes;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();

     }

     function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();
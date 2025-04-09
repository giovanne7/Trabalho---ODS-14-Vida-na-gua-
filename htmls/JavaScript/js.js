const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

const questions = [
  {
      question: "O que é a sobrepesca?",
      answers: [
          { option: "A) Captura de peixes usando técnicas avançadas de sonar", correct: false },
          { option: "B) Pesca em águas internacionais sem licença", correct: false },
          { option: "C) Captura excessiva de peixes prejudicando a reprodução saudável", correct: true },
          { option: "D) Pesca de espécies não nativas em um novo ambiente", correct: false },
          { option: "E) Captura de peixes exclusivamente para aquários comerciais", correct: false },
          
      ],
  },
  {
      question: "Por que a sobrepesca é um problema?",
      answers: [
          { option: "A) Aumenta o custo dos produtos pesqueiros", correct: false },
          { option: "B) Aumenta o colapso de ecossistemas e comunidades dependentes", correct: true },
          { option: "C) Contribui para o aumento da poluição marinha", correct: false },
          { option: "D) Reduz a demanda por peixes de água doce", correct: false },
          { option: "E) Aumenta a competição entre pescadores amadores e profissionais", correct: false },
          
      ],
  },
  {
  question: "Qual evento destacou o impacto da sobrepesca no início dos anos 90?",
      answers: [
          { option: "A) A explosão de um petroleiro no Golfo do México", correct: false },
          { option: "B) O colapso da pesca do bacalhau nos Grandes Bancos no Canadá em 1992", correct: true },
          { option: "C) A introdução de uma nova espécie invasora no Oceano Atlântico", correct: false },
          { option: "D) Um surto de doença entre peixes tropicais", correct: false },
          { option: "E) A construção de uma nova barragem em um rio importante", correct: false },
          
      ],
  },
  {
  question: "O que é a pesca ilegal?",
  answers: [
      { option: "A) Captura sem licença ou excedendo quotas estabelecidas.", correct: true },
      { option: "B) Pesca em águas abertas durante a noite", correct: false },
      { option: "C) Pesca usando apenas métodos tradicionais", correct: false },
      { option: "D) Captura de peixes durante temporadas de férias", correct: false },
      { option: "E) Pesca em rios e lagos urbanos", correct: false },
      
  ],
  },
  {
      question: "Como o programa MSC contribui para a sustentabilidade da pesca?",
      answers: [
          { option: "A) Promove o uso de explosivos para aumentar a eficiência da pesca", correct: false },
          { option: "B) Incentiva a pesca em regiões não exploradas para redistribuir a pressão sobre os estoques", correct: false },
          { option: "C) Proíbe completamente a pesca comercial em todos os oceanos", correct: false },
          { option: "D) Proíbe completamente a pesca comercial em todos os oceanos", correct: false },
          { option: "E) Exige sistemas de gestão pesqueira forte para evitar pesca ilegal e proteger estoques.", correct: true },
          
      ],
  },
  {
      question: "Quais são os meios mais comuns de introdução de espécies exóticas nos ecossistemas marinhos?",
      answers: [
          { option: "A) Poluição por plásticos e resíduos industriais", correct: false },
          { option: "B) Atividades de mineração submarina", correct: false },
          { option: "C) Aquarismo comercial irresponsável", correct: true },
          { option: "D) Ondas de calor marinhas", correct: false },
          { option: "E) Crescimento de algas marinhas nativas", correct: false },
          
      ],
  },
  {
      question: "O que levou o peixe-leão a se tornar uma espécie invasora no Atlântico?",
      answers: [
          { option: "A) A falta de oxigênio nas águas do Atlântico", correct: false },
          { option: "B) Descarte indevido por aquaristas em ambientes não nativos", correct: true},
          { option: "C) Mudanças climáticas que aqueceram as águas do Atlântico", correct: false },
          { option: "D) Introdução de novas plantas marinhas que o peixe-leão usa como alimento", correct: false },
          { option: "E) A construção de recifes artificiais", correct: false },
          
      ],
  },
  {
      question: "Quais fatores contribuem para a rápida dispersão do peixe-leão no Atlântico?",
      answers: [
          { option: "A) Sua capacidade de viver em água doce e salgada", correct: false },
          { option: "B) Sua dieta exclusiva de algas marinhas", correct: false },
          { option: "C) Sua habilidade de voar curtas distâncias", correct: false },
          { option: "D) Sua voracidade e ausência de predadores naturais", correct: true },
          { option: "E) Sua reprodução exclusivamente em águas profundas", correct: false },
          
      ],
  },
  {
      question: "Onde e quando foram relatados os primeiros exemplares de peixe-leão no Brasil?",
      answers: [
          { option: "A) Na Amazônia, em 2010.", correct: false },
          { option: "B) No Pantanal, em 2005", correct: false },
          { option: "C) Em São Paulo, em 2020", correct: false },
          { option: "D) No Rio de Janeiro, em 2015", correct: true },
          { option: "E) No Rio Grande do Sul, em 2018", correct: false },
          
      ],
  },
  {
      question: "Quais características adaptativas do peixe-leão permitem que ele conquiste novos territórios marinhos?",
      answers: [
          { option: "A) Capacidade de mudar de cor conforme o ambiente", correct: false },
          { option: "B) Habilidade de viver fora da água por longos períodos", correct: false },
          { option: "C) Alimentação exclusiva de zooplâncton", correct: false },
          { option: "D) Tolerância a baixas temperaturas", correct: false },
          { option: "E) Veneno em suas espinhas dorsais e alta taxa de reprodução", correct: true },
          
      ],
  },
  {
      question: "O que é a poluição marinha?",
      answers: [
          { option: "A) A introdução de espécies exóticas nos oceanos", correct: false },
          { option: "B) Alteração da água do mar por resíduos físicos, químicos ou biológicos", correct: true },
          { option: "C) O aumento da temperatura da água devido ao aquecimento global", correct: false },
          { option: "D) A formação de recifes artificiais para preservação marinha", correct: false },
          { option: "E) A pesca excessiva de espécies nativas", correct: false },
          
      ],
  },
  {
      question: "Quais são as principais fontes de poluição marinha?",
      answers: [
          { option: "A) Luz solar intensa e ventos fortes", correct: false },
          { option: "B) Atividades vulcânicas submarinas", correct: false },
          { option: "C) Petróleo, plástico, detritos urbanos e esgoto", correct: true },
          { option: "D) Aumento da população de algas", correct: false },
          { option: "E) Movimentação tectônica das placas oceânicas", correct: false },
          
      ],
  },
  {
      question: "Quais são algumas das consequências da poluição marinha?",
      answers: [
          { option: "A) Sufocamento de animais, contaminação alimentar e eutrofização das águas", correct: true },
          { option: "B) Aumento da salinidade da água do mar", correct: false },
          { option: "C) Formação de novos ecossistemas marinhos", correct: false },
          { option: "D) Crescimento acelerado de corais", correct: false },
          { option: "E) Melhoria na qualidade das águas oceânicas", correct: false },
          
      ],
  },
  {
      question: "Como os seres humanos podem ser afetados pela poluição marinha?",
      answers: [
          { option: "A) Através de mudanças na pressão atmosférica", correct: false },
          { option: "B) Pela ingestão de microplásticos e outros contaminantes", correct: true },
          { option: "C) Pelo aumento da acidez da água potável", correct: false },
          { option: "D) Pela diminuição do nível do mar", correct: false },
          { option: "E) Pela criação de novas espécies marinhas comestíveis", correct: false },
          
      ],
  },
  {
      question: "Qual é uma das possíveis soluções para a poluição marinha?",
      answers: [
          { option: "A) Aumentar a temperatura dos oceanos para eliminar poluentes", correct: false },
          { option: "B) Conscientizar sobre a importância dos oceanos e combater a poluição.", correct: true },
          { option: "C) Reduzir a produção de energia solar", correct: false },
          { option: "D) Construir mais portos e marinas para melhor gestão dos resíduos", correct: false },
          { option: "E) Incentivar o uso de explosivos na pesca", correct: false },
          
      ],
  },


];

let currentIndex = 0;
let correctQuestions = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";
  currentIndex = 0;
  correctQuestions = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    correctQuestions++;
  }
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${correctQuestions} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;
  item.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
    `;
    answers.appendChild(div);
  });
  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}
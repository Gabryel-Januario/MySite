function toggleMode() {
  const hmtl = document.documentElement
  

  if (hmtl.classList.contains("us")) {
    resetContent()
  } else {
    updateContentToEnglish()
  }
}

function updateContentToEnglish() {
  const html = document.querySelector("html")
  const titleS = document.querySelector("#titleS")
  const titleH = document.querySelector("#titleH")
  const titleP = document.querySelector("#titleP")

  const p1 = document.querySelector("#p1")
  const p2 = document.querySelector("#p2")
  const p3 = document.querySelector("#p3")
  const p4 = document.querySelector("#p4")
  const p5 = document.querySelector("#p5")

  const pDevLinks = document.querySelector("#pDevLinks")
  const pBackRocket = document.querySelector("#pBackRocket")
  const pFrontRocket = document.querySelector("#pFrontRocket")

  html.classList.add("us")

  titleS.textContent = "About me"
  titleH.textContent = "My Skills"
  titleP.textContent = "Projects"

  p1.textContent =
    "Hello! My name is Gabryel, I'm 20 years old. I'm passionate about technology and I'm currently studying software engineering, a field that fascinates and challenges me every day. I started my studies in April 2024, and since then, I have been exploring various facets of software development."

  p2.textContent =
    "In the field of back-end development, I have gained some knowledge using Node.js and databases, building solid foundations for the internal workings of applications. On the front-end, I have partially learned HTML and CSS, integrating these technologies with JavaScript to create interactive and intuitive interfaces. Each new learning experience is an opportunity to grow and improve myself."

  p3.textContent =
    "I am driven by challenges and love stepping out of my comfort zone. I believe that facing the unknown is the best way to evolve and become a better version of myself every day. Additionally, I love studying and am constantly seeking new knowledge and skills to expand my technical and personal repertoire."

  p4.textContent =
    "My goal is always to be better than I was yesterday, maintaining a curious and determined spirit. I am eager to continue this journey of learning and innovation, and I can’t wait to see where it will take me."

  p5.textContent =
    "Thank you for visiting my website and getting to know a little more about me. If you want to learn more or discuss technology, I am always available!"

  pDevLinks.textContent =
    "DevLinks is a responsive link aggregator with theme switching that you can use as a business card on your social media."

  pBackRocket.textContent =
    "Building a complete API with Node.js and Express. Using Insomnia to register routes and verify their status codes. Creating a database with SQLite and managing it with Beekeeper Studio."

  pFrontRocket.textContent =
    "Creating the Front-End of the RocketNotes project using Vite and exploring navigation with React Router."
}

function resetContent() {
  const html = document.querySelector("html")
  const titleS = document.querySelector("#titleS")
  const titleH = document.querySelector("#titleH")
  const titleP = document.querySelector("#titleP")

  const p1 = document.querySelector("#p1")
  const p2 = document.querySelector("#p2")
  const p3 = document.querySelector("#p3")
  const p4 = document.querySelector("#p4")
  const p5 = document.querySelector("#p5")

  const pDevLinks = document.querySelector("#pDevLinks")
  const pBackRocket = document.querySelector("#pBackRocket")
  const pFrontRocket = document.querySelector("#pFrontRocket")

  html.classList.remove("us")

  titleS.textContent = "Sobre mim"
  titleH.textContent = "Minhas Habilidades"
  titleP.textContent = "Projetos"

  p1.textContent =
    "Olá! Meu nome é Gabryel, tenho 20 anos. Sou apaixonado por tecnologia e atualmente estou cursando engenharia de software, uma área que me fascina e me desafia diariamente. Comecei meus estudos em abril de 2024 e, desde então, venho explorando diversas facetas do desenvolvimento de software."

  p2.textContent =
    "No campo do back-end, adquiri um pouco de conhecimentos utilizando Node.js e bancos de dados, construindo bases sólidas para o funcionamento interno de aplicações. No front-end, aprendi parcialmente HTML e CSS, integrando essas tecnologias ao JavaScript para criar interfaces interativas e intuitivas. Cada novo aprendizado é uma oportunidade para crescer e me aprimorar."

  p3.textContent =
    "Sou movido por desafios e adoro sair da minha zona de conforto. Acredito que enfrentar o desconhecido é a melhor maneira de evoluir e me tornar uma versão melhor de mim mesmo a cada dia. Além disso, amo estudar e estou constantemente em busca de novos conhecimentos e habilidades para expandir meu repertório técnico e pessoal."

  p4.textContent =
    "Meu objetivo é sempre ser melhor do que fui ontem, mantendo um espírito curioso e determinado. Estou ansioso para continuar essa jornada de aprendizado e inovação, e mal posso esperar para ver onde ela me levará."

  p5.textContent =
    "Obrigado por visitar meu site e conhecer um pouco mais sobre mim. Se quiser saber mais ou discutir tecnologia, estou sempre à disposição!"

  pDevLinks.textContent =
    "DevLinks é um agregador de links responsivo e com troca de tema que você pode usar como cartão de visitas nas suas redes sociais."

  pBackRocket.textContent =
    "Construção de uma API completa com NodeJs e Express. Utilização do insominia para cadastrar rotas e verificar os status codes das mesmas. Criação de banco de dados com SQLite e sua manipulação com Beekeper Studio."

  pFrontRocket.textContent =
    "Criação do Front-End do Projeto RocketNotes utilizando Vite e explorando a naveção com React Router."
}

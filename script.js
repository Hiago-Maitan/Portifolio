var arrayProjects = [
    {
        nameProject: "Super Poke-Trunfo",
        subtitle: "Jogue Super Trunfo com os 3 pokemon iniciais contra o computador",
        gitRepository: "https://github.com/Hiago-Maitan/Super_PokeTrunfo",
        webLink: "https://hiago-maitan.github.io/Super_PokeTrunfo/"
    },
    {
        nameProject: "Tabela de Classicação",
        subtitle: "Utilize essa tabela de jogos para usar com seus amigos e descubra o vencedor",
        gitRepository: "https://github.com/Hiago-Maitan/Tabela_de_classificacao",
        webLink: "https://hiago-maitan.github.io/Tabela_de_classificacao/"
    },
    {
        nameProject: "Mentalista",
        subtitle: "Tente acertar o número secreto que os personagens de Stranger Things escolheram",
        gitRepository: "https://github.com/Hiago-Maitan/Mentalista",
        webLink: "https://hiago-maitan.github.io/Mentalista"
    },
    {
        nameProject: "Conversor de Moeda",
        subtitle: "Converta o a moeda do dolar (valor pré-definido $5) para o real (R$)",
        gitRepository: "https://github.com/Hiago-Maitan/Conversor_de_Moeda",
        webLink: "https://hiago-maitan.github.io/Conversor_de_Moeda/"
    },
    {
        nameProject: "Verificador de Idade",
        subtitle: "Esqueceu quantos anos tem?? Utilize o nosso verificador e descubra",
        gitRepository: "https://github.com/Hiago-Maitan/Verificador-de-Idade",
        webLink: "https://hiago-maitan.github.io/Verificador-de-Idade/"
    },
    {
        nameProject: "RocketCoffee",
        subtitle: "Cardápio elaborado na terceira edição do bootcamp MaratonaDev com acesso por QRCode",
        gitRepository: "https://github.com/Hiago-Maitan/RocketCoffee",
        webLink: "https://bright-chimera-e4e454.netlify.app/"
    },
    {
        nameProject: "Super Contador",
        subtitle: "Faça suas contagens de uma forma mais simples",
        gitRepository: "https://github.com/Hiago-Maitan/Super_Contador",
        webLink: "https://hiago-maitan.github.io/Super_Contador/"
    }
]

for (var indice = 0; indice < arrayProjects.length; indice++) {
    var resultado = document.getElementById("resultado")
    resultado.innerHTML += `
    <a href="${arrayProjects[indice].webLink}"><div class="project-github contents">
    <h2 class="project-title">${arrayProjects[indice].nameProject}</h2>
    <p class="about-project">${arrayProjects[indice].subtitle}</p>
    <a href="${arrayProjects[indice].gitRepository}"><button type="button"
    class="project-weblink">Acessar repositório</button></a>
    </div></a>`
}
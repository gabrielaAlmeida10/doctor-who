let characters; // Declaramos characters como uma variável global

document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui

    // Carregue o arquivo JSON de characters
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            // Armazene os dados carregados na variável global characters
            characters = data;

            // Adicione os event listeners aos elementos de characters após o carregamento dos dados
            const characterElements = document.querySelectorAll('.character');
            characterElements.forEach(element => {
                element.addEventListener('click', () => {
                    const characterName = element.getAttribute('data-name');
                    changeContent(characterName);
                });
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
});

// Função para atualizar o conteúdo quando um character é clicado
function changeContent(characterName) {
    const informationDiv = document.getElementById('information');
    const characterInfo = characters[characterName];
    if (informationDiv) {
        if (characterInfo) {
            informationDiv.innerHTML = `<p>${characterInfo.description}</p>`;
        } else {
            informationDiv.innerHTML = `<p>Informações sobre ${characterName} não encontradas.</p>`;
        }
    }
}

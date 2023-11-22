document.addEventListener("DOMContentLoaded", function () {
    const buscarBtn = document.getElementById("buscar-github");
    const githubCard = document.querySelector(".github-card.user-card");

    buscarBtn.addEventListener("click", function () {
        const usuarioInput = document.getElementById("usuario-github").value;

        if (usuarioInput) {
            fetch(`https://api.github.com/users/${usuarioInput}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        alert("Usuário não encontrado no GitHub.");
                    } else {
                        exibirInformacoes(data);
                        githubCard.style.display = "block"; // Mostrar o card após a pesquisa
                    }
                })
                .catch(error => {
                    console.error("Erro na requisição da API do GitHub:", error);
                });
        } else {
            alert("Por favor, insira um nome de usuário do GitHub.");
        }
    });

    function exibirInformacoes(usuario) {
        // O restante do código permanece inalterado
    }
});

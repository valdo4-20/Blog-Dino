// Obter elementos do DOM
const tudoBemBtn = document.getElementById("tudoBemBtn");
const postModal = document.getElementById("postModal");
const closeModal = document.getElementById("closeModal");
const postButton = document.getElementById("postButton");
const feed = document.getElementById("feed");

// Função para abrir o modal
tudoBemBtn.addEventListener("click", () => {
    postModal.classList.remove("hidden");
    postModal.classList.add("show"); // Adicionado para mostrar o modal
});

// Função para fechar o modal
closeModal.addEventListener("click", () => {
    postModal.classList.add("hidden");
    postModal.classList.remove("show"); // Removido para ocultar o modal
});

// Função para criar uma nova postagem
postButton.addEventListener("click", () => {
    const postContent = document.getElementById("postContent").value;

    if (postContent) {
        const post = document.createElement("div");
        post.classList.add("post");

        const postHeader = document.createElement("div");
        postHeader.classList.add("post-header");

        const username = document.createElement("span");
        username.classList.add("username");
        username.textContent = "Dino"; // Nome do usuário

        const timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        timestamp.textContent = new Date().toLocaleString();

        postHeader.appendChild(username);
        postHeader.appendChild(timestamp);

        const postBody = document.createElement("div");
        postBody.classList.add("post-content");
        postBody.textContent = postContent;

        const postActions = document.createElement("div");
        postActions.classList.add("post-actions");

        const likeButton = document.createElement("button");
        likeButton.textContent = "👍 Curtir (0)";
        let likes = 0;

        likeButton.addEventListener("click", () => {
            likes++;
            likeButton.textContent = `👍 Curtir (${likes})`;
        });

        postActions.appendChild(likeButton);
        post.appendChild(postHeader);
        post.appendChild(postBody);
        post.appendChild(postActions);
        feed.prepend(post);

        document.getElementById("postContent").value = ""; // Limpar textarea
        postModal.classList.add("hidden"); // Fechar modal
    }
});

// Função para rolar para o topo
const scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Rolar para o topo ao clicar no botão
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
});

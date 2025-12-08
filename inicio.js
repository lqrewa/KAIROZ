// ================= NAVEGAÇÃO ENTRE PÁGINAS =================

document.getElementById('btn-inicio').addEventListener('click', () => {
  window.location.href = 'inicio.html';
});

document.getElementById('btn-mural').addEventListener('click', () => {
  window.location.href = 'muraldeajuda.html';
});

document.getElementById('btn-config').addEventListener('click', () => {
  window.location.href = 'configuracoes.html';
});

document.getElementById('btn-perfil').addEventListener('click', () => {
  window.location.href = 'perfilaluno.html';
});

document.getElementById('btn-sala').addEventListener('click', () => {
  window.location.href = 'sala.html';
});


// ================= INTERAÇÃO COM OS CARDS =================

const cards = document.querySelectorAll('.card');
const conteudo = document.getElementById('conteudo-materia');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.textContent;

    conteudo.innerHTML = `
      <div class="banner"><h2>${nome}</h2></div>

      <div class="atividades">
        <h3>Atividades</h3>
        <ul>
          <li>Tarefa 1 – Leitura e resumo.</li>
          <li>Tarefa 2 – Vídeo explicativo.</li>
          <li>Tarefa 3 – Exercícios práticos.</li>
        </ul>
      </div>

      <div class="comentarios">
        <h3>Comentários</h3>
        <textarea placeholder="Escreva um comentário..."></textarea>
        <button>Enviar</button>
      </div>
    `;
  });
});


// ================= CHAT DE COLEGAS E PROFESSORES =================

const contatos = document.querySelectorAll('.contato');

contatos.forEach(contato => {
  contato.addEventListener('click', () => {
    const nome = contato.textContent;
    alert("Abrindo chat com: " + nome);
    // No futuro você pode trocar por:
    // window.location.href = "chat.html?user=" + nome;
  });
});

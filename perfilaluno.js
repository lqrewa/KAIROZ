// ======== CARREGAR IMAGENS SALVAS E NOME ========
window.onload = function () {
  const bannerSaved = localStorage.getItem("banner-img");
  const pfpSaved = localStorage.getItem("pfp-img");
  const nomeSalvo = localStorage.getItem("usuario-nome");

  document.getElementById("banner-img").src =
    bannerSaved || "https://img.freepik.com/fotos-premium/parede-de-gesso-cinza-branco-claro-de-fundo-longa-em-formato-web-panoramico-e-cabecalho_100800-16126.jpg";

  document.getElementById("foto-perfil-img").src =
    pfpSaved || "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg";

  // Preencher nome
  const nomeElemento = document.querySelector(".usuario");
  nomeElemento.textContent = nomeSalvo ? "@" + nomeSalvo : "@eu";

  // Atualizar "Você" na sala
  const user1 = document.getElementById("usuario-1");
  if (nomeSalvo) {
    user1.querySelector(".user-name").textContent = nomeSalvo;
  }
};

// ===================== EDITAR MODO =====================
let editando = false;

const btnEditar = document.getElementById("btn-editar");
const iconBanner = document.getElementById("edit-banner-icon");
const iconPfp = document.getElementById("edit-pfp-icon");

btnEditar.addEventListener("click", () => {
  editando = !editando;

  const nomeElemento = document.querySelector(".usuario");

  if (editando) {
    btnEditar.textContent = "Pronto!";
    iconBanner.style.display = "block";
    iconPfp.style.display = "block";

    // Transformar nome em input editável
    const nomeAtual = nomeElemento.textContent.replace("@", "");
    const inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "input-nome";
    inputNome.value = nomeAtual;
    inputNome.placeholder = "Digite seu nome de usuário";
    nomeElemento.replaceWith(inputNome);
  } else {
    btnEditar.textContent = "✏️ Editar perfil";
    iconBanner.style.display = "none";
    iconPfp.style.display = "none";

    // Salvar nome no localStorage e voltar para texto normal
    const inputNome = document.getElementById("input-nome");
    const nomeNovo = inputNome.value.trim() || "eu";
    localStorage.setItem("usuario-nome", nomeNovo);

    const novoElemento = document.createElement("p");
    novoElemento.className = "usuario";
    novoElemento.textContent = "@" + nomeNovo;
    inputNome.replaceWith(novoElemento);

    // Atualizar na sala se aberto
    const user1 = document.getElementById("usuario-1");
    if (user1) {
      user1.querySelector(".user-name").textContent = nomeNovo;
    }
  }
});

// ===================== ALTERAR BANNER =====================
const bannerInput = document.getElementById("banner-input");

iconBanner.addEventListener("click", () => bannerInput.click());

bannerInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("banner-img");
      img.src = e.target.result;

      localStorage.setItem("banner-img", e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

// ===================== ALTERAR FOTO PERFIL =====================
const pfpInput = document.getElementById("pfp-input");

iconPfp.addEventListener("click", () => pfpInput.click());

pfpInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("foto-perfil-img");
      img.src = e.target.result;

      localStorage.setItem("pfp-img", e.target.result);

      // Atualizar na sala se aberto
      const user1 = document.getElementById("usuario-1");
      if (user1) {
        user1.style.backgroundImage = `url('${e.target.result}')`;
      }
    };
    reader.readAsDataURL(file);
  }
});

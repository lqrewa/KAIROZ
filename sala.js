// ==========================
// Controles da barra lateral
// ==========================
const micBtn = document.getElementById("btn-mic");
const camBtn = document.getElementById("btn-cam");
const chatBtn = document.getElementById("btn-chat");
const exitBtn = document.getElementById("btn-exit");

const chat = document.getElementById("chat");
const conteudo = document.querySelector(".conteudo");
const exitScreen = document.getElementById("exit-screen");

let micOn = true;
let camOn = true;
let chatOpen = false;

// Função auxiliar para atualizar ícones
function setIcon(btn, iconName) {
  btn.querySelector(".material-icons").textContent = iconName;
}

micBtn.onclick = () => {
  micOn = !micOn;
  setIcon(micBtn, micOn ? "mic" : "mic_off");
};

camBtn.onclick = () => {
  camOn = !camOn;
  setIcon(camBtn, camOn ? "videocam" : "videocam_off");
};

chatBtn.onclick = () => {
  chatOpen = !chatOpen;
  chat.style.display = chatOpen ? "flex" : "none";
};

exitBtn.onclick = () => {
  conteudo.style.display = "none";
  exitScreen.style.display = "block";
};


// ==========================
// Carregar foto e nome do Usuário 1
// ==========================
const user1 = document.getElementById("usuario-1");
const savedPfp = localStorage.getItem("pfp-img");
const usuario = JSON.parse(localStorage.getItem("usuario")) || {};

user1.style.backgroundImage = savedPfp
  ? `url('${savedPfp}')`
  : "url('https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg')";

if (usuario.username) {
  user1.querySelector('.user-name').textContent = usuario.username;
}

// ===========================================
// Aplicar imagens dos outros usuários via data-img
// ===========================================
document.querySelectorAll(".user-box").forEach(box => {
  const img = box.getAttribute("data-img");
  if (img) {
    box.style.backgroundImage = `url('${img}')`;
  }
});

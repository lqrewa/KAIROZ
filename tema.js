// Aplica tema salvo ao carregar qualquer página
const temaSalvo = localStorage.getItem("tema") || "claro";
document.body.classList.add(temaSalvo);

// Atualiza o select apenas se ele existir (outras páginas não têm)
const selectTema = document.getElementById("tema");
if (selectTema) {
    selectTema.value = temaSalvo;

    selectTema.addEventListener("change", () => {
        document.body.className = "";
        document.body.classList.add(selectTema.value);
        localStorage.setItem("tema", selectTema.value);
    });
}

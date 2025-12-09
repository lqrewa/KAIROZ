const temaSalvo = localStorage.getItem("tema") || "claro";
document.body.classList.add(temaSalvo);

const selectTema = document.getElementById("tema");
if (selectTema) {
    selectTema.value = temaSalvo;

    selectTema.addEventListener("change", () => {
        document.body.className = "";
        document.body.classList.add(selectTema.value);
        localStorage.setItem("tema", selectTema.value);
    });
}


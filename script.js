function salvar() {
    const inputTexto = document.getElementById("inputTexto").value
    localStorage.setItem("text", inputTexto)
    alert("salvei")
}

function excluir() {
    localStorage.removeItem("text")
    document.getElementById("inputTexto").value = ''
    alert("exclui")
}

document.addEventListener("DOMContentLoaded", function() {
    let inputSalvo = localStorage.getItem("text")
    if (inputSalvo) {
        document.getElementById("inputTexto").value = inputSalvo
    }
});
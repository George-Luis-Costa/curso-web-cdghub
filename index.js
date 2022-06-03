function logar() {
    const email = document.getElementById('email')  // email recebe a tag com esse id
    const senha = document.getElementById('senha')  // senha recebe a tag com esse id

    if (email.value == "cdg@admin.com" && senha.value == "admin") {
        localStorage.setItem("acesso", true)    // Quando passado a 'chave' e 'valor', irá adicionar esta chave ao storage ou atualizar (caso já exista).
        window.location.href = "/img/logo.png" //Ao logar será direcionado para tal caminho   
        alert("Logado com sucesso")
    } else {
        if (email.value == "" && senha.value == "") {
            alert("Por favor, preencha os campos para logar")
        } else
            alert("Usuario ou senha inválidos")
    }
}
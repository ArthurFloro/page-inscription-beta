function Enviar() {
    let nome = document.getElementById("nome").value 
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    if (nome==='Arthur' && email === 'arthurfloro@gmail.com' && phone === '999082105'){
        alert("Inscrição consluída")

    } else{
        alert("Dados inválidos")
    }
} 
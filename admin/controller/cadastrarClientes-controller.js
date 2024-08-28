import { clienteService } from "../service/cliente-service.js"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    try {
        clienteService.criarCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    } catch(error) {
        window.location.href = '../telas/erro.html'
        console.log(error)
    }
})
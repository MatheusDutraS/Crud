import { clienteService } from "../service/cliente-service.js"

(async () => {
    const pegarURL = new URL(window.location)
    const id = pegarURL.searchParams.get('id')
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    
    try {
        const dados = await clienteService.detalharCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    } catch(error) {
        window.location.href = '../telas/erro.html'
        console.log(error)
    }
        
    const form = document.querySelector('[data-form]')
    form.addEventListener('submit', async (evento) => {
        try {
            evento.preventDefault()
            window.location.href = "../telas/edicao_concluida.html"
            
            await clienteService.editarCliente(inputNome.value, inputEmail.value, id)
        } catch(error) {
            window.location.href = '../telas/erro.html'
            console.log(error)
        }
    })
})()

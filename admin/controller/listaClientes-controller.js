import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const NovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
    `
    NovoCliente.innerHTML = conteudo
    NovoCliente.dataset.id = id

    return NovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener("click", async (evento) => {
    let ehBotaoExcluir = evento.target.className === 'botao-simples botao-simples--excluir'

    if(ehBotaoExcluir) {
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removerCliente(id)
            linhaCliente.remove()
        } catch(error) {
            window.location.href = '../telas.erro.html'
            console.log(error)
        }
    }
})

const render = async () => {
    try {
        const data = await clienteService.listaClientes()
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    } catch(error) {
        window.location.href = '../telas/erro.html'
        console.log(error)
    }
}
render()
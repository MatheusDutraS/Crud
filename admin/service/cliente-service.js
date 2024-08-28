async function listaClientes() {
    try {
        const resposta = await fetch(`http://localhost:3000/profile`)
        return await resposta.json()
    } catch(error) {
        throw new Error(`Não foi possível carregar a lista, ${error}`)
        window.location
    }
}

async function criarCliente(nome, email) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })
        .then(resposta => {
            return resposta.body
        })
    } catch(error) {
        throw new Error(`Não foi possível carregar a lista, ${error}`)
    }
}

async function removerCliente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        throw new Error(`Não foi possível carregar a lista, ${error}`)
    }
}

async function detalharCliente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`)
        return await resposta.json()
    } catch(error) {
        throw new Error(`Não foi possível carregar a lista, ${error}`)
    }
}

async function editarCliente(nome, email, id) {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })
        return await resposta.json()
    } catch(error) {
        throw new Error(`Não foi possível carregar a lista, ${error}`)
    }
} 

export const clienteService = {
    listaClientes,
    criarCliente,
    removerCliente,
    detalharCliente,
    editarCliente
}
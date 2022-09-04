const user = {
    nome: "john",
    email: "j@s.com",
    nascimento: "1993/23/05",
    role: "admin",
    ativo: "true",
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

// const exibir = function() {
//     console.log(this.nome)
// }

// bind = método usado para prender a execução de uma função a um contexto específico
// const exibirNome = exibir.bind(user)
// exibirNome()
// exibir()

const admin = {
    nome: "bruno",
    email: "b@s.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

//Object.setPrototypeOf = é ultilizado para herdar propriedades. primeiro parâmetro que deverá herdar do segundo parâmetro. 
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
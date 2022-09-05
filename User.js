class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

const newUser = new User ('john', 'j@s.com', '1993-23-05')
console.log(newUser)
console.log(newUser.exibirInfos()) 
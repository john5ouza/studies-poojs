//orientação a objetos com javascript sem classes

//função construtora
// function User (nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const newUser = new User('john', 'j@.com')
// console.log(newUser.exibirInfos())

//com object.creat

// function Admin(role) {
//     User.call(this, 'john', 'j@.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser = new Admin ('admin')
// console.log(newUser.exibirInfos())
// console.log(newUser.role)

//user no formato de objeto

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const newUser = Object.create(user)
newUser.init('john s.', 'j@.com')
console.log(newUser.exibirInfos())

// console.log(user.isPrototypeOf(newUser)) 
//verificando se o user está sendo protótipo do newUser.
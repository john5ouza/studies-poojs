import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
    super(nome, email, nascimento, role, ativo)
    }
}

const newAdmin = new Admin ('ytalo', 'y@.com', '1993-23-05')
console.log(newAdmin)
console.log(newAdmin.exibirInfos())
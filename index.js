import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User ('Mariana', 'm@m.com', '2022-01-01')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin ('John', 'j@j.com', '1993-23-05')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Souza', 's@s.com', '2022-01-01')
console.log(novoDocente.exibirInfos())
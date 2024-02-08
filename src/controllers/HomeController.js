import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res, next) {
        // const novoAluno = await Aluno.create({
        //     nome: 'João Pedro',
        //     sobrenome: 'Ferreira',
        //     email: 'jpfreitass@hotmail.com',
        //     idade: 26,
        //     peso: 67,
        //     altura: 1.69
        // })

        res.json('Index')
    }
}

export default new HomeController
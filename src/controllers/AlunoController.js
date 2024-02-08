import Aluno from '../models/Aluno';
import Foto from '../models/Foto' ;

class AlunoController {
    async index(req, res, next) {
        const alunos = await Aluno.findAll({
            order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
            include: {
                model: Foto,
                attributes: ['url','filename']
            },
        })
        res.json(alunos)
    }

    async create(req, res, next) {
        try{
            // const novoUser = await User.create({
            //     nome: 'João Pedro',
            //     email: 'jpfreitass@hotmail.com',
            //     password: '123456'
            // })
            const novoAluno = await Aluno.create(req.body)
            return res.json(novoAluno)
        }catch(e){
            return res.status(400).json(e);
        }
    }

    async show(req,res){
        try{
            const { id } =  req.params;
            console.log(id)
            if(!id) return res.status(400).json('ID inválido')

            const aluno = await Aluno.findByPk(id, {
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['url','filename']
                },
            });

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            return res.json(aluno)
        }catch(e){
            return res.json(e)
        }
    }

    async update(req,res){
        try{
            const { id } =  req.params;

            if(!id) return res.status(400).json('ID inválido')

            const aluno = await Aluno.findByPk(id);

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            const novoAluno = await aluno.update(req.body)

            return res.json(novoAluno)
        }catch(e){
            return res.json(e)
        }
    }

    async delete(req,res){
        try{
            const { id } =  req.params;

            if(!id) return res.status(400).json('ID inválido')

            const aluno = await Aluno.findByPk(id);

            if(!aluno) return res.status(400).json('Aluno não encontrado')

            await aluno.destroy()

            return res.json('Aluno deletado com sucesso')
        }catch(e){
            return res.json(e)
        }
    }
}

export default new AlunoController
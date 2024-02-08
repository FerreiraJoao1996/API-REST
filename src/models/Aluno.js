import Sequelize, {Model} from "sequelize";

export default class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3,255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3,255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já está cadastrado'
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade inválida'
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso deve estar no padrão 00.0 ou 00'
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Altura deve estar no padrão 0.00 ou 0'
                    }
                }
            },
        },
        {
            sequelize
        })
        return this;
    }

    static associate(models){
        this.hasMany(models.Foto, { foreignKey: 'aluno_id'})
    }

}
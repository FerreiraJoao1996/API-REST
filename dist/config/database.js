"use strict";module.exports = {
    dialect: 'mariadb',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'japinha14',
    database: 'escola', // Adicione esta linha
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'create_at',
        'updatedAt': 'updated_at'
    },
    dialectOptions: {
        dateStrings: true,
        allowPublicKeyRetrieval: true
    }
}

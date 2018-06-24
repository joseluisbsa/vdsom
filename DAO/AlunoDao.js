class AlunoDao {

    constructor(connection) {
        this._connection = connection;
    }

    listar() {

        return new Promise((resolve, reject) =>
            this._connection.query('SELECT * FROM tb_aluno', (err, alunos) => {
                if (err) return reject(err);
                resolve(alunos);
            })
        );
    }

    cadastrar(aluno) {

        return new Promise((resolve, reject) =>
            this._connection.query('INSERT INTO tb_aluno SET ?', aluno, (err, resultado) => {
                if (err) return reject(err);
                resolve(resultado);
            })
        );
    }
}

module.exports = AlunoDao;
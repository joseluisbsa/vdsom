function AlunoDao(connection) {
    this._connection = connection
}

AlunoDao.prototype.salvarAluno = (aluno, callback) => {
    this._connection.query('INSERT INTO tb_aluno SET ?', aluno, callback)
}

AlunoDao.prototype.listarAlunos = (callback) => {
    this._connection.query('SELECT * FROM tb_aluno', callback)
}

AlunoDao.prototype.getAluno = (id, callback) => {
    this._connection.query('SELECT * FROM tb_aluno WHERE id = ?', id, callback)
}




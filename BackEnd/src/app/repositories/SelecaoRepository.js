import {consulta} from "../bancodados/conecao.js"


class SelecaoRepository {
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, id, 'Não foi possível cadastrar!')
    }

    findAll(){
        const sql = "SELECT * FROM selecoes"
        return consulta(sql, 'Não foi possível cadastrar!')
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível deletar!')
    }
}

export default new SelecaoRepository()
import database from "../infra/bd.js";

class InstrumentosDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM  instrumentos");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM instrumentos WHERE idinstrumentos = ?`, [param]);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO instrumentos (idinstrumentos, nome,  tipo , descricao , preco, img) VALUES (?,?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: " instrumentos inserido com sucesso na tabela instrumentos" },
      status: 201,
    };
  }

  static async atualizar(id, obj) {
    try {
      if (!obj) {
        return {
          dados: { msg: "Objeto de atualização não fornecido" },
          status: 400,
        };
      }     
      await database.query("UPDATE instrumentos SET nome = ?, tipo = ?, descricao = ?, preco = ?, img = ? WHERE idinstrumentos = ?", [
        obj.nome,
        obj.tipo,
        obj.descricao,
        obj.preco,
        obj.img,
        id,
      ]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "Erro ao atualizar o instrumento", error: error.message },
        status: 500,
      };
    }
    
    return {
      dados: { msg: "Instrumentos atualizado com sucesso na tabela instrumentos" },
      status: 200,
    };
  }

  static async deletar(id) {
    try {
      await database.query("DELETE FROM instrumentos WHERE idinstrumentos = ?", [id]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Instrumentos deletado com sucesso da tabela Instrumentos" },
      status: 200,
    };
  }
  
}

export default InstrumentosDAO;

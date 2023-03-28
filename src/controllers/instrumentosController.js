import instrumentosModel from "../models/instrumentosModel.js";
import instrumentosDAO from "../DAO/instrumentosDAO.js";


    const instrumentosController = (app) => {
    app.get("/instrumentos", async (req, res) => {
      const resposta = await instrumentosDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/instrumentos/id/:id", async (req, res) => {
      const resposta = await instrumentosDAO.mostrarUm(req.params.id);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/instrumentos", async (req, res) => {
      const modelado = instrumentosModel.modelar(req.body)
      const resposta = await instrumentosDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });
    app.delete("/instrumentos/id/:id", async(req, res) => {
      const resposta = await instrumentosDAO.deletar(req.params.id)
      res.status(resposta.status).send(resposta.dados)
    });
    app.put("/instrumentos/id/:id", async (req, res) => {
      const resposta = await instrumentosDAO.atualizar(req.params.id,req.body);
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default instrumentosController;

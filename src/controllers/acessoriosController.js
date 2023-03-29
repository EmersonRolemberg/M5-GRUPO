import acessoriosModel from "../models/acessoriosModel.js";
import acessoriosDAO from "../DAO/acessoriosDAO.js";


    const acessoriosController = (app) => {
    app.get("/acessorios", async (req, res) => {
      const resposta = await acessoriosDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/acessorios/id/:id", async (req, res) => {
      const resposta = await acessoriosDAO.mostrarUm(req.params.id);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/acessorios", async (req, res) => {
      const modelado =  acessoriosModel.modelar(req.body)
      const resposta = await acessoriosDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });
    app.delete("/acessorios/id/:id", async(req, res) => {
      const resposta = await acessoriosDAO.deletar(req.params.id)
      res.status(resposta.status).send(resposta.dados)
    });
    app.put("/acessorios/id/:id", async (req, res) => {
      const resposta = await acessoriosDAO.atualizar(req.params.id,req.body);
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default acessoriosController;

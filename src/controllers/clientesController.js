import clientesModel from "../models/clientesModel.js";
import clientesDAO from "../DAO/clientesDAO.js";

const clientesController = (app) => {
  app.get("/clientes", async (req, res) => {
    const resposta = await clientesDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/clientes/email/:email", async (req, res) => {
    const resposta = await clientesDAO.mostrarUm(req.params.email);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/clientes", async (req, res) => {
    const modelado = clientesModel.modelar(req.body)
    const resposta = await clientesDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
};
 // app.delete("/usuarios/email/:email", (req, res) => {
  //   const resposta = usuariosModel.deletar(req.params.email)
  //   res.status(resposta.status).send(resposta.dados)
  //});

export default clientesController;

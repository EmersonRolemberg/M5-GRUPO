import bd from "../infra/bd.js";

const clientesModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      email: obj.email,
      senha: obj.senha,
      celular: obj.celular,
      img: obj.img

    };
  },
};
  
  
export default clientesModel;

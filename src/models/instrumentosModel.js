import bd from "../infra/bd.js";

const instrumentosModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      tipo: obj.tipo,
      descricao: obj.descricao,
      preco: obj.preco,
      img: obj.img,
    };
  },
  };
  
  
export default instrumentosModel;

import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `clientes` (`idclientes` INT NULL, `nome` VARCHAR(45) NULL, `email` VARCHAR(45) NULL, `senha` VARCHAR(45) NULL, `celular` VARCHAR(12) NULL, PRIMARY KEY(`idclientes`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela clientes criada com sucesso");
    }
  }
);

database.connection.query(
  "CREATE TABLE `instrumentos` (`idinstrumentos` INT NULL, `nome` VARCHAR(99) NULL, `tipo` VARCHAR(99) NULL, `descricao` VARCHAR(900) NULL, `preco` FLOAT NULL, PRIMARY KEY(`idinstrumentos`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela instrumentos criada com sucesso");
    }
  }
);

database.connection.query(
  "INSERT INTO `clientes` (`idclientes`, `nome`, `email`, `senha`, `celular`) VALUES (1, 'João Silva', 'joao@gmail.com', '123456', '21987654321'), (2, 'Maria Souza', 'maria@yahoo.com', 'abcdef', '21912345678'), (3, 'Pedro Santos', 'pedro@hotmail.com', 'qwerty', '21965432109')",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela clientes com sucesso");
    }
  }
);

database.connection.query(
  "INSERT INTO `instrumentos` (`idinstrumentos`, `nome`, `tipo`, `descricao`, `preco`) VALUES (1, 'Violino', 'Cordas', 'Violino profissional', 1200.0), (2, 'Guitarra', 'Cordas', 'Guitarra elétrica', 1500.0), (3, 'Bateria', 'Percussão', 'Bateria acústica', 2500.0)",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela instrumentos com sucesso");
    }
  }
);

database.connection.end();

import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `clientes` (`idclientes` INT NULL AUTO_INCREMENT, `nome` VARCHAR(45) NULL, `email` VARCHAR(45) NULL, `senha` VARCHAR(45) NULL, `celular` VARCHAR(12) NULL, PRIMARY KEY(`idclientes`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela clientes criada com sucesso");
    }
  }
);

database.connection.query(
  "CREATE TABLE `instrumentos` (`idinstrumentos` INT NULL AUTO_INCREMENT, `nome` VARCHAR(50) NULL, `tipo` VARCHAR(12) NULL, `descricao` VARCHAR(500) NULL, `preco` FLOAT NULL,`img` VARCHAR(700) NULL, PRIMARY KEY(`idinstrumentos`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela instrumentos criada com sucesso");
    }
  }
);

database.connection.query(
  "CREATE TABLE `acessorios` (`idacessorios` INT NULL AUTO_INCREMENT, `nome` VARCHAR(50) NULL, `tipo` VARCHAR(30) NULL, `descricao` VARCHAR(900) NULL, `preco` FLOAT NULL, `img` VARCHAR(700) NULL, PRIMARY KEY(`idacessorios`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela acessorios criada com sucesso");
    }
  }
);

database.connection.query(
  "CREATE TABLE `loja` (`idloja` INT NOT NULL AUTO_INCREMENT, `nome` VARCHAR(50) NULL, `cnpj` VARCHAR(18) NULL, `funcionarios` VARCHAR(100) NULL, `distribuidoras` VARCHAR(100) NULL, PRIMARY KEY(`idloja`) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela loja criada com sucesso");
    }
  }
);


database.connection.query(
  "INSERT INTO `clientes` (`idclientes`, `nome`, `email`, `senha`, `celular` ) VALUES (1, 'João Silva', 'joao@gmail.com', '123456', '21987654321'), (2, 'Maria Souza', 'maria@yahoo.com', 'abcdef', '21912345678'), (3, 'Pedro Santos', 'pedro@hotmail.com', 'qwerty', '21965432109')",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela clientes com sucesso");
    }
  }
);

database.connection.query(
  "INSERT INTO `instrumentos` (`idinstrumentos`, `nome`, `tipo`, `descricao`, `preco`, `img`) VALUES (1, 'Violino', 'Cordas', 'Violino profissional', 1200.0, 'https://eagle.com.br/wp-content/uploads/violino-profissional-eagle-master-series-vk644-frente-verso.jpg'), (2, 'Guitarra', 'Cordas', 'Guitarra elétrica', 1500.0, 'https://www.fender.com.br/imgs/produtos/gra/fender_10490653.jpg'), (3, 'Bateria', 'Percussão', 'Bateria acústica', 2500.0, 'https://www.equipo.com.br/wp-content/uploads/2020/02/Club-Jam.jpg')",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela instrumentos com sucesso");
    }
  }
);




database.connection.query(
  "INSERT INTO `acessorios` (`idacessorios`, `nome`, `tipo`, `descricao`, `preco`, `img`) VALUES (1, 'Espaleira Para Violino 4/4', 'Cordas','Espaleira de violino regulável ', 44.00, 'https://images.tcdn.com.br/img/img_prod/757946/espaleira_violino_4_4_e_3_4_lunnon_new_marrom_12941_1_e02ed3445ef3542e72ce1b8885a13b74.png'), (2, 'Pedal MXR Analog Chorus', 'Eletrica', 'Pedal analogico com circuitos bucket-brigade', 66.00, 'https://izzomusical.vteximg.com.br/arquivos/ids/157933-1000-1000/DUNLOP_8125_PEDAL_MXR_ANALOG_CHORUS_M234.MAIN.jpg?v=637600778601830000'), (3, 'Baqueta 7A Nirvana ', 'Percussão', 'Baqueta de madeira ', '28.00', 'https://m.media-amazon.com/images/I/41PSRzrnKfL._AC_SX679_.jpg')",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela acessorios com sucesso");
    }
  }
);

database.connection.query(
  "INSERT INTO `loja` (`idloja`, `nome`, `cnpj`, `funcionarios`, `distribuidoras`) VALUES (1, 'TechMusic Instrumentos', '46485644000118', 'Maria Dalva Camargo', 'Hayamax')",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Dados inseridos na tabela loja com sucesso");
    }
  }
);

database.connection.end();

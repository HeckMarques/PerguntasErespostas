# PRINCIPAIS TECNOLOGIAS E LIBS
	Servidor Node.js com Express
  	Banco de dados mysql com ORM sequelize
 	Front end HTML com view engine EJS e Bootstrap 4

# Rodar projeto
	Certifique-se de ter instalado na máquina o Node.js e o mysql
    * Crie um banco de dados no MYSQL
    * Dica mysql: execute o seguinte comando SQL para utilizar o formato nativo de senhas do banco de dados:
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_mysql'
    * Clone o projeto: git clone https://github.com/HeckMarques/PerguntasErespostas.git
    * Configure a conexão com o banco de dados mysql em /database/database.js
		* Instale as depenciais do projeto: npm install
		* Rode o projeto: node index.js
    * Dica: instale o nodemon: npm install nodemon -g
    * Rode o projeto com o nodemon (obtenha atualização automatica da aplicação ao alterar os arquivos): nodemon index.js
    
    Acesse a home do projeto: http://localhost:8080/

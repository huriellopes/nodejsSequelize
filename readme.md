# Aplicação Node Js com Sequelize

> Aplicação feita como teste do sequelize!

### Para testar:

<p>Clone o repositório: </p>

````
git clone https://github.com/huriellopes/nodejsSequelize.git
````

<p>Acesse o projeto e rode o seguinte comando: </p>

````
yarn install 

ou 

npm install
````

<p>Para configurar, copie o .env: </p>

````
copy .env.example .env 

ou 

cp .env.example .env
````

<p>E configure as variáveis de ambiente no arquivo .env!</p>

<p>Depois que o .env estiver configurado, crie o schema do banco de dados e rode a migração: </p>

````
yarn sequelize db:create

yarn sequelize db:migrate
````

<p>Para rodar o servidor, use o seguinte comando: </p>

````
yarn dev
````

<p>Acesse a seguinte url no insomnia: </p>

````
http://localhost:3030/test
````

<p>Para testar se a aplicação está funcionando!</p>
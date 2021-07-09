# React-Bhaskara
Um pequeno web app escrito em ReactJS que usa uma API escrita na linguagem Julia para o cálculo das raízes de uma função do segungo grau. Esse projeto é a versão ReactJS de um outro projeto meu escrito em VueJS: [Vue-Bhaskara](https://github.com/eliascarv/Vue-Bhaskara).\
O código da API Julia se encontra na pasta backend. Para executar o projeto, o NodeJS e a linguagem de programação Julia devem estar instaladas no seu PC.
Cabe salientar que os comandos abaixo devem ser executados na pasta principal do projeto.

## Setup do Frontend
Para instalar as dependências do frontend execute o seguinte comando:
```
npm install
```

### Compilar o Frontend no ambinete de desenvolvimento
Para executar o frontend execute o seguinte comando:
```
yarn start
```

### Compilar para produção
Para compilar o código do frontend para um código que seja executável no navegador sem a necessidade do NodeJS execute o seguinte comando:
```
yarn build
```
## Setup do Backend
Execute o seguinte comando para instalar as dependências da API:
```
yarn backend-install
```
### Executando o Backend
Dentro da pasta principal do projeto, abra o um novo terminal e execute o comando:
```
yarn backend
```
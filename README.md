<h2 align="center">
  Pipedrive Bling Integration
</h2>

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#running">Running the application</a>
</p>

## Project

RESTful API using NodeJS technology.
Using the SOLID and TDD development standards<br /><br />

## Requirements

- Criar contas testes nas plataformas Pipedrive e Bling.

- Criar uma integração entre as plataformas [Pipedrive](https://www.pipedrive.com/pt) e [Bling](https://www.bling.com.br/home). (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Nestjs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Commitlint](https://commitlint.js.org/#/)
- [Docker](https://www.docker.com/)


## Prerequisites

Before you begin, you will need to have the following tools installed on your machine:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Nestjs](https://nestjs.com/)
- And you will also need an editor, I indicate the <b>[VSCode](https://code.visualstudio.com/)</b>

## Running

To execute the project just execute the following commands:

### Run
```bash
# development
$ npm run start
or 
$ yarn start

# watch mode
$ npm run start:dev
or 
$ yarn start:dev

# production mode
$ npm run start:prod
or
$ yarn start
```

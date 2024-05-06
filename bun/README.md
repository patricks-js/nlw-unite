# Pass.in Made With Bun

O projeto foi feito durante a Next Level Week da [Rocketseat](https://www.rocketseat.com.br/). A aplicação foi feita usando tecnologias como Bun, Typescript, Fastify e Docker.

Originalmente, o projeto é feito usando **Node.js** (que não muda muito para o Bun), usando um banco de dados in memory (**SQLite**) e o **Prisma ORM**. Mas, achei por bem modificar alguns pontos, como:

- O banco de dados que usei foi o **Postgres**
- Não utilizei ORM, ao invés disso, utilizei a lib `postgres` que permite uma comunicação fácil com o banco de dados e realizar **queries raw**.
- Utilizei **Bun** como runtime
- Fiz algumas modificações no banco de dados, como:
  - O id dos `attendees` que era inteiro e incremental agora é uma string, gerada usando a lib `nanoid`
- Modifiquei a estrutura do projeto para deixar mais modular, utilizando uma **arquitetura em camadas**.

## Sobre o projeto

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poder visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Variáveis de Ambiente

No projeto, é utilizado dois arquivos `env` diferentes. O .env.local e o `.env.docker`

**.env.local**

```env
PORT=3333
DATABASE_URL=
```

**.env.docker**

```env
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

## Como Rodar o Projeto

Você precisa de duas dependências globais instaladas:

- Bun Latest (você pode instalar ele por meio do `npm` como uma global dependency)
- Docker/Docker Engine e Docker Compose

1. Clone o repositório:

   ```bash
   git clone https://github.com/patricks-js/nwl-unite.git
   ```

2. Entre no diretório `nwl-unit/server/bun`

3. Instale as dependencies rodando `bun install`

4. Inicialize os containers rodando `docker-compose up`

5. Inicie a aplicação rodando `bun start:dev`

> A API será acessível na porta http://localhost:3333

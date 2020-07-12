![68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67](https://user-images.githubusercontent.com/50913322/87230209-c2d41600-c384-11ea-9339-71a8deacfccc.png)


<h1 align="center">:rocket: Desafio 09 do Nível 04 do Bootcamp GoStack 11.0 - Relacionamentos com banco de dados no Node.js :rocket:</h1>

A proposta deste desafio era testar os conhecimentos do módulo Finalizando o Back-End. Onde consistia em implementar back-end com a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra de certos produtos, como um pequeno e-commerce.

### Funcionalidades Implementadas :bookmark_tabs:
- Criar as tabelas de produtos, pedidos, pedidosProduto e clientes no banco de dados. :heavy_check_mark:
- A rotas e a função de cadastrar um cliente. :heavy_check_mark:
- A rota e a função de cadastrar um produto. :heavy_check_mark:
- As rotas e as funções de cadastrar e listar uma compra. :heavy_check_mark:

### Como Rodar a Aplicação :desktop_computer:


- No terminal, clone o projeto:

```
https://github.com/letbueno/gostack-desafio-iniciandoBackEnd/
```

- Instale as dependências:
```
yarn 
```

- Para executar a aplicação:
```
yarn dev:server
```

### Como testar as requisições 	:technologist:
Para testar as requisições você pode fazer uso de uma API Client, a que eu usei para realizar o projeto foi o [Insomnia](https://insomnia.rest).

- Para cadastrar um cliente: **`POST /customers`**
- Para cadastrar um produto: **`POST /products`**
- Para cadastrar uma compra: **`POST /orders`**
- Para listar uma compra especifica: **`GET /orders/:id`**

![desafio09](https://user-images.githubusercontent.com/50913322/87235961-047eb400-c3b9-11ea-80f3-92d18f79c335.jpg)

### Como Rodar os Testes? :desktop_computer:
Os testes foram desenvolvidos pela Rocketseat, para testar se as funcionalidades seguem os parâmetros indicados:
- Cadastrar um novo cliente. :heavy_check_mark:
- Impedir que seja criado um cliente com e-mail já existente. :heavy_check_mark:
- Cadastrar um novo produto. :heavy_check_mark:
- Impedir que seja criado um produto com a mesma nomenclatura. :heavy_check_mark:
- Cadastrar uma novo pedido de compra. :heavy_check_mark:
- Impedir que seja criado um novo pedido com um cliente que não exista. :heavy_check_mark:
- Impedir que seja criado um novo pedido com um produto que não exista. :heavy_check_mark:
- Impedir que seja criado um novo pedido com um produto que esteja mais em estoque ou que a quantidade pedida seja acima do que há no estoque. :heavy_check_mark:

Para rodar os testes:
```
yarn test
```
### Dependências e Tecnologias :books: 
- [Node.js](https://nodejs.org/en/docs/)
- [Javascript](https://devdocs.io/javascript/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Typeorm](https://typeorm.io/#/)
- [Cors](https://www.npmjs.com/package/cors)

### Participante: 
|Name|E-mail|Course|
| -------- | -------- | -------- |
|Leticia Bueno Martins|leticia.bueno.martins@gmail.com|Bootcamp GoStack 11.0|

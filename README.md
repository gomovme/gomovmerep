# Movme Website - gomovme.com

O projeto foi desenvolvido utilizando [AngularJS][angular] para o frontend e [NodeJS][node] para a API de comunicação com a Iugu e o MailChimp.

Importante: As chaves de API devem ser colocadas em um arquivo do tipo .env, na raiz do projeto, no modelo:

```
MAILCHIMP=mailchimp_api_key
IUGU=iugu_api_key
```

## Para rodar o projeto:

### Pré-requisitos

Ter o node.js instalado em sua máquina e o gerenciador de pacotes `npm`.

Ambos podem ser obtidos em [http://nodejs.org/][node].

### Dependências da instalação

Após a instalação do node.js e `npm`, é necessário instalar as dependências do projeto através do comando:

```
npm install
```

Após a execução do comando, deve ter uma nova pasta na raiz do projeto:

* `node_modules` - contém os pacotes necessários para rodar a aplicação

### Rodando a aplicação:

Para iniciar o projeto, utilize o comando:

```
npm start
```

O site deve estar disponível na porta 8080 do seu localhost

```
http://localhost:8080
```

[angular]: http://angularjs.org/
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
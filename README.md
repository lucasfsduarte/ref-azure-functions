# ref-azure-functions

Este repositório armazena a estrutura básica para a execução de uma função serverless Azure em ambiente de desenvolvimento local.

**Pré-requisitos**

É recomendada a instalação do pacote de ferramentas Azure Functions Core Tools, uma CLI que permite a criação de novas funções a partir dos templates de linguagens disponíveis. Veja como instalá-lo [aqui](https://github.com/Azure/azure-functions-core-tools#linux).

### Estrutura

A função de exemplo foi desenvolvida em Typescript com um trigger HTTP padrão. Nesse contexto, o diretório `/function-example` armazena dois arquivos importantes: `function.json` e `index.ts`. O primeiro registra os parâmetros de configuração da função propriamente dita, como níveis de segurança, métodos HTTP disponíveis e o endereço do `index` correspondente. O segundo arquivo implementa o entrypoint da função, responsável por receber parâmetros de entrada e produzir a resposta que é enviada ao cliente.

Arquivos extras como serviços, ferramentas de processamento de dados, métodos auxiliares, entre outros, deverão ser importados em última instância através desse arquivo.

### Docker
Um Dockerfile está presente na raiz do projeto, assim como um docker-compose.yml com uma configuração mínima viável para a execução do exemplo.

### Execução
Em uma máquina com **Docker** e **Docker Compose** instalados, basta executar
```
docker-compose up serverless
```
para iniciar a aplicação. Após isso, verifique o endereço local na porta `80` através de seu navegador. Se uma tela azul (não se preocupe, não é **aquela** tela azul) de boas-vindas aparecer, a inicialização ocorreu com sucesso.

### Testes

É possível enviar requisições `POST` ou `GET` para o endpoint exposto. Em uma ferramenta de desenvolvimento como **Postman**, utilize:
```
Método: GET
URL: http://localhost:80/api/function-example
```
Para ver os resultados. É possível interagir com a função através do envio de parâmetros como `name`:

```
Método: GET
URL: http://localhost:80/api/function-example?name=Lucas
```
A resposta obtida será:
```
Hello, Lucas. This HTTP triggered function executed successfully.
```

# Arquitetura de Referência - Node.js (TS+Nest)
Esta arquitetura é feita em cima do framework **Nest** ([Documentação do framework](https://docs.nestjs.com/)).

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- Conteúdo
    - [Configuração e Execução](#config)
        - [Variáveis de Ambiente](#variaveis_ambiente)
        - [Docker](#docker)
        - [Execução](#run)
    - [Introdução](#intro)
    - [Scripts Disponíveis](#scripts)
    - [Linguagem e Padrão de Código](#coding)
    - [Detalhes Técnicos](#detalhes_tecnicos)
        - [Regra de dependência](#dependencias)
        - [Banco de Dados e ORM](#database)
        - [GraphQL](#graphql)
            - [Porque adotar schema-first](#schema-first)
        - [Microsserviços](#microservices)

<!-- /TOC -->

## Configuração e Execução <a name="config"></a>
### Variáveis de Ambiente <a name="variaveis_ambiente"></a>
O projeto depende de um arquivo `.env` que deve estar na raiz. Para permitir a flexibilidade e ajuste destas variáveis e cada máquina, este arquivo não é versionado, apesar de  um arquivo `.env.example` ser, para ajudar a ter valores padrões e fácil referência de quais variáveis deve existir em cada runtime.

Certifique-se que possui um `.env` na raiz do projeto antes de executá-lo!

### Docker <a name="docker"></a>
Um `Dockerfile` está presente na raiz do projeto, assim como um `docker-compose.yml` com uma configuração mínima viável para a execução do projeto.

No `docker-compose.yml` também há referência de execução de um banco de dados e como linká-lo ao serviço de backend.

### Execução <a name="run"></a>
Em uma máquina com **Docker** e **Docker Compose** instalados, basta configurar seu arquivo `.env` e executar
```bash
docker-compose up api
```
para iniciar a aplicação.

A execução de testes e demais comandos listados em [Scripts](#scripts) pode ser feita a partir de uma nova sessão dentro do container
```bash
docker-compose exec api bash # Inicia uma sessão dentro de um container já em execução
# ou
docker-compose run --rm api bash # Cria um container novo e inicia uma sessão
```

-------------------
## Scripts <a name="scripts"></a>
Uma vez dentro do container configurado, ou em ambiente instalado, os seguintes scripts estão disponiveis com `yarn run SCRIPT`

| Script | Descrição |
| ------ | ------ |
| build | Compila o projeto gerando na pasta dist os scripts para produção |
| format | Formata automaticamente o código com o padrão definido pelo prettier |
| lint | Roda o ESLINT para conferir o styleguide do código, corrigindo automaticamente erros simples |
| start | Inicia o servidor sem hot auto-reload |
| start:dev | Inicia o servidor de desenvolvimento com hot auto-reload |
| start:debug | Inicia o servidor de desenvolvimento com hot auto-reload em modo debug |
| start:prod | Inicia o entrypoint gerado no build em modo produção |
| test | Executa todos os testes unitários encontrados na aplicação |
| test:watch | Inicia o servidor de teste com hot auto-reload de todos os testes unitários encontrados na aplicação |
| test:cov | Gera o relatório de cobertura dos testes no código |
| test:debug | Executa os testes unitários em modo debug |
| test:e2e | Executa os testes de integração |

O comando padrão do container de desenvolvimento definido no `docker-compose.yml` é o `start:dev`.

Tenha em vista que o container também possui o [Nest CLI](https://docs.nestjs.com/cli/overview) habilitado globalmente. Isso permite a utilização de [comandos para geração](https://docs.nestjs.com/cli/usages) de diversos recursos.
> Por padrão, o Nest gera códigos com aspas duplas e ponto e vírgulas. É necessário a execução do comando de formatação de código após a geração destes recursos para garantir o [padrão adotado](#coding).

> Por padrão, o Nest gera testes no mesmo nível dos demais arquivos. Prefira criar uma pasta de testes neste nível e armazenar os testes dentro deles para evitar um *bloating* das pastas.

-------------------
## Linguagem e Padrão de Código <a name="coding"></a>
Esta arquitetura utiliza o **Typescript** como linguagem de codificação para Node.js. O framework adotado suporta e é desenvolvido utilizando as features de Typescript extensivamente, o que é notado em muitos lugares do código.

Apesar de possivelmente adicionar uma camada de diferença de sintaxe que muitos desenvolvedores podem não estar adaptados, TS trás alguns benefícios como:
- Documentação e ferramentas de auto-complete a nível de IDEs/Editores de código
- Melhor tooling para debug ao desenvolvedor, fazendo verificações de erros e garantias de tipagens ao codificar
- Utilização de funcionalidades como Decorators para fazer gerência de dependências de forma padronizada e reutilizável
- Fornece um código mais confiável e explícito, e quanto mais explícito melhor :)
- Entre outros


O padrão de código adotado é o [Standard](https://standardjs.com/). O projeto já possui um linter e o prettier configurado que já garante a formatação desejada no padrão definido. Arquivos de configuração `.prettierrc` e `.eslintrc.js` explicita as configurações, que dentre as poucas decisões define: **utilização obrigatória de aspas SIMPLES** e a **não-utilização de ponto e vírgula**.

UM arquivo `.editorconfig` também dita as configurações acerca da formatação de arquivos: **identação com 2 espaços**, com **codificação em UTF-8** e com **linha em branco ao final dos arquivos**.

> Um comando `yarn format` está disponível para formatação automática do código no padrão desejado.

-------------------
## Detalhes Técnicos <a name="detalhes_tecnicos"></a>
### Gerência de Dependências <a name="dependencias"></a>

Nest adota extensivamente conceitos como a **Injeção de Dependência** e a **Inversão de Controle**. `Providers` é um dos principais conceitos dentro do framework, que são basicamente classes anotadas que podem se comportar de diferentes formas (services, repositories, factories, helpers, ...).

A ideia principal é que um `provider` pode **injetar** dependências. O framework possui uma gerência em run-time de um design pattern bem comum, que é a de injeção de dependência. O Nest baseou-se profundamente no padrão adotado pelo Angular e pode ser melhor explorado [na sua documentação](https://angular.io/guide/dependency-injection)

> Isso permite adotar estratégias *SOLID-like* mas não necessariamente precisam ser feitas.

![alt text](https://docs.nestjs.com/assets/Components_1.png)

- Links:
  - [Providers (Nest)](https://docs.nestjs.com/providers)
  - [Circular Dependency (Nest)](https://docs.nestjs.com/fundamentals/circular-dependency)
  - [Dependency Injection & Inversion of Control (Nest)](https://docs.nestjs.com/fundamentals/custom-providers)
  - [Dependency Inversion Principle (Wikipedia)](https://en.wikipedia.org/wiki/Dependency_inversion_principle)


### Banco de Dados e ORM <a name="database"></a>
TODO: Write it

- Links:
  - [Database (Nest)](https://docs.nestjs.com/techniques/database)



### GraphQL <a name="graphql"></a>
TODO: Write it

#### Porque adotar schema-first <a name="schema-first"></a>
TODO: Write it

- Links:
  - [Database (Nest)](https://docs.nestjs.com/graphql/quick-start#schema-first)

### Microsserviços <a name="microservices"></a>
TODO: Write it

- Links:
  - [Microsserviços (Nest)](https://docs.nestjs.com/microservices/basics)
  - [Kafka (Nest)](https://docs.nestjs.com/microservices/kafka)
  - [Redis (Nest)](https://docs.nestjs.com/microservices/redis)

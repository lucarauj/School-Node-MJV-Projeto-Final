[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/LICENSE)

<h1 align="center">MJV School Node.js </h1>
<h1 align="center">Projeto Final </h2>

<p align="center"><img width="450px" src="https://github.com/lucarauj/assets/blob/main/MJV%20School.jpg" /></p>

<br>

## Detalhes Da Aplicação:

- A aplicação consiste no Gerenciamento de Funcionários e Produtos, com autenticação para todas as rotas.
- O projeto pode ser aplicado para qualquer tipo de empresa, podendo se adequar para cada tipo e tamanho de negócio.

<br>

## Diretrizes Do Projeto:

- Utilizar boas práticas de criação de pastas/estruturação do projeto;
- Utilizar typescript para escrever o código;
- Utilizar express para roteamento da aplicação;
- Criar no mínimo dois CRUD's(Create, Read, Update e Delete) completos de alguma funcionalidade, conectando com banco de dados MongoDB;
- Criar um endpoint para autenticação dos usuários da sua aplicação e devolver um token com expiração para 1 Hora;
- Criar no mínimo 4 endpoints que só poderão ser acessados por usuários autenticados.

<br>

## Iniciando O Projeto:

- npm init

<br>

## Instalando Dependências:

- npm install typescript --save
- npm install ts-node ts-node-dev --save
- npm install cors express --save
- npm install @types/express @types/cors --save-dev
- npm install @types/node --save-dev
- npm install mongoose dotenv --save
- npm install bcrypt --save
- npm install @types/bcrypt --save-dev
- npm install jsonwebtoken --save
- npm install @types/jsonwebtoken --save-dev

<br>

## Criação Do tsconfig.json:

- tsc --init

<br>

## 💻 Regras Implementadas:

- Validação no cadastro de Produtos e Funcionários procurando no banco de dados se o Código ou Matrícula já existem;
- Validação na atualização de Produtos e Funcionários se o Código ou Matrícula informado no Request existe no banco de dados;
- Validação no delete de Produtos e Funcionários se o Código ou Matrícula informado no Request existe no banco de dados;

<br>

## 🛑 Utilizando O Postman:

<br>

## 1️⃣ AUTHORIZATION

### 1️⃣ POST - MATRÍCULA INEXISTENTE
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/Autentica%C3%A7%C3%A3o%20com%20matr%C3%ADcula%20inexistente.png"/>

### 1️⃣ POST - SENHA INCORRETA
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/Autentica%C3%A7%C3%A3o%20com%20senha%20incorreta.png"/>

### 1️⃣ POST - GERAÇÃO DE TOKEN
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/Autentica%C3%A7%C3%A3o%20com%20gera%C3%A7%C3%A3o%20de%20Token.png"/>

### 1️⃣ GET PRODUCTS - ACESSO NEGADO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20products%20-%20Acesso%20negado.png"/>

### 1️⃣ GET EMPLOYEES - ACESSO NEGADO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20employees%20-%20Acesso%20negado.png"/>

<br>

## 2️⃣ PRODUCTS

### 2️⃣ POST
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/POST%20products.png"/>

### 2️⃣ POST- VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/POST%20products%20-%20valida%C3%A7%C3%A3o.png"/>

### 2️⃣ GET ALL
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20ALL%20products.png"/>

### 2️⃣ GET CÓDIGO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20products%20by%20c%C3%B3digo.png"/>

### 2️⃣ GET CÓDIGO - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20products%20by%20c%C3%B3digo%20-%20valida%C3%A7%C3%A3o.png"/> 

### 2️⃣ PUT
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/PUT%20products.png"/>

### 2️⃣ PUT - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/PUT%20products%20-%20valida%C3%A7%C3%A3o.png"/>

### 2️⃣ DELETE
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/DELETE%20products.png"/>

### 2️⃣ DELETE - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/DELETE%20products%20-%20valida%C3%A7%C3%A3o.png"/>

<br>

## 3️⃣ EMPLOYEES

### 3️⃣ POST
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/POST%20employees.png"/>

### 3️⃣ POST- VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/POST%20employees%20-%20valida%C3%A7%C3%A3o.png"/>

### 3️⃣ GET ALL
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20ALL%20employees.png"/>

### 3️⃣ GET MATRÍCULA
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20employees%20by%20matr%C3%ADcula.png"/>

### 3️⃣ GET MATRÍCULA - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/GET%20employees%20by%20matr%C3%ADcula%20-%20valida%C3%A7%C3%A3o.png"/> 

### 3️⃣ PUT
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/PUT%20employees.png"/>

### 3️⃣ PUT - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/PUT%20employees%20-%20valida%C3%A7%C3%A3o.png"/>

### 3️⃣ DELETE
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/DELETE%20employees.png"/>

### 3️⃣ DELETE - VALIDAÇÃO
<img width="750px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/DELETE%20employees%20-%20valida%C3%A7%C3%A3o.png"/>

<br>

## ✅ Repositórios:

### SEMANA 2 👉 [Clique aqui 🖱](https://github.com/lucarauj/School-Node-MJV-Semana-2)
### SEMANA 3 👉 [Clique aqui 🖱](https://github.com/lucarauj/School-Node-MJV-Semana-3)
### SEMANA 4 👉 [Clique aqui 🖱](https://github.com/lucarauj/School-Node-MJV-Semana-4)
### SEMANA 5 👉 [Clique aqui 🖱](https://github.com/lucarauj/School-Node-MJV-Semana-5)
### SEMANA 6 👉 [Clique aqui 🖱](https://github.com/lucarauj/School-Node-MJV-Semana-6)

<br>

<h1 align="center">🚀 Agradecimentos ❤ </h1>
<h2 align="center">✔ MJV Technology & Innovation </h2>
<h2 align="center">✔ Nathan Carlos Santos Lima </h2>
<h2 align="center">✔ Ieda Regina de Paula </h2>
<h2 align="center">✔ Todos os participantes </h2>
<p align="center"><img width="850px" src="https://github.com/lucarauj/School-Node-MJV-Projeto-Final/blob/main/images/MJV.png" /></p>

<br>

## Aluno

#### Lucas Araujo

<a href="https://www.linkedin.com/in/lucarauj"><img alt="lucarauj | LinkdeIN" width="40px" src="https://user-images.githubusercontent.com/43545812/144035037-0f415fc7-9f96-4517-a370-ccc6e78a714b.png" /></a>


# Projeto de Processo Seletivo - Trade Technology
Este projeto foi desenvolvido como parte do processo seletivo da empresa Trade Technology. Ele é uma aplicação web que utiliza as seguintes tecnologias:

- TypeScript - Como linguagem de programação
- React - Framework FrontEnd
- React Query - Para comunicação da API
- Vite - Bundler para o React
- React ApexChart - Para a criação de gráficos

## Descrição do Projeto
O objetivo deste projeto é criar uma aplicação que exiba dados estatísticos de um time selecionado pelo usúario. Ele utiliza a biblioteca React para a criação da interface do usuário e o React ApexChart para exibir gráficos de dados. O React Query é utilizado para a gestão de dados e consultas à API.

## Instalação
Siga as instruções abaixo para executar o projeto localmente:

Faça o clone do repositório:
```shell
git clone https://github.com/thales-sz/trade-tech.git
```
Navegue até o diretório do projeto:
```shell
cd trade-tech
```
Instale as dependências do projeto:
```shell
npm install
```
Inicie o servidor de desenvolvimento:
```shell
npm run dev
```
Acesse a aplicação em seu navegador em http://localhost:5173.

## Rodando com Docker

 - Você precisa ter instaldo o Docker em sua máquina anteriormente!

Existe a opção de rodar aplicação com o Docker, siga as instruções:

Faça o clone do repositório:
```shell
git clone https://github.com/thales-sz/trade-tech.git
```
Navegue até o diretório do projeto:
```shell
cd trade-tech
```
Gere a imagem Docker através do Dockerfile presente no projeto:
```shell
docker build . -t trade-tech-image 
```
Rode o container Docker através do imagem gerada anteriormente:

 - Certifique-se que a porta 5173:5173 esteja disponivel.
 
```shell
docker run -d -p 5173:5173 --name trade-tech trade-tech-image
```

Acesse a aplicação em seu navegador em http://localhost:5173.

## Funcionamento

Após instalar e executar o projeto localmente, você poderá visualizar a interface da aplicação no seu navegador. A página inicial solicitará o login do usúario à aplicação que é feito informando a chave da API. Ápos isso o usúario será redirecionado ao formúlario onde é possivel selecionar o país, temporada, liga e o time desejado. Na última página é demonstrado os dados estatísticos do time selecionado, sua escalação de jogadores e também um gráfico de gols pró e contra.


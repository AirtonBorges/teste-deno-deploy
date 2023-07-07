import fetch from 'node-fetch';
export default async ({ params, response }) => {
    const dados = await fetch('https://api.github.com/users/github');
    const resposta = await dados.json();
    response.body = resposta;
  };
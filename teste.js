import fetch from 'npm:node-fetch@3.3.1';
export default async ({ params, response }) => {
    const dados = await fetch('https://api.github.com/users/github');
    const resposta = await dados.json();
    response.body = resposta;
  };
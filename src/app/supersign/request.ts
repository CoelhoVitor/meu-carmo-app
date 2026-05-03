import RequisicaoJson from './teste_requisicao.json';

const requestOptions: RequestInit = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(RequisicaoJson),
  redirect: 'follow',
};

fetch('/api/supersign/enviar-assinatura', requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));

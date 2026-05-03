Pontuando algumas coisas importantes para o contexto:
-Sempre configure o Api token no header Authorization de todas as suas chamadas.

# TOKEN ESTÁTICO

-O token estático é um token fixo e predefinido, utilizado para autenticação contínua na API. Ele é simples de implementar e ideal para cenários onde a segurança não exige tokens temporários.

Para utilizá-lo basta inserir seu api_token no header "Authorization" da requisição, com o prefixo "Bearer ". Por exemplo:

`  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer API_TOKEN'
  },`

# JWT (recomendado)

-Os Json Web Tokens (JWT) são uma forma eficaz e segura de autenticação entre entidades distintas, garantindo ainda mais segurança durante o desenvolvimento de maneira simples e eficiente.

Exemplo para obter o Token de Acesso
[{{api_url}}](https://sandbox.api.zapsign.com.br)/api/v1/auth/token/5351

com o Body
{
"username": "vitorvcs@hotmail.com",
"password": "#Benedito777"
}

Exemplo de resposta
{
"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc3NzQxNTExNCwiaWF0IjoxNzc2ODEwMzE0LCJqdGkiOiJjZjBkNThjMTIxNGM0Nzg3YWJhZDgxMzE2YzA2ZGVkZSIsInVzZXJfaWQiOiI4MzI3IiwiY29tcGFueV9pZCI6NTM1MSwidHlwZSI6InB1YmxpYyJ9.6hNgEQMUTm6qLbpSBY8lEdg0crCsh9v3OXZ4dJRatvE",
"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc2ODk2NzE0LCJpYXQiOjE3NzY4MTAzMTQsImp0aSI6ImQ4ZjU0OTRmZDkwOTRhNDFiMDQ3N2JjNDM5MTE2NmQwIiwidXNlcl9pZCI6IjgzMjciLCJjb21wYW55X2lkIjo1MzUxLCJ0eXBlIjoicHVibGljIn0.4tQXeaTLZg0KIu3BPxV6-3XU9VAtLprtcArpjhd12Bw"
}

"access" é o novo API_TOKEN

# Atualizar token de acesso

O Token de Atualização serve para renovar o Token de Acesso. Esse token tem um tempo de expiração de 1 hora.

Exemplo para obter a atualização do Token de Acesso
[{{api_url}}](https://sandbox.api.zapsign.com.br)/api/v1/auth/token-refresh/

com o Body

{
"refresh": "Token_obtido_na_chamada_do_token_de_acesso"
}

Exemplo de resposta
{
"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

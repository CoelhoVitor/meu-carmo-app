
# Rubrica

### Propriedades:

| nome                       |  tipo  | descrição                                                          |
| -------------------------- | :----: | -------------------------------------------------------------------- |
| page                       | number | número da pagina                                                    |
| relative\_position\_bottom | number | posição em relação a parte inferior do documento                 |
| relative\_position\_left   | number | posição em relação a parte esquerda                              |
| relative\_size\_x          | number | tamanho no eixo horizontal                                           |
| relative\_size\_y          | number | tamanho no eixo vertical                                             |
| type                       | string | tipo da assinatura: "signature" para assinatura e "visto" para visto |
| signer\_token              | string | token do signatário                                                 |


Exemplo: Use um objeto `rubricas` com **duas posições na mesma página**

```JSON
{
  "rubricas": [
    {
      "page": 4,
      "relative_position_bottom": 5,
      "relative_position_left": 20,
      "relative_size_x": 19.55,
      "relative_size_y": 9.42,
      "signer_token": "TOKEN_DO_PRIMEIRO_SIGNATARIO",
      "type": "signature"
    },
    {
      "page": 4,
      "relative_position_bottom": 5,
      "relative_position_left": 70,
      "relative_size_x": 19.55,
      "relative_size_y": 9.42,
      "signer_token": "TOKEN_DO_SEGUNDO_SIGNATARIO",
      "type": "signature"
    }
  ]
}
```


A lógica aqui é:

* `relative_position_bottom: 5` — deixa as assinaturas perto do final da página
* `relative_position_left: 20` — fica no meio da primeira metade
* `relative_position_left: 70` — fica no meio da segunda metade

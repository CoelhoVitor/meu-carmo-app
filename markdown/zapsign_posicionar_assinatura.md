# Opcional: Posicionar assinaturas

## Posicionamento com âncoras de texto

**É possível definir onde as assinaturas e rubricas serão inseridas** em documentos **PDF ou DOCX** usando **textos âncora**.

Basta inserir um identificador, como `"<<signer1>>"`, no documento, e a plataforma posicionará automaticamente a assinatura ou rubrica **no exato local onde esse texto aparecer**.

> **Dica:** utilize `<< >>` para evitar conflitos com palavras comuns do documento.

#### **Campos**

- **`signature_placement`**: define o local da **assinatura** usando texto âncora.\
  Exemplo: `"signature_placement": "<<signer1>>"`
- **`rubrica_placement`**: define o local da **rubrica** usando texto âncora.\
  Exemplo: `"rubrica_placement": "<<signer1Rubrica>>"`

Se o texto aparecer mais de uma vez, a assinatura ou rubrica será posicionada em **todos os locais**.

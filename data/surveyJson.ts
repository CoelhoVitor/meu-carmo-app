const inicio = {
  name: 'page1',
  elements: [
    {
      type: 'text',
      title: 'Nome da Atividade',
      name: 'nome-da-atividade',
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'radiogroup',
      title: 'Seção',
      name: 'secao',
      choices: [
        'Alcateia Kotick',
        'Alcateia Mohwa',
        'Alcateia Seeonee',
        'Tropa Cavalo Marinho',
        'Tropa Xingu',
        'Tropa Viking',
        'Clã Fênix',
      ],
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'radiogroup',
      title: 'Nível da Atividade',
      name: 'nivel-da-atividade',
      choices: [
        'Local-Seção',
        'Grupo',
        'Distrital',
        'Regional',
        'Nacional',
        'Internacional',
      ],
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
  ],
};

const inscricoes = {
  name: 'page2',
  elements: [
    {
      type: 'text',
      title: 'Valor da taxa (R$)',
      name: 'valor-da-taxa',
      maskType: 'currency',
      maskSettings: {
        min: 0,
        precision: 2,
        prefix: 'R$',
        decimalSeparator: ',',
        thousandsSeparator: '.',
        saveMaskedValue: false,
      },
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'text',
      title: 'Data limite para inscrição',
      name: 'data-limite-para-inscricao',
      maskType: 'datetime',
      maskSettings: {
        pattern: 'dd/mm/yyyy',
        min: '2025-01-01',
        max: '2100-12-31',
      },
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'checkbox',
      title: 'A taxa da atividade cobrirá os seguintes itens',
      name: 'itens-cobertos-pela-taxa',
      choices: [
        'Transporte',
        'Material',
        'Alimentação',
        'Pernoite',
        'Distintivo',
        'Certificado',
        'Camiseta',
      ],
      showOtherItem: true,
      otherText: 'Outro (especifique)',
      otherErrorText: 'Por favor, especifique',
      storeOthersAsComment: false, // todo ver como isso fica ao salvar, se vai sobreescrever a resposta
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'file',
      title: 'Anexar lista de participantes inscritos do Paxtu',
      name: 'lista-de-participantes-paxtu',
      waitForUpload: true,
      allowMultiple: false,
      storeDataAsText: true,
      // onUploadFile: () => {},
      maxSize: 10240000, // 10MB
      // acceptedTypes: '.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg',
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'text',
      title: 'Escotista responsável pela atividade',
      name: 'escotista-responsavel',
    },
    {
      type: 'radiogroup',
      title: 'Tipo de Atividade',
      name: 'tipo-de-atividade',
      choices: ['Acampamento'],
    },
    {
      type: 'radiogroup',
      title: 'Será na sede?',
      name: 'atividade-na-sede',
      choices: ['Sim'],
    },
  ],
};

const informacoesAtividade = {
  name: 'page3',
  elements: [{}],
};

export const surveyJson = {
  checkErrorsMode: 'onValueChanged',
  textUpdateMode: 'onTyping',
  pages: [inscricoes, informacoesAtividade],
};

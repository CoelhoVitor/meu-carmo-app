const inscricoes = {
  type: 'panel',
  name: 'inscricoes',
  title: 'Inscrições',
  state: 'default',
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
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'radiogroup',
      title: 'Tipo de Atividade',
      name: 'tipo-de-atividade',
      choices: ['Acampamento'],
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'radiogroup',
      title: 'Será na sede?',
      name: 'atividade-na-sede',
      choices: ['Sim'],
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
  ],
};

const informacoesAtividade = {
  type: 'panel',
  name: 'informacoes-atividade',
  title: 'Informações da Atividade',
  state: 'default',
  elements: [
    {
      type: 'text',
      title: 'Data inicial',
      name: 'data-hora-inicial',
      maskType: 'datetime',
      maskSettings: {
        pattern: 'dd/mm/yyyy HH:MM',
        min: '2025-01-01',
        max: '2100-12-31',
      },
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'text',
      title: 'Data final',
      name: 'data-hora-final',
      maskType: 'datetime',
      maskSettings: {
        pattern: 'dd/mm/yyyy HH:MM',
        min: '2025-01-01',
        max: '2100-12-31',
      },
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
    },
    {
      type: 'radiogroup',
      title: 'Cessão de uso',
      name: 'cessao-de-uso',
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
      choices: ['Gratuito'],
    },
  ],
};

const anexoDocumentos = {
  type: 'panel',
  name: 'anexo-de-documentos',
  title: 'Anexo de Documentos (opcional)',
  state: 'collapsed',
  elements: [
    {
      type: 'comment',
      title: 'Programação da atividade (Texto)',
      name: 'programacao-da-atividade-texto',
      isRequired: false,
      autoGrow: true,
      maxLength: 5000,
    },
    {
      type: 'file',
      title: 'Programação da atividade (Documento)',
      name: 'programacao-da-atividade-documento',
      isRequired: false,
      waitForUpload: true,
      allowMultiple: false,
      storeDataAsText: true,
      maxSize: 10240000,
    },
  ],
};

const formulario = {
  name: 'formulario',
  title: 'Solicitação de Atividade',
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
    {
      ...inscricoes,
    },
    {
      ...informacoesAtividade,
    },
    {
      ...anexoDocumentos,
    },
  ],
};

const por = {
  name: 'por-atividade',
  type: 'panel',
  title: 'POR - Princípios, Organização e Regras',
  state: 'default',
  elements: [
    {
      type: 'html',
      name: 'por-regra-141',
      html: `<p><b>Regra 141 - Orientação Geral sobre Segurança</b></p>
      </br><p><b>I -</b> <span>A segurança nas atividades escoteiras deve ser a principal preocupação de seus dirigentes e a responsabilidade pela segurança recai sobre a diretoria do nível a quem está subordinado o evento.</span></p>
      </br><p><b>II -</b> <span>Cabe aos escotistas e dirigentes assegurarem-se de que toda e qualquer atividade escoteira seja realizada dentro das orientações técnicas, das regras da UEB e conforme o que estabelece legislação brasileira.</span></p>
      </br><p><b>III -</b> <span>Todos os participantes em atividades escoteiras devem estar previamente inteirados e capacitados às regras de segurança estabelecidas e necessárias para atividade a ser desenvolvida, cumprindo-as e as fazendo cumprir.</span></p>
      </br><p><b>IV -</b> <span>A segurança nas atividades pressupõe a presença de adultos responsáveis com conhecimento e capacitação nas habilidades necessárias para sua realização, o uso de equipamento adequado e a preparação prévia aos participantes.</span></p>
      </br><p><b>V -</b> <span>A realização de qualquer atividade escoteira está condicionada à existência de planejamento aprovado pela diretoria do nível a quem está subordinada, que contenha todas as informações relativas ao local, meio de transporte, recursos materiais e humanos existentes ou a providenciar, análise de riscos, plano de segurança, as atividades que serão realizadas, quem serão responsáveis por elas e que tipo de roupa ou proteção exigem.</span></p>
      </br><p><b>VI -</b> <span>A participação de membros juvenis em atividades escoteiras fora da sede está condicionada à autorização de seus pais ou responsáveis, em documento específico para a respectiva atividade. No caso de pais separados, devem ser observados os termos da guarda legal.</span></p>
      </br><p><b>VII -</b> <span>É vedada a expedição de autorização permanente para atividades externas, sendo exigida autorização específica para cada uma das atividades realizadas conforme indica o artigo VI desta regra.</span></p>
      </br><p><b>VIII -</b> <span>Para qualquer atividade escoteira, o Chefe de Seção deve obter com os pais ou responsáveis, informações sobre as condições de saúde da criança, adolescente ou jovem e a sua eventual necessidade de dieta especial ou medicação, com apresentação da receita médica válida. Essas informações devem ser prestadas por escrito, pelos pais e, no caso do Ramo Pioneiros, pelo próprio jovem.</span></p>
      </br><p><b>IX -</b> <span>No Ramo Pioneiro, para os jovens maiores de 18 anos, não é necessária a autorização dos pais ou responsáveis, mas é indispensável a autorização da Diretoria da UEL.</span></p>
      </br><p><b>X -</b> <span>No caso do Ramo Pioneiro, considerando as características da faixa etária e proposta educativa do Ramo, os jovens poderão realizar qualquer tipo de atividade desacompanhados dos escotistas, desde que seguidas as orientações deste P.O.R. e demais resoluções da UEB.</span></p>
      </br><p><b>XI -</b> <span>Os encarregados de uma atividade escoteira devem seguir as recomendações do Manual do Escotista, em especial as que tratam sobre a realização de atividades ao ar livre. Deve-se ter especial cuidado em relação aos acampamentos/ acantonamentos, tendo em vista a escolha do local, as condições climáticas, a possível ocorrência de eventos naturais adversos, a salubridade do terreno, a água a ser usada, a alimentação, as condições dos equipamentos, a segurança nas atividades aquáticas e nas atividades noturnas.  Além disso, deve-se sempre estar preparado para eventual necessidade de socorro médico.</span></p>
      </br><p><b>XII -</b> <span>Não são permitidos, sob quaisquer pretextos, os trotes, os castigos físicos, os ataques a acampamentos, os jogos violentos e as cerimônias de mau gosto, que possam vir a constranger, humilhar ou colocar em risco a integridade física, psíquica ou moral de qualquer participante da atividade.</span></p>
      </br><p><b>XIII -</b> <span>Não é permitido aos jovens o uso de pólvora, fogos de artifício e materiais semelhantes em qualquer tipo de atividade escoteira.</span></p>
      </br><p><b>XIV -</b> <span>Os responsáveis pela organização de uma atividade escoteira ao ar livre devem revesti-la de todas as iniciativas e providências necessárias para garantir o mínimo impacto ambiental e fazer com que todos os envolvidos tenham uma atitude de conservação do meio ambiente.</span></p>`,
      startWithNewLine: false,
    },
    {
      type: 'checkbox',
      title: 'Confirmação',
      name: 'concordancia-por-regra-141',
      isRequired: true,
      requiredErrorText: 'Campo obrigatório',
      choices: [
        {
          value: true,
          text: 'Declaro que li e estou de acordo com a Regra 141 do POR da UEB',
        },
      ],
    },
  ],
};

const final = {
  name: 'pagina-final',
  elements: [
    {
      type: 'html',
      name: 'declaracao-final',
      html: `<b>Ao submeter este pedido de autorização para Atividade Externa declaro estar cumprindo todos os pré-requisitos que se façam necessários a fim de garantir sua realização de forma segura para todo e qualquer participante. 
      </br>Declaro, ainda, que cumprirei igualmente todos os requisitos que se façam necessários durante a execução da referida atividade, principalmente aqueles expressos no POR e nos padrões de atividades escoteiras, responsabilizando-me, em nome de todos os demais adultos voluntários envolvidos, por seu bom andamento e segurança de todos.</b>`,
      startWithNewLine: false,
    },
  ],
};

export const surveyJson = {
  checkErrorsMode: 'onValueChanged',
  textUpdateMode: 'onTyping',
  pages: [formulario, por, final],
};

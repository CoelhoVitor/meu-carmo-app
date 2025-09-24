export const surveyJson = {
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'text',
          name: 'nome',
          title: 'Qual é o seu nome?',
        },
        {
          type: 'radiogroup',
          name: 'idade',
          title: 'Qual sua faixa etária?',
          choices: [
            'Até 18 anos',
            '19-30 anos',
            '31-50 anos',
            'Acima de 50 anos',
          ],
        },
      ],
    },
  ],
};

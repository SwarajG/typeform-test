const indexMapping = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j'
};

export const formatData = (data) => {
  const questionnaire = {
    title: data.name,
    description: data.description,
  };
  const questions = data.questions;
  return { questionnaire, questions };
}

export const questionType = {
  Mcq: 'multiple-choice',
  Text: 'text'
};

export const boolType = {
  "true": "true",
  "false": "false"
}

export const getKeyForIndex = index => indexMapping[index].toUpperCase();
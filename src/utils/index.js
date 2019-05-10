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
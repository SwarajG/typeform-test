import React from 'react';

const context = React.createContext({
  questionnaire: {},
  isQuizStarted: false,
  questions: [],
  activeIndex: 0,
  questionRefs: [],
  parentRef: null,
  updateQuestionRefs: () => {},
  updateIsQuizStarted: () => {},
  updateQuestion: () => {},
  updateActiveIndex: () => {},
  updateParentRef: () => {}
});

export default context;
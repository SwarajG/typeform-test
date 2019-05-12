import React, { Component } from 'react';
import s from './styles';
import QuestionInfo from '../QuestionInfo';
import Context from '../../utils/context';
import getFunctionfromType from '../../components/QuestionType';

export default class Question extends Component {
  render() {
    const { question, index } = this.props;
    const { activeIndex } = this.context;
    const Options = getFunctionfromType(question.question_type);
    return (
      <div className={s.mainWrapper(activeIndex === index)}>
        <div className={s.questionWrapper}>
          <QuestionInfo question={question} index={index} />
        </div>
        <div className={s.optionsWrapper}>
          <Options question={question} index={index} />
        </div>
      </div>
    );
  }
}

Question.contextType = Context;
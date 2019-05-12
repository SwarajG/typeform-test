import React, { Component } from 'react';
import s from './styles';
// import c from '../../utils/common-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class QuestionInfo extends Component {
  render() {
    const { question, index } = this.props;
    return (
      <div className={s.questionWrapper}>
        <div className={s.questionIndex}>
          <span className={s.index}>
            {index + 1} <FontAwesomeIcon icon={faArrowRight} className={s.icon} />
          </span>
        </div>
        <div className={s.questionTitle}>
          <p className={s.titleText}>
            {question.headline}
          </p>
        </div>
      </div>
    );
  }
}
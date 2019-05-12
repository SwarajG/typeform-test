import React, { Component } from 'react';
import { getKeyForIndex } from '../../utils';
import Option from '../../components/Option';
import Context from '../../utils/context';
import actions from '../../utils/actions';
import { moveDown } from '../../component-helper';
import s from './styles';

export default class MCQ extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown = (e) => {
    const code = e.which;
    const { activeIndex, updateQuestion } = this.context;
    const { index, question } = this.props;
    if (index === activeIndex) {
      const selectedIndex = code % 65;
      if (selectedIndex < question.choices.length && selectedIndex >= 0) {
        const action = {
          id: question.identifier,
          actionType: actions.CHANGE_SELECTED_INDEX,
          selectedIndex,
          multiple: question.multiple
        };
        updateQuestion(action);
        moveDown(this.context, 500);
      }
    }
  }

  render() {
    const { question } = this.props;
    return (
      <div className={s.pptionsWrapper}>
        {question.choices.map((choice, index) => (
          <Option
            questionId={question.identifier}
            choice={choice}
            keyName={getKeyForIndex(index + 1)}
            multiple={question.multiple}
            key={getKeyForIndex(index + 1)}
          />
        ))}
      </div>
    );
  }
}

MCQ.contextType = Context;
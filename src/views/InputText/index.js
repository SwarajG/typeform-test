import React, { Component } from 'react';
import Context from '../../utils/context';
import { moveDown } from '../../component-helper';
import actions from '../../utils/actions';
import s from './styles';

export default class InputText extends Component {
  updateQuestion = (e) => {
    const { value } = e.target;
    const { updateQuestion } = this.context;
    const { question } = this.props;
    const action = {
      id: question.identifier,
      actionType: actions.CHANGE_INPUT_VALUE,
      value,
    };
    updateQuestion(action);
  }

  onInputKeyDown = (e) => {
    const keyCode = e.which;
    if (keyCode === 13) {
      moveDown(this.context, 250);
    }
  }

  render() {
    const { question } = this.props;
    return (
      <div className={s.inputClassWrapper}>
        <input
          className={`${s.input} inputClass`}
          placeholder="Type your answer here..."
          value={question.value || ''}
          onChange={this.updateQuestion}
          onKeyDown={this.onInputKeyDown}
        />
      </div>
    );
  }
}

InputText.contextType = Context;
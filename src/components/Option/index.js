import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Context from '../../utils/context';
import actions from '../../utils/actions';
import s from './styles';
import { moveDown } from '../../component-helper';

export default class Options extends Component {
  updateQuestion = (e) => {
    const { updateQuestion } = this.context;
    const { choice, question } = this.props;
    const action = {
      id: question.identifier,
      actionType: actions.CHANGE_OPTION,
      selectedOption: choice.value,
      selected: !choice.selected,
      multiple: question.multiple
    };
    updateQuestion(action);
    moveDown(this.context, 250);
  }

  render() {
    const { choice, keyName } = this.props;
    const isSelected = choice.selected;
    return (
      <div className={s.optionsWrapper(isSelected)} onClick={this.updateQuestion}>
        <div className={s.keyNameWrapper}>
          <div className={s.keyValue(isSelected)}>
            <span className={s.key}>{keyName}</span>
          </div>
        </div>
        <div className={s.choiceLabel}>{choice.label}</div>
        {isSelected && (
          <div className={s.checkIcon}>
            <FontAwesomeIcon icon={faCheck} className={s.icon} />
          </div>
        )}
      </div>
    );
  }
}

Options.contextType = Context;
import React, { Component } from 'react';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Context from '../../utils/context';
import s from './styles';

export default class Footer extends Component {
  render() {
    const { activeIndex, questions } = this.context;
    const isLastActive = questions.length - 1 === activeIndex;
    const isFirstActive = activeIndex === 0;
    return (
      <div className={s.footer}>
        <div className={s.fotterWrapper}>
          <div className={s.actionButtonWrapper}>
            <Button className={s.button(isFirstActive)} disabled={isFirstActive}>
              <FontAwesomeIcon icon={faChevronUp} className={s.icon} />
            </Button>
            <Button className={s.button(isLastActive)} disabled={isLastActive}>
              <FontAwesomeIcon icon={faChevronDown} className={s.icon} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Footer.contextType = Context;
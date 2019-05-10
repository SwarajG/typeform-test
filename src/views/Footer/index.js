import React, { Component } from 'react';
import Button from '../../components/Button';
import s from './styles';

export default class Footer extends Component {
  render() {
    const { isLastIndex } = this.props;
    return (
      <div className={s.footer}>
        <div className={s.fotterWrapper}>
          <div className={s.actionButtonWrapper}>
            <Button className={s.button}>Up</Button>
            <Button className={s.button}>Down</Button>
          </div>
        </div>
      </div>
    );
  }
}
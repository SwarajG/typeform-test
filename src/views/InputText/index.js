import React, { Component } from 'react';
import s from './styles';

export default class InputText extends Component {
  render() {
    return (
      <div className={s.inputClassWrapper}>
        <input
          className={`${s.input} inputClass`}
          placeholder="Type your answer here..."
        />
      </div>
    );
  }
}
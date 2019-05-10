import React, { Component } from 'react';
import Button from '../../components/Button';
import s from './styles';

export default class StartScreen extends Component {
  componentDidMount() {
    window.addEventListener('keypress', this.listenOnEnter, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.listenOnEnter, false);
  }

  listenOnEnter = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      this.props.updateStartStartedStatus(true);
    }
  }

  render() {
    const { title, description } = this.props;
    return (
      <div className={s.contentWrapper}>
        <h1>{title}</h1>
        <h2 className={s.description}>{description}</h2>
        <Button onClick={() => this.props.updateStartStartedStatus(true)}>
          <div className={s.buttonText}>
            Let's Begin
          </div>
        </Button>
      </div>
    )
  }
}
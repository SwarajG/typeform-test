import React, { Component } from 'react';
import Button from '../../components/Button';
import Context from '../../utils/context';
import s from './styles';
import c from '../../utils/common-style';

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
      this.context.updateIsQuizStarted(true);
    }
  }

  render() {
    const { title, description } = this.props;
    return (
      <div className={`${c.container} `}>
        <div className={s.contentWrapper}>
          <h1 className={s.title}>{title}</h1>
          <h2 className={s.description}>{description}</h2>
          <Button onClick={() => this.props.updateStartStartedStatus(true)}>
            <div className={s.buttonText}>
              Let's Begin
            </div>
          </Button>
        </div>
      </div>
    )
  }
}

StartScreen.contextType = Context;
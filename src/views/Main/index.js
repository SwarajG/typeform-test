import React, { Component } from 'react';
import StartScreen from '../StartScreen';
import QuestionList from '../QuestionList';
import Footer from '../Footer';
import s from './styles';

export default class Main extends Component {
  render() {
    const {
      isQuizStarted,
      questionnaire,
      questions
    } = this.props;
    if (!isQuizStarted) {
      return (
        <StartScreen
          title={questionnaire.title}
          description={questionnaire.description}
        />
      );
    }
    return (
      <div className={s.mainWrapper}>
        <QuestionList questions={questions} />
        <Footer />
      </div>
    );
  }
}
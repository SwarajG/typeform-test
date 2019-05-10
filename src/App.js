import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Main from './views/Main';
import { getQuestionsData } from './dataService';
import { formatData } from './utils';
import s from './styles';

class App extends Component {
  state = {
    isQuizStarted: false,
    questions: [],
    activeIndex: -1,
    questionnaire: {},
    loading: true
  }

  async componentDidMount() {
    const response = await getQuestionsData();
    const { questionnaire, questions } = formatData(response);
    this.setState({
      loading: false,
      questionnaire,
      questions
    });
  }

  updateStartStartedStatus = value => this.setState({ isQuizStarted: value })

  renderLoader = () => (
    <div className={s.loaderWrapper}>
      <Loader 
        type="Triangle"
        color="#00BFFF"
        height="60"
        width="60"
      />
    </div>
  )

  render() {
    const { loading, questionnaire, questions, isQuizStarted } = this.state;
    if (loading) {
      return this.renderLoader();
    }
    console.log(questions);
    return (
      <div className={s.mainWrapper}>
        <Main
          questions={questions}
          isQuizStarted={isQuizStarted}
          questionnaire={questionnaire}
          updateStartStartedStatus={this.updateStartStartedStatus}
        />
      </div>
    )
  }
}

export default App;

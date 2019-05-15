import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import cloneDeep from 'clone-deep';
import Main from './views/Main';
import { getQuestionsData } from './dataService';
import { formatData, boolType } from './utils';
import Context from './utils/context';
import actions from './utils/actions';
import s from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      questionnaire: {},
      isQuizStarted: false,
      questions: [],
      activeIndex: 0,
      questionRefs: [],
      parentRef: null
    };
  }

  async componentDidMount() {
    const response = await getQuestionsData();
    const { questionnaire, questions } = formatData(response);
    this.setState({
      loading: false,
      questionnaire,
      questions,
      questionRefs: new Array(questions.length).fill(null)
    });
  }

  updateIsQuizStarted = value => this.setState({ isQuizStarted: value })

  updateQuestion = (action) => {
    const { questions } = this.state;
    const oldQuestions = cloneDeep(questions);
    let newQuestions = [];
    switch (action.actionType) {
      case actions.CHANGE_OPTION: {
        newQuestions = oldQuestions.map((question) => {
          if (question.identifier === action.id) {
            question.choices.forEach((choice) => {
              if (choice.value === action.selectedOption) {
                choice.selected = action.selected;
              } else if (action.multiple === boolType.false) {
                choice.selected = false;
              }
            });
          }
          return question;
        });
        break;
      }
      case actions.CHANGE_SELECTED_INDEX: {
        newQuestions = oldQuestions.map((question) => {
          if (question.identifier === action.id) {
            question.choices.forEach((choice, index) => {
              if (index === action.selectedIndex) {
                choice.selected = !choice.selected;
              } else if (action.multiple === boolType.false) {
                choice.selected = false;
              }
            });
          }
          return question;
        });
        break;
      }
      case actions.CHANGE_INPUT_VALUE: {
        newQuestions = oldQuestions.map((question) => {
          if (question.identifier === action.id) {
            question.value = action.value;
          }
          return question;
        });
        break;
      }
      default:
        break;
    }
    this.setState({
      questions: newQuestions
    });
  }

  updateQuestionRefs = refs => this.setState({ questionRefs: refs })

  updateParentRef = ref => this.setState({ parentRef: ref })

  updateActiveIndex = index => this.setState({ activeIndex: index })

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
    const {
      loading,
      questionnaire,
      questions,
      isQuizStarted,
      activeIndex,
      questionRefs,
      parentRef
    } = this.state;
    if (loading) {
      return this.renderLoader();
    }
    const contextData = {
      questionnaire,
      questions,
      isQuizStarted,
      activeIndex,
      questionRefs,
      parentRef,
      updateQuestion: this.updateQuestion,
      updateActiveIndex: this.updateActiveIndex,
      updateIsQuizStarted: this.updateIsQuizStarted,
      updateQuestionRefs: this.updateQuestionRefs,
      updateParentRef: this.updateParentRef
    };
    return (
      <Context.Provider value={contextData}>
        <div className={s.mainWrapper}>
          <Main
            questions={questions}
            isQuizStarted={isQuizStarted}
            questionnaire={questionnaire}
          />
        </div>
      </Context.Provider>
    )
  }
}

export default App;

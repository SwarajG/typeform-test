import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from '../Question';
import Context from '../../utils/context';
import { moveUp, moveDown, awayFromTop } from '../../component-helper';
import s from './styles';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.parent = null;
    this.questionRefs = [];
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown, false);
    this.context.updateQuestionRefs(this.questionRefs);
    this.context.updateParentRef(this.parent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown, false);
    this.questionRefs.forEach((ref, index) => this.questionRefs[index] = null);
    this.context.updateQuestionRefs(this.questionRefs);
    this.context.updateParentRef(null);
  }

  onScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.questionRefs.forEach((ref, index) => {
      const element = ReactDOM.findDOMNode(this.questionRefs[index]);;
      const coords = element.getBoundingClientRect();
      if (
        coords.y <= awayFromTop &&
        coords.y + coords.height > awayFromTop + 48
      ) {
        this.context.updateActiveIndex(index);
      }
    });
  }

  onKeydown = (e) => {
    if (e.which === 38) {
      e.preventDefault();
      e.stopPropagation();
      moveUp(this.context);
    } else if (e.which === 40) {
      e.preventDefault();
      e.stopPropagation();
      moveDown(this.context);
    }
  }

  render() {
    const { questions } = this.context;
    return (
      <div
        className={s.questionListWrapper}
        ref={ref => { this.parent = ref; }}
        onScroll={this.onScroll}
      >
        {questions.map((question, index) => (
          <div
            key={question.identifier}
            ref={ref => this.questionRefs[index] = ref}
            className={s.questionWrapper}
          >
            <Question
              question={question}
              index={index}
            />
            <div style={{ height: '48px' }}></div>
          </div>
        ))}
      </div>
    );
  }
}

QuestionList.contextType = Context;
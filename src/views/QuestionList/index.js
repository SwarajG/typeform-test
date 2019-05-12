import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from '../Question';
import Context from '../../utils/context';
import { moveUp, moveDown } from '../../component-helper';
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

  // onScroll = (e) => {
  //   const parent = ReactDOM.findDOMNode(this.parent);
  //   const { activeIndex, updateActiveIndex } = this.context;
  //   const element = ReactDOM.findDOMNode(this.questionRef[activeIndex]);
  //   // const awayFromTop = ((window.innerHeight * 40) / 100) - 56;
  //   // const activeElementPosition = element.offsetTop - awayFromTop;
  //   const elementHeight = element.offsetHeight;
  // }

  onKeydown = (e) => {
    if (e.which === 38) {
      e.stopPropagation();
      e.preventDefault();
      moveUp(this.context);
    } else if (e.which === 40) {
      e.stopPropagation();
      e.preventDefault();
      moveDown(this.context);
    }
  }

  render() {
    const { questions } = this.context;
    return (
      <div
        className={s.questionListWrapper}
        ref={ref => { this.parent = ref; }}
        // onScroll={this.onScroll}
      >
        {questions.map((question, index) => (
          <div
            key={question.identifier}
            ref={ref => this.questionRefs[index] = ref}
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
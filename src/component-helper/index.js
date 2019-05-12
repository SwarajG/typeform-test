import ReactDOM from 'react-dom';

export function moveUp(context, delay = 0) {
  const { activeIndex, updateActiveIndex, questionRefs, parentRef } = context;
  const parent = ReactDOM.findDOMNode(parentRef);
  if (activeIndex > 0) {
    const newUpdatedIndex = activeIndex - 1;
    const element = ReactDOM.findDOMNode(questionRefs[newUpdatedIndex]);
    const awayFromTop = ((window.innerHeight * 40) / 100) - 56;
    setTimeout(() => {
      updateActiveIndex(newUpdatedIndex);
      parent.scrollTo(0, element.offsetTop - awayFromTop);
    }, delay);
  }
}

export function moveDown(context, delay = 0) {
  const { activeIndex, updateActiveIndex, questions, parentRef, questionRefs } = context;
  const parent = ReactDOM.findDOMNode(parentRef);
  if (activeIndex + 1 < questions.length) {
    const newUpdatedIndex = activeIndex + 1;
    const element = ReactDOM.findDOMNode(questionRefs[newUpdatedIndex]);
    const awayFromTop = ((window.innerHeight * 40) / 100) - 56;
    setTimeout(() => {
      updateActiveIndex(newUpdatedIndex);
      parent.scrollTo(0, element.offsetTop - awayFromTop);
    }, delay);
  }
}
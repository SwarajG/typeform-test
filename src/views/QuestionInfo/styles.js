import { css } from 'emotion';

const questionWrapper = css`
  display: flex;
  position: relative;
`;

const questionIndex = css`
  position: absolute;
  right: 100%;
  padding-right: 8px;
  height: 32px;
`;

const questionTitle = css`
  
`;

const titleText = css`
  max-width: 100%;
  font-weight: unset;
  font-size: 24px;
  line-height: 32px;
  margin: 0px;
  font-weight: 300;
`;

const index = css`
  display: flex;
  align-items: center;
  color: rgb(0, 58, 81);
  font-size: 14px;
  line-height: 20px;
  height: 100%;
`;

const icon = css`
  font-size: 12px;
  margin-left: 4px;
`;

export default {
  questionWrapper,
  questionIndex,
  questionTitle,
  titleText,
  index,
  icon
};
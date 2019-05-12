import { css } from 'emotion';

const questionListWrapper = css`
  max-height: calc(100vh - 56px);
  overflow: auto;
  padding: 0 40px;
  height: 100%;
  scroll-behavior: smooth;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: calc(40vh - 56px);
  }
`;

export default {
  questionListWrapper
}
import { css } from 'emotion';

const mainWrapper = isActive => css`
  padding-top: 24px;
  padding-bottom: 24px;
  ${isActive ? `
    opacity: 1;
  `: `
    opacity: 0.3;
  `}
`;

const questionWrapper = css`
  max-width: 840px;
  margin: 0 auto;
`;

const optionsWrapper = css`
  max-width: 840px;
  margin: 0 auto;
`;

export default {
  questionWrapper,
  optionsWrapper,
  mainWrapper
};
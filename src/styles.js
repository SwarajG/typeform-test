import { css } from 'emotion';

const mainWrapper = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('./background.png') no-repeat center center;
  background-size: cover;
`;

const bodyOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const loaderWrapper = css`
  display: flex;
  justify-content: center;
  padding-top: 25%;
`;

export default {
  mainWrapper,
  bodyOverlay,
  loaderWrapper
};
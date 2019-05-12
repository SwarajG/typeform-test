import { css } from 'emotion';

const optionsWrapper = isActive => css`
  display: flex;
  align-items: center;
  width: 100%;
  color: rgb(0, 58, 81);
  background-color: rgba(0, 58, 81, 0.1);
  box-shadow: rgba(0, 58, 81, 0.6) 0px 0px 0px 1px inset;
  cursor: pointer;
  opacity: 1;
  will-change: opacity;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
  animation-duration: 0.25s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 2;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: qNIWx;
  border-style: solid;
  border-width: 1.2px;
  ${isActive ? `
    border-color: #003A51;
  ` : `
    border-color: transparent;
  `}

  &:hover {
    background-color: rgba(0, 58, 81, 0.3);
  }
`;

const icon = css`
  font-size: 16px;
`;

const keyNameWrapper = css`
  display: flex;
  align-self: flex-start;
  box-shadow: transparent 0px 0px 0px 1px;
  margin: 8px;
`;

const keyValue = isSelected => css`
  position: relative;
  width: 24px;
  min-width: 22px;
  height: 24px;
  font-size: 12px;
  line-height: 16px;
  font-family: sans-serif;
  color: rgb(0, 58, 81);
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  border-color: rgba(0, 58, 81, 0.6);
  ${isSelected ? `
    background-color: #003A51;
    color: #FFF;
  ` : `
    background-color: rgba(235, 240, 242, 0.8);
  `}
`;

const key = css`
  width: 22px;
  height: 22px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const choiceLabel = css`
  width: 90%;
`;

const checkIcon = css`
  margin-left: 10px;
  margin-right: 10px;
`;

export default {
  optionsWrapper,
  icon,
  keyNameWrapper,
  keyValue,
  key,
  choiceLabel,
  checkIcon
}
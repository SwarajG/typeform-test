import { css } from 'emotion';

const footer = css`
  position: absolute;
  opacity: inherit;
  right: 0px;
  left: 0px;
  bottom: 0px;
`;

const fotterWrapper = css`
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -1px;
  position: relative;
  height: 56px;
  display: flex;
  line-height: 1;
  align-items: center;
`;

const actionButtonWrapper = css`
  display: flex;
`;

const button = css`
  margin-right: 4px;
`;

export default {
  footer,
  fotterWrapper,
  actionButtonWrapper,
  button
}
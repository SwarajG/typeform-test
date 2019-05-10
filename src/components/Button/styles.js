import { css } from 'emotion';

const buttonWrapper = css`
  position: relative;
  color: #52B4E3;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  min-height: 48px;
  background-color: rgb(82, 180, 227);
  color: rgb(8, 34, 47);
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s, border-color 0.2s ease 0s, opacity 0.2s ease 0s;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 8px 18px;
  border-color: transparent;
  border-radius: 4px;
`;

export default {
  buttonWrapper
}
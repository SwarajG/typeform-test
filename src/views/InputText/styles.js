import { css } from 'emotion';

const inputClassWrapper = css`
  .inputClass:not(:focus) {
    box-shadow: rgba(0, 58, 81, 0.3) 0px 1px;
  }
`;

const input = css`
  display: block;
  width: 100%;
  font-family: inherit;
  color: rgb(0, 58, 81);
  transform: translateZ(0px);
  font-size: 30px;
  line-height: 38px;
  padding: 0px 0px 8px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 0px;
  transition: box-shadow 0.2s ease 0s;
  background: none;
  margin-top: 32px;
  margin-bottom: 16px;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #A8BEC5;
    font-weight: 300;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #A8BEC5;
    font-weight: 300;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #A8BEC5;
    font-weight: 300;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #A8BEC5;
    font-weight: 300;
  }
`;

export default {
  input,
  inputClassWrapper
}
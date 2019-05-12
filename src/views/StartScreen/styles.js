import { css } from 'emotion';

const contentWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 20px;
`;

const title = css`
  font-weight: 400;
`;

const description = css`
  max-width: 100%;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  color: rgb(60, 60, 60);
  margin-top: 24px;
`;

const buttonText = css`

`;

export default {
  contentWrapper,
  description,
  buttonText,
  title
};
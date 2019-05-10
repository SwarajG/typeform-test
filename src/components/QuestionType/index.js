import { questionType } from '../../utils';
import MCQ from '../../views/MCQ';
import InputText from '../../views/InputText';

export default function getFunctionfromType(type) {
  switch (type) {
    case questionType.Mcq:
      return MCQ;
    case questionType.Text:
      return InputText;
    default:
      return null;
  }
}
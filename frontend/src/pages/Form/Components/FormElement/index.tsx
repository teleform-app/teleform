import { FormQuestion } from "types/form.ts";
import {
  FormElementInput,
  FormElementTitle,
  FormElementWrapper,
} from "pages/Form/Components/FormElement/styles.tsx";
import { FC } from "react";

interface FormElementProps {
  question: FormQuestion;
}
export const FormElement: FC<FormElementProps> = ({ question }) => {
  return (
    <FormElementWrapper>
      <FormElementTitle>{question.title}</FormElementTitle>
      <FormElementInput placeholder="Type here" type="phone" />
    </FormElementWrapper>
  );
};

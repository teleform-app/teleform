import { FormQuestion } from "types/form.ts";
import {
  FormElementInput,
  FormElementTitle,
  FormElementWrapper,
} from "pages/Form/Components/FormElement/styles.tsx";
import { FC } from "react";
import { FormSelect } from "pages/Form/Components/FormSelect";

interface FormElementProps {
  question: FormQuestion;
  error?: boolean;
  onChange: (name: string, value: string | string[]) => void;
}
export const FormElement: FC<FormElementProps> = ({
  question,
  error = false,
  onChange,
}) => {
  return (
    <FormElementWrapper>
      <FormElementTitle>{question.title}</FormElementTitle>
      {question.type === "select" && question.options ? (
        <FormSelect
          name={question.title}
          options={question.options.map((option) => ({
            key: option,
            title: option,
          }))}
          multichoice={question.multichoice}
          onChange={onChange}
        />
      ) : (
        <FormElementInput
          name={question.title}
          placeholder="Type here"
          type={question.type}
          onChange={(event) => {
            onChange(question.title, event.currentTarget.value);
          }}
          error={error}
        />
      )}
    </FormElementWrapper>
  );
};

import { FormQuestion } from "types/form.ts";
import {
  FormElementAction,
  FormElementActionsWrapper,
  FormElementActionTitle,
  FormElementInput,
  FormElementTitle,
  FormElementWrapper,
} from "pages/Form/Components/FormElement/styles.tsx";
import { FC } from "react";
import { FormSelect, mapOfType } from "pages/Form/Components/FormSelect";
import { FormQuestionEditSeparator } from "pages/QuestionEdit/styles.tsx";
import { SettingsIcon } from "pages/Form/Components/FormElement/settings.tsx";
import { DeleteIcon } from "pages/Form/Components/FormElement/delete.tsx";

interface FormElementProps {
  question: FormQuestion;
  error?: boolean;
  onChange: (name: string, value: string | string[]) => void;
  onDelete: () => void;
  onEdit: () => void;
  isEdit?: boolean;
}
export const FormElement: FC<FormElementProps> = ({
  question,
  error = false,
  isEdit = false,
  onChange,
  onDelete,
  onEdit,
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
          placeholder={isEdit ? mapOfType[question.type] : "Type here"}
          type={question.type}
          onChange={(event) => {
            onChange(question.title, event.currentTarget.value);
          }}
          error={error}
          disabled={isEdit}
        />
      )}
      {isEdit && (
        <>
          <FormQuestionEditSeparator />
          <FormElementActionsWrapper>
            <FormElementAction onClick={onEdit}>
              <SettingsIcon />
              <FormElementActionTitle>Edit question</FormElementActionTitle>
            </FormElementAction>
            <FormElementAction onClick={onDelete}>
              <DeleteIcon />
              <FormElementActionTitle>Delete question</FormElementActionTitle>
            </FormElementAction>
          </FormElementActionsWrapper>
        </>
      )}
    </FormElementWrapper>
  );
};

import {
  FormButton,
  FormEmoji,
  FormHeader,
  FormTitle,
  FormWrapper,
} from "pages/Form/styles.tsx";
import { useState } from "react";
import { FormQuestionAnswer } from "types/form.ts";
import { FormElement } from "pages/Form/Components/FormElement";
import { isValidEmail, isValidPhoneNumber } from "../../utils/validators.ts";
import { FormSubmitted } from "pages/Form/Components/FormSubmited";
import { useGetForm } from "../../hooks/useApi.ts";
import { useParams } from "react-router-dom";
import { useBackButton } from "../../hooks/useBackButton.ts";

export const FormPage = () => {
  const { id } = useParams();

  const { data } = useGetForm(id as string);

  const [answers, setAnswers] = useState<Record<string, FormQuestionAnswer>>(
    {},
  );
  const [showError, setShowError] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  useBackButton(false);

  const handleChange = (title: string, value: FormQuestionAnswer) => {
    setAnswers((prevState) => {
      return { ...prevState, [title]: value };
    });
    setShowError(false);
  };
  if (data === undefined) {
    return null;
  }
  const { form } = data;

  if (!form) {
    return "kek";
  }

  const fieldErrors = form.questions.filter((question) => {
    const value = answers[question.title];
    console.log(question.title, value);

    if (value) {
      if (question.type === "email") {
        return !isValidEmail(value as string);
      }
      if (question.type === "phone") {
        return !isValidPhoneNumber(value as string);
      }
    }

    if (!question.mandatory) {
      return false;
    }

    return !(
      value !== undefined &&
      (Array.isArray(value) ? value.length !== 0 : true) &&
      value !== ""
    );
  });

  const isHaveErrors = fieldErrors.length > 0;
  const submitForm = () => {
    if (isHaveErrors) {
      setShowError(true);
    } else {
      setIsSubmited(true);
    }
  };

  if (isSubmited) return <FormSubmitted />;

  return (
    <FormWrapper>
      <FormHeader>
        <FormEmoji>📚</FormEmoji>
        <FormTitle>{form.title}</FormTitle>
      </FormHeader>
      {form.questions.map((question) => (
        <FormElement
          key={question.title}
          question={question}
          onChange={handleChange}
          error={showError ? fieldErrors.includes(question) : false}
        />
      ))}
      <FormButton disabled={isHaveErrors} onClick={submitForm}>
        {isHaveErrors ? `${fieldErrors.length} questions remaining` : "Submit"}
      </FormButton>
    </FormWrapper>
  );
};

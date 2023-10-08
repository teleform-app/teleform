import {
  FormButton,
  FormEmoji,
  FormHeader,
  FormTitle,
  FormWrapper,
} from "pages/Form/styles.tsx";
import { useState } from "react";
import { Form, FormQuestionAnswer } from "types/form.ts";
import { FormElement } from "pages/Form/Components/FormElement";
import { isValidEmail, isValidPhoneNumber } from "../../utils/validators.ts";
import { FormSubmitted } from "pages/Form/Components/FormSubmited";

const mockForm: Form = {
  name: "Registration to Readers Event 2023 (for Constructor University Students)",
  emoji: "📚",
  participants: 0,
  questions: [
    {
      type: "text",
      title:
        "Delivery address (ZIP code, City, Street & House/Apartment number)",
      mandatory: true,
    },
    {
      type: "email",
      title: "E-Mail",
    },
    {
      type: "select",
      title: "T-shirt size",
      options: ["S", "M", "L", "XL"],
      mandatory: true,
    },
    {
      type: "select",
      title: "T-shirt multi size",
      options: ["S", "M", "L", "XL"],
      multichoice: true,
    },
    {
      type: "phone",
      title: "Phone number",
    },
  ],
};
export const FormPage = () => {
  const [form] = useState<Form>(mockForm);
  const [answers, setAnswers] = useState<Record<string, FormQuestionAnswer>>(
    {},
  );
  const [showError, setShowError] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const handleChange = (title: string, value: FormQuestionAnswer) => {
    setAnswers((prevState) => {
      return { ...prevState, [title]: value };
    });
    setShowError(false);
  };

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
        <FormTitle>{form.name}</FormTitle>
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

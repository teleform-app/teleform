import {
  FormEmoji,
  FormHeader,
  FormTitle,
  FormWrapper,
} from "pages/Form/styles.tsx";
import { useState } from "react";
import { Form } from "types/form.ts";
import { FormElement } from "pages/Form/Components/FormElement";

const mockForm: Form = {
  name: "Registration to Readers Event 2023 (for Constructor University Students)",
  emoji: "📚",
  participants: 0,
  questions: [
    {
      type: "text",
      title:
        "Delivery address (ZIP code, City, Street & House/Apartment number)",
    },
    {
      type: "email",
      title: "E-Mail",
    },
    {
      type: "poll",
      title: "T-shirt size",
    },
    {
      type: "phone",
      title: "Phone number",
    },
  ],
};
export const FormPage = () => {
  const [form] = useState<Form>(mockForm);

  if (!form) {
    return "kek";
  }

  return (
    <FormWrapper>
      <FormHeader>
        <FormEmoji>📚</FormEmoji>
        <FormTitle>{form.name}</FormTitle>
      </FormHeader>
      {form.questions.map((question) => (
        <FormElement question={question} />
      ))}
    </FormWrapper>
  );
};

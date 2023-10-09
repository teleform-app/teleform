import {
  FormQuestionModalContent,
  FormQuestionModalOverlay,
  FormQuestionModalTitle,
  FormQuestionModalTypeSelect,
  FormQuestionModalTypeSelectText,
  FormQuestionModalWrapper,
} from "pages/Form/Components/FormQuestionModal/styles.tsx";
import { useState } from "react";
import { FormQuestionType } from "types/form.ts";

const mapOfType: Record<FormQuestionType, string> = {
  text: "Regular input",
  name: "Name",
  phone: "Phone number",
  email: "e-mail",
  select: "Select",
};

export const FormQuestionModal = () => {
  const [type, setType] = useState<FormQuestionType>("text");

  return (
    <FormQuestionModalWrapper>
      <FormQuestionModalOverlay />
      <FormQuestionModalContent>
        <FormQuestionModalTitle>Title</FormQuestionModalTitle>
        <FormQuestionModalTypeSelect>
          <FormQuestionModalTypeSelectText>
            {mapOfType[type]}
          </FormQuestionModalTypeSelectText>
        </FormQuestionModalTypeSelect>
        <FormQuestionModalTitle>Title</FormQuestionModalTitle>
      </FormQuestionModalContent>
    </FormQuestionModalWrapper>
  );
};

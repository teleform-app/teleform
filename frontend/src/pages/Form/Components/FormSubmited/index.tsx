import {
  FormSubmittedDescription,
  FormSubmittedIcon,
  FormSubmittedTitle,
  FormSubmittedWrapper,
} from "./styles.tsx";

import SubmittedAnimated from "./submitted.json";
import { useLottie } from "lottie-react";
import { Share } from "../../../../components/Share";
import { Form } from "types/form.ts";
import { FC } from "react";
interface FormSubmittedProps {
  form: Form;
}
export const FormSubmitted: FC<FormSubmittedProps> = ({ form }) => {
  const options = {
    animationData: SubmittedAnimated,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <FormSubmittedWrapper>
      <FormSubmittedIcon>{View}</FormSubmittedIcon>
      <FormSubmittedTitle>Form submitted</FormSubmittedTitle>
      <FormSubmittedDescription>
        You can close this window now, answers are saved
      </FormSubmittedDescription>
      <Share title={form.title} id={form.id} />
    </FormSubmittedWrapper>
  );
};

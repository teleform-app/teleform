import {
  FormSubmittedDescription,
  FormSubmittedIcon,
  FormSubmittedShare,
  FormSubmittedTitle,
  FormSubmittedWrapper,
} from "./styles.tsx";

import SubmittedAnimated from "./submitted.json";
import { useLottie } from "lottie-react";

export const FormSubmitted = () => {
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
      <FormSubmittedShare>Share this form</FormSubmittedShare>
    </FormSubmittedWrapper>
  );
};

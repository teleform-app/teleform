import { FC } from "react";
import {
  TitleText,
  TitleWrapper,
} from "pages/FormList/Components/Title/styles.tsx";

interface TitleProps {
  text: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
  return (
    <TitleWrapper>
      <TitleText>{text}</TitleText>
    </TitleWrapper>
  );
};

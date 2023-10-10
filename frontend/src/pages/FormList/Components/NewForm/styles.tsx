import styled from "styled-components";
import { FormQuestionEditInput } from "pages/QuestionEdit/styles.tsx";
import { FormButton } from "pages/Form/styles.tsx";

export const NewFormOverlay = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background: #000;

  top: 0;
  left: 0;
`;
export const NewFormWrapper = styled.div`
  position: fixed;
  width: 100vw;
  padding: 7px;
  bottom: 0;
`;

export const NewFormContent = styled.div`
  margin: auto;
  border-radius: 10px;
  background: var(--tg-theme-bg-color);

  display: flex;
  flex-direction: column;
`;

export const NewFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewFormTitle = styled.div`
  font-family: var(--font-regular);

  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  color: var(--tg-theme-text-color);

  padding: 16px 7px;
`;

export const NewFormIconWrapper = styled.div`
  margin: 7px;
`;
export const NewFormInput = styled(FormQuestionEditInput)`
  background: var(--tg-theme-secondary-bg-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin: 0 7px;
`;

export const NewFormButton = styled(FormButton)`
  background: var(--tg-theme-secondary-bg-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  box-shadow: none;
  margin: 16px 7px;
`;

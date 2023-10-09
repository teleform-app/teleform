import styled from "styled-components";

export const FormQuestionModalWrapper = styled.div`
  position: absolute;

  height: 100vh;

  z-index: 100;
`;

export const FormQuestionModalOverlay = styled.div`
  position: fixed;

  opacity: 0.5;
  background: #000;

  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const FormQuestionModalContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 300px;
  background: var(--tg-theme-secondary-bg-color);
  border-radius: 10px 10px 0 0;

  padding: 16px 20px;

  display: flex;
  flex-direction: column;
`;

export const FormQuestionModalTitle = styled.div`
  font-family: var(--font-regular);

  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  color: var(--tg-theme-text-color);
`;

export const FormQuestionModalTypeSelect = styled.div`
  background: var(--tg-theme-bg-color);
  border-radius: 10px;
  margin: 12px 0;

  display: flex;
  justify-content: space-between;
`;

export const FormQuestionModalTypeSelectText = styled.div`
  font-family: var(--font-regular);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  color: var(--tg-theme-hint-color);

  background: var(--tg-theme-bg-color);
  border-radius: 10px;
  margin: 12px 0;
`;

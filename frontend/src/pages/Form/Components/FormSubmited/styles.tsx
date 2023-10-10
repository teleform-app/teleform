import styled from "styled-components";

export const FormSubmittedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSubmittedIcon = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 100px;
  margin-bottom: 24px;
`;

export const FormSubmittedTitle = styled.div`
  font-family: var(--font-regular);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;

  color: var(--tg-theme-text-color);
`;

export const FormSubmittedDescription = styled.div`
  font-family: var(--font-regular);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  color: var(--tg-theme-hint-color);

  margin: 20px;
  margin-bottom: 14px;
`;

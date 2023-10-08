import styled from "styled-components";

export const FormElementWrapper = styled.div`
  border-radius: 10px;
  background: var(--tg-theme-bg-color);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 16px;
  }
`;

export const FormElementTitle = styled.div`
  color: var(--tg-theme-text-color);
  font-family: var(--font-regular);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  margin: 12px 16px;
`;

export const FormElementInput = styled.input<{ error?: boolean }>`
  all: unset;

  border-radius: 10px;
  background: ${(props) =>
    props.error
      ? "rgba(255, 59, 48, 0.10);"
      : "var(--tg-theme-secondary-bg-color)"};
  color: ${(props) =>
    props.error ? "rgba(255, 59, 48)" : "var(--tg-theme-text-color)"};
  padding: 12px 15px;

  font-family: var(--font-regular);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  margin: 12px 16px;
  margin-top: 0;
`;

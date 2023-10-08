import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 25px 7px;
`;

export const FormHeader = styled.div`
  margin: 8px;
`;
export const FormTitle = styled.div`
  color: var(--tg-theme-text-color);
  font-family: var(--font-regular);
  font-size: 22px;
  font-weight: 700;
`;

export const FormEmoji = styled.div`
  font-size: 32px;

  margin-bottom: 12px;
`;

export const FormButton = styled.div<{ disabled: boolean }>`
  border-radius: 10px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  box-shadow: 0 0 25px 0 rgba(0, 122, 255, 0.2);

  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  margin: 32px 7px;
  padding: 10px;

  font-family: var(--font-regular);
  font-size: 17px;
  font-style: normal;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
`;

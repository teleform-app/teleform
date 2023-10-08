import styled from "styled-components";

export const FormElementWrapper = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 16px;
  }
`;

export const FormElementTitle = styled.div`
  color: #000;
  font-family: var(--font-regular);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  margin: 12px 16px;
`;

export const FormElementInput = styled.input`
  all: unset;

  border-radius: 10px;
  background: #efeff3;
  padding: 12px 15px;

  font-family: var(--font-regular);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  margin: 12px 16px;
  margin-top: 0;
`;

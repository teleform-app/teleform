import styled from "styled-components";

export const FormSelectWrapper = styled.div`
  border-radius: 10px;
  background: var(--tg-theme-secondary-bg-color);

  margin: 12px 16px;
  margin-top: 0;
`;

export const FormSelectOption = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  user-select: none;

  & + & {
    border-top: 0.5px solid #3c3c435c;
  }
`;

export const FormSelectOptionText = styled.div`
  font-family: var(--font-regular);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  color: var(--tg-theme-text-color);

  margin: 10px 15px;
`;

export const FormSelectionIcon = styled.img`
  width: 13px;
  height: 13px;

  margin: 0 15px;
`;

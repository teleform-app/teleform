import styled from "styled-components";

export const ListWrapper = styled.div`
  border-radius: 10px;
  background: var(--tg-theme-bg-color);
  margin: 16px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const ListNewIcon = styled.img`
  svg {
    color: var(--tg-theme-text-color);
  }
`;

export const ListNewForm = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
`;

export const ListNewFormTitle = styled.div`
  color: var(--accent);
  font-family: var(--font-regular);
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;

export const ListInfo = styled.div`
  width: 100%;
`;

export const ListElement = styled.div`
  display: flex;
  align-items: center;

  & + & {
    ${ListInfo} {
      border-top: 0.5px solid #3c3c435c;
    }
  }
`;

export const ListEmoji = styled.div`
  min-width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-regular);
  font-size: 20px;
  font-weight: 400;
`;

export const ListFormName = styled.div`
  color: var(--tg-theme-text-color);
  font-family: var(--font-regular);
  font-size: 17px;
  line-height: 22px;
  font-weight: 400;
  margin-right: 16px;
  margin-top: 8px;
`;

export const ListFormParticipants = styled.div`
  color: var(--tg-theme-hint-color);
  font-family: var(--font-regular);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  margin-top: 2px;
  margin-bottom: 8px;
`;

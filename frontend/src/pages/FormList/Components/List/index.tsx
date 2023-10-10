import { FC } from "react";
import { FormPreview } from "types/form.ts";

import {
  ListElement,
  ListEmoji,
  ListFormName,
  ListFormParticipants,
  ListInfo,
  ListNewForm,
  ListNewFormTitle,
  ListWrapper,
} from "pages/FormList/Components/List/styles.tsx";
import { PlusIcon } from "pages/FormList/Components/List/plus.tsx";
import { useNavigate } from "react-router-dom";

interface ListProps {
  list: FormPreview[];
}

export const List: FC<ListProps> = ({ list }) => {
  const navigate = useNavigate();

  return (
    <ListWrapper>
      <ListElement>
        <ListEmoji>
          <PlusIcon />
        </ListEmoji>
        <ListNewForm>
          <ListNewFormTitle>New form</ListNewFormTitle>
        </ListNewForm>
      </ListElement>
      {list.map((question) => (
        <ListElement
          onClick={() => {
            console.log(question.id);
            navigate(`/form/${question.id}`);
          }}
        >
          <ListEmoji>{question.emoji}</ListEmoji>
          <ListInfo>
            <ListFormName>{question.title}</ListFormName>
            <ListFormParticipants>
              {question.participants === 0
                ? "No responses"
                : `${question.participants} responses`}
            </ListFormParticipants>
          </ListInfo>
        </ListElement>
      ))}
    </ListWrapper>
  );
};

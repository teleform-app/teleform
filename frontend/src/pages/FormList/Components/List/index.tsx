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

interface ListProps {
  list: FormPreview[];
}

export const List: FC<ListProps> = ({ list }) => {
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
      {list.map((poll) => (
        <ListElement>
          <ListEmoji>{poll.emoji}</ListEmoji>
          <ListInfo>
            <ListFormName>{poll.name}</ListFormName>
            <ListFormParticipants>
              {poll.participants === 0
                ? "No responses"
                : `${poll.participants} responses`}
            </ListFormParticipants>
          </ListInfo>
        </ListElement>
      ))}
    </ListWrapper>
  );
};

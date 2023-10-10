import {
  NewFormButton,
  NewFormContent,
  NewFormInput,
  NewFormOverlay,
  NewFormTitle,
  NewFormWrapper,
} from "pages/FormList/Components/NewForm/styles.tsx";
import { FC, useState } from "react";

interface NewFormProps {
  onClose?: () => void;
  onCreate?: (title: string) => void;
}
export const NewForm: FC<NewFormProps> = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <NewFormOverlay onClick={onClose} />
      <NewFormWrapper>
        <NewFormContent>
          <NewFormTitle>Form name</NewFormTitle>
          <NewFormInput
            placeholder="Type here"
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
          <NewFormButton
            disabled={false}
            onClick={() => {
              onCreate?.(title);
            }}
          >
            Create
          </NewFormButton>
        </NewFormContent>
      </NewFormWrapper>
    </>
  );
};

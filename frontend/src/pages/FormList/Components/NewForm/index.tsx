import {
  NewFormButton,
  NewFormContent,
  NewFormHeader,
  NewFormInput,
  NewFormOverlay,
  NewFormTitle,
  NewFormWrapper,
} from "pages/FormList/Components/NewForm/styles.tsx";
import { FC, useState } from "react";
import { NewFormCloseIcon } from "pages/FormList/Components/NewForm/close.tsx";

interface NewFormProps {
  onClose?: () => void;
  onCreate?: (title: string) => void;
}
export const NewForm: FC<NewFormProps> = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <NewFormOverlay />
      <NewFormWrapper>
        <NewFormContent>
          <NewFormHeader>
            <NewFormTitle>Form name</NewFormTitle>
            <NewFormCloseIcon onClick={onClose} />
          </NewFormHeader>
          <NewFormInput
            placeholder="Type here"
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
          <NewFormButton
            disabled={title.length < 1}
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

import {
  FormQuestionEditContent,
  FormQuestionEditInput,
  FormQuestionEditSaveButton,
  FormQuestionEditSeparator,
  FormQuestionEditSettingTitle,
  FormQuestionEditSettingWrapper,
  FormQuestionEditTitle,
  FormQuestionEditTypeSelect,
  FormQuestionEditTypeSelectIcon,
  FormQuestionEditTypeSelectText,
  FormQuestionEditTypeSelectWrapper,
  FormQuestionEditWrapper,
} from "./styles.tsx";
import { useState } from "react";
import { FormQuestionType } from "types/form.ts";
import { FormSelectOptionType } from "pages/Form/Components/FormSelect";
import { ChevronIcon } from "pages/QuestionEdit/chevron.tsx";
import { Switch } from "../../components/Switch";
import { FormPicker } from "pages/Form/Components/FormSelect/picker.tsx";

const mapOfType: Record<FormQuestionType, string> = {
  text: "Regular input",
  name: "Name",
  phone: "Phone number",
  email: "e-mail",
  select: "Select",
};

const typeOptions: FormSelectOptionType[] = Object.entries(mapOfType).map(
  ([key, title]) => ({
    key,
    title,
  }),
);

export const QuestionEdit = () => {
  const [type, setType] = useState<FormQuestionType>("text");
  const [title, setTitle] = useState("");
  const [isMandatoryQuestion, setIsMandatoryQuestion] = useState(false);
  const [isMultichoice, setIsMultichoice] = useState(false);
  const [isOpenSelectType, setIsOpenSelectType] = useState(false);

  return (
    <FormQuestionEditWrapper>
      <FormQuestionEditContent>
        <FormQuestionEditTitle>Type</FormQuestionEditTitle>
        <FormQuestionEditTypeSelect
          onClick={() => {
            setIsOpenSelectType((prevState) => !prevState);
          }}
        >
          <FormQuestionEditTypeSelectText>
            {mapOfType[type]}
          </FormQuestionEditTypeSelectText>
          <FormQuestionEditTypeSelectIcon reverted={isOpenSelectType}>
            <ChevronIcon />
          </FormQuestionEditTypeSelectIcon>
        </FormQuestionEditTypeSelect>
        {isOpenSelectType && (
          <FormQuestionEditTypeSelectWrapper>
            <FormPicker
              background="var(--tg-theme-bg-color)"
              options={typeOptions}
              onChange={(newValue) => {
                const newType = newValue as FormQuestionType;
                if (newType !== type) {
                  setIsOpenSelectType(false);
                }
                setType(newType);
              }}
            />
          </FormQuestionEditTypeSelectWrapper>
        )}
        <FormQuestionEditTitle>Title</FormQuestionEditTitle>
        <FormQuestionEditInput
          placeholder="Text field"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <FormQuestionEditSeparator />
        <FormQuestionEditSettingWrapper>
          <FormQuestionEditSettingTitle>
            Mandatory question
          </FormQuestionEditSettingTitle>
          <Switch
            checked={isMandatoryQuestion}
            onChange={setIsMandatoryQuestion}
          />
        </FormQuestionEditSettingWrapper>
        <FormQuestionEditSettingWrapper>
          <FormQuestionEditSettingTitle>
            Multiple answers
          </FormQuestionEditSettingTitle>
          <Switch checked={isMultichoice} onChange={setIsMultichoice} />
        </FormQuestionEditSettingWrapper>
        <FormQuestionEditSeparator />
        <FormQuestionEditSaveButton>Save</FormQuestionEditSaveButton>
      </FormQuestionEditContent>
    </FormQuestionEditWrapper>
  );
};

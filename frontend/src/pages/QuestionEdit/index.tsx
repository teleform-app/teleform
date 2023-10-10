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
  FormQuestionOptionsDeleteIconWrapper,
  FormQuestionOptionsInput,
  FormQuestionOptionsWrapper,
} from "./styles.tsx";
import { useEffect, useState } from "react";
import { FormQuestionType } from "types/form.ts";
import {
  FormSelectOptionType,
  mapOfType,
} from "pages/Form/Components/FormSelect";
import { ChevronIcon } from "pages/QuestionEdit/chevron.tsx";
import { Switch } from "../../components/Switch";
import { FormPicker } from "pages/Form/Components/FormSelect/picker.tsx";
import { useParams } from "react-router-dom";
import { useEditFormState } from "../../atoms/editForm.ts";
import { useBackButton } from "../../hooks/useBackButton.ts";
import { DeleteIcon } from "pages/Form/Components/FormElement/delete.tsx";
import { Add } from "../../components/Add";

const typeOptions: FormSelectOptionType[] = Object.entries(mapOfType).map(
  ([key, title]) => ({
    key,
    title,
  }),
);

export const QuestionEdit = () => {
  const [type, setType] = useState<FormQuestionType>("regular_input");
  const [title, setTitle] = useState("");
  const [isMandatoryQuestion, setIsMandatoryQuestion] = useState(false);
  const [isMultichoice, setIsMultichoice] = useState(false);
  const [isOpenSelectType, setIsOpenSelectType] = useState(false);
  const [options, setOptions] = useState<string[]>(["", ""]);

  const { id } = useParams();

  const [editForm, setEditFormState] = useEditFormState();

  useBackButton(false);

  useEffect(() => {
    const { form } = editForm;

    if (form) {
      const question = form.questions.find((question) => question.id === id);

      if (question) {
        setType(question.type);
        setTitle(question.title);
        setIsMandatoryQuestion(question.mandatory || false);
        setIsMultichoice(question.multichoice || false);
      }
    }
  }, [editForm, id]);

  const onSave = () => {
    setEditFormState((prevState) => {
      if (!prevState.form) {
        return prevState;
      }

      return {
        form: {
          ...prevState.form,
          questions: prevState.form.questions.map((question) =>
            question.id === id
              ? {
                  ...question,
                  title,
                  type,
                  mandatory: isMandatoryQuestion,
                  multichoice: isMultichoice,
                  options,
                }
              : question,
          ),
        },
      };
    });
    window.history.back();
  };

  const addOption = () => {
    setOptions((prevState) => [...prevState, ""]);
  };

  const deleteOption = (index: number) => {
    setOptions((prevState) => prevState.filter((_, i) => i !== index));
  };

  const onChangeOption = (index: number, value: string) => {
    setOptions((prevState) =>
      prevState.map((option, i) => (i === index ? value : option)),
    );
  };

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
        {type === "select" && (
          <>
            <FormQuestionEditTitle>Options</FormQuestionEditTitle>
            {options.map((option, i) => (
              <FormQuestionOptionsWrapper key={i}>
                <FormQuestionOptionsInput
                  value={option}
                  placeholder="Type here"
                  onChange={(e) => {
                    onChangeOption(i, e.currentTarget.value);
                  }}
                />
                {options.length > 1 && (
                  <FormQuestionOptionsDeleteIconWrapper
                    onClick={() => {
                      deleteOption(i);
                    }}
                  >
                    <DeleteIcon />
                  </FormQuestionOptionsDeleteIconWrapper>
                )}
              </FormQuestionOptionsWrapper>
            ))}
            <Add title="Add option" onClick={addOption} />
          </>
        )}
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
        {type === "select" && (
          <FormQuestionEditSettingWrapper>
            <FormQuestionEditSettingTitle>
              Multiple answers
            </FormQuestionEditSettingTitle>
            <Switch checked={isMultichoice} onChange={setIsMultichoice} />
          </FormQuestionEditSettingWrapper>
        )}
        <FormQuestionEditSeparator />
        <FormQuestionEditSaveButton onClick={onSave}>
          Save
        </FormQuestionEditSaveButton>
      </FormQuestionEditContent>
    </FormQuestionEditWrapper>
  );
};

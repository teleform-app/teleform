import { FC, useEffect, useState } from "react";
import {
  FormSelectionIcon,
  FormSelectOption,
  FormSelectOptionText,
  FormSelectWrapper,
} from "pages/Form/Components/FormSelect/styles.tsx";

import CheckIcon from "./check.svg";

interface FormSelectProps {
  name: string;
  options: string[];
  multichoice?: boolean;
  onChange?: (name: string, value: string | string[]) => void;
}

export const FormSelect: FC<FormSelectProps> = ({
  name,
  options,
  multichoice = false,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (option: string) => {
    setSelectedOptions((prevState) => {
      if (multichoice) {
        if (prevState.includes(option)) {
          return prevState.filter((value) => value !== option);
        } else {
          return [...prevState, option];
        }
      } else {
        if (prevState.includes(option)) {
          return [];
        } else {
          return [option];
        }
      }
    });
  };

  useEffect(() => {
    onChange?.(name, selectedOptions);
    // eslint-disable-next-line
  }, [name, selectedOptions]);

  return (
    <FormSelectWrapper>
      {options.map((option) => (
        <FormSelectOption
          onClick={() => {
            handleClick(option);
          }}
          key={option}
        >
          <FormSelectOptionText>{option}</FormSelectOptionText>
          <FormSelectionIcon
            src={CheckIcon}
            style={{
              visibility: selectedOptions.includes(option)
                ? undefined
                : "hidden",
            }}
          />
        </FormSelectOption>
      ))}
    </FormSelectWrapper>
  );
};
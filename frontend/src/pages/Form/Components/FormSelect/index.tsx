import { FC, useEffect, useState } from 'react'
import {
    FormSelectOption,
    FormSelectOptionText,
    FormSelectWrapper,
    FormSelectionIcon,
} from 'pages/Form/Components/FormSelect/styles.tsx'

import CheckIcon from './check.svg'
import { FormQuestionType } from 'types/form.ts'

export interface FormSelectOptionType {
    key: string
    title: string
}

export const mapOfType: Record<FormQuestionType, string> = {
    regular_input: 'Regular input',
    name: 'Name',
    phone: 'Phone number',
    email: 'e-mail',
    select: 'Select',
}
export interface FormSelectProps {
    id: string
    options: FormSelectOptionType[]
    multichoice?: boolean
    onChange?: (name: string, value: string | string[]) => void
    background?: string
    disabled?: boolean
}

export const FormSelect: FC<FormSelectProps> = ({
    id,
    options,
    multichoice = false,
    onChange,
    background,
    disabled,
}) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const handleClick = (option: string) => {
        setSelectedOptions((prevState) => {
            if (multichoice) {
                if (prevState.includes(option)) {
                    return prevState.filter((value) => value !== option)
                } else {
                    return [...prevState, option]
                }
            } else {
                if (prevState.includes(option)) {
                    return []
                } else {
                    return [option]
                }
            }
        })
    }

    useEffect(() => {
        onChange?.(id, selectedOptions)
        // eslint-disable-next-line
  }, [id, selectedOptions]);

    return (
        <FormSelectWrapper background={background}>
            {options.map((option) => (
                <FormSelectOption
                    onClick={() => {
                        if (!disabled) {
                            handleClick(option.key)
                        }
                    }}
                    key={option.key}
                >
                    <FormSelectOptionText>{option.title}</FormSelectOptionText>
                    <FormSelectionIcon
                        src={CheckIcon}
                        style={{
                            visibility: selectedOptions.includes(option.key)
                                ? undefined
                                : 'hidden',
                        }}
                    />
                </FormSelectOption>
            ))}
        </FormSelectWrapper>
    )
}

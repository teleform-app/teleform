import {
    FormSelectOption,
    FormSelectOptionText,
    FormSelectWrapper,
} from 'pages/Form/Components/FormSelect/styles.tsx'
import { FC } from 'react'
import { FormSelectOptionType } from 'pages/Form/Components/FormSelect/index.tsx'

interface FormPickerProps {
    options: FormSelectOptionType[]
    onChange?: (value: string) => void
    background?: string
}
export const FormPicker: FC<FormPickerProps> = ({
    options,
    onChange,
    background,
}) => {
    return (
        <FormSelectWrapper background={background}>
            {options.map((option) => (
                <FormSelectOption
                    onClick={() => {
                        onChange?.(option.key)
                    }}
                    key={option.key}
                >
                    <FormSelectOptionText>{option.title}</FormSelectOptionText>
                </FormSelectOption>
            ))}
        </FormSelectWrapper>
    )
}

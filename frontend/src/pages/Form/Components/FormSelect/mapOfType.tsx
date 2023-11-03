import { FormQuestionType } from 'types/form.ts'

export const mapOfType: Record<FormQuestionType, string> = {
    regular_input: 'Regular input',
    name: 'Name',
    phone: 'Phone number',
    email: 'e-mail',
    select: 'Select',
}

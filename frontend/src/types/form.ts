export interface Form {
    id: string
    author: number
    title: string
    emoji: string
    response: number
    questions: FormQuestion[]
}

export type FormPreview = Pick<Form, 'id' | 'title' | 'emoji' | 'response'>

export type FormQuestionType =
    | 'regular_input'
    | 'name'
    | 'email'
    | 'phone'
    | 'select'
export interface FormQuestion {
    id: string
    type: FormQuestionType
    title: string
    mandatory?: boolean
    multichoice?: boolean
    options?: string[]
}

export type FormQuestionAnswer = string | string[]

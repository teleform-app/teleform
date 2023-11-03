import {
    NewFormButton,
    NewFormContent,
    NewFormHeader,
    NewFormInput,
    NewFormTitle,
    NewFormWrapper,
} from 'pages/FormList/Components/NewForm/styles.tsx'
import { FC, useState } from 'react'

interface NewFormProps {
    isLoading: boolean
    onCreate?: (title: string) => void
}
export const NewForm: FC<NewFormProps> = ({ onCreate, isLoading }) => {
    const [title, setTitle] = useState('')

    return (
        <>
            <NewFormWrapper>
                <NewFormContent>
                    <NewFormHeader>
                        <NewFormTitle>Form name</NewFormTitle>
                    </NewFormHeader>
                    <NewFormInput
                        placeholder="Type here"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.currentTarget.value)
                        }}
                        disabled={isLoading}
                    />
                    <NewFormButton
                        disabled={isLoading && title.length < 1}
                        onClick={() => {
                            onCreate?.(title)
                        }}
                    >
                        {isLoading ? 'Loading' : 'Create'}
                    </NewFormButton>
                </NewFormContent>
            </NewFormWrapper>
        </>
    )
}

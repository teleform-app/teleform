import styled from 'styled-components'
import { FormQuestionEditInput } from 'pages/QuestionEdit/styles.tsx'
import { FormButton } from 'pages/Form/styles.tsx'

export const NewFormWrapper = styled.div`
    padding: 8px;
`

export const NewFormContent = styled.div`
    margin: auto;

    display: flex;
    flex-direction: column;
`

export const NewFormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewFormTitle = styled.div`
    font-family: var(--font-regular);

    font-size: 15px;
    font-style: normal;
    font-weight: 500;

    color: var(--tg-theme-text-color);

    padding: 16px 7px;
`

export const NewFormIconWrapper = styled.div`
    margin: 7px;
`
export const NewFormInput = styled(FormQuestionEditInput)`
    background: var(--tg-theme-bg-color);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    margin: 0 7px;
`

export const NewFormButton = styled(FormButton)`
    background: var(--accent);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    box-shadow: none;
    margin: 16px 7px;
`

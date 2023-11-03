import styled from 'styled-components'

export const FormSavedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormSavedIcon = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-bottom: 24px;
`

export const FormSavedTitle = styled.div`
    font-family: var(--font-regular);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;

    color: var(--tg-theme-text-color);
`

export const FormSavedDescription = styled.div`
    font-family: var(--font-regular);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    color: var(--tg-theme-hint-color);

    margin: 20px;
    margin-bottom: 14px;
`

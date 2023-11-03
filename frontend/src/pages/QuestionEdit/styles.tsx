import styled from 'styled-components'

export const FormQuestionEditWrapper = styled.div``

export const FormQuestionEditContent = styled.div`
    width: 100vw;
    min-height: 300px;
    background: var(--tg-theme-secondary-bg-color);
    border-radius: 10px 10px 0 0;

    padding: 0 16px;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
`

export const FormQuestionEditTitle = styled.div`
    font-family: var(--font-regular);

    font-size: 15px;
    font-style: normal;
    font-weight: 500;

    color: var(--tg-theme-text-color);
`

export const FormQuestionEditTypeSelect = styled.div`
    background: var(--tg-theme-bg-color);
    border-radius: 10px;
    margin: 12px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FormQuestionEditTypeSelectText = styled.div`
    font-family: var(--font-regular);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;

    color: var(--tg-theme-hint-color);

    background: var(--tg-theme-bg-color);
    border-radius: 10px;
    margin: 9px 15px;
`

export const FormQuestionEditTypeSelectIcon = styled.div<{
    reverted?: boolean
}>`
    width: 24px;
    height: 24px;

    margin: 0 12px;

    color: var(--tg-theme-hint-color);

    transform: ${(props) => (props.reverted ? 'rotate(180deg)' : '')};

    transition: transform 0.3s ease-in-out;
`

export const FormQuestionEditTypeSelectWrapper = styled.div`
    border-radius: 10px;
    background: var(--tg-theme-secondary-bg-color);
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 12px;
`

export const FormQuestionEditInput = styled.input`
    all: unset;

    border-radius: 10px;
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
    padding: 12px 15px;

    font-family: var(--font-regular);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    margin: 12px 0;
`

export const FormQuestionEditSeparator = styled.div`
    height: 0.5px;
    background: var(--separator-color);
    margin: 12px 0;
`

export const FormQuestionEditSettingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
        margin-top: 12px;
    }
`
export const FormQuestionEditSettingTitle = styled.div`
    font-family: var(--font-regular);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;

    color: var(--tg-theme-text-color);
`
export const FormQuestionEditSaveButton = styled.div`
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    box-shadow: 0 0 25px 0 rgba(0, 122, 255, 0.2);

    margin: 12px 0;
    margin-bottom: 25px;
    padding: 10px;

    font-family: var(--font-regular);
    font-size: 17px;
    font-style: normal;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormQuestionOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const FormQuestionOptionsDeleteIconWrapper = styled.div``
export const FormQuestionOptionsInput = styled(FormQuestionEditInput)`
    margin-right: 8px;
    flex: 10;
`

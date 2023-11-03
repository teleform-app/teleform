import styled from 'styled-components'

export const FormSelectWrapper = styled.div<{ background?: string }>`
    border-radius: 10px;
    background: ${(props) =>
        props.background
            ? props.background
            : 'var(--tg-theme-secondary-bg-color)'};
`

export const FormSelectOption = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    user-select: none;

    & + & {
        border-top: 0.5px solid var(--separator-color);
    }
`

export const FormSelectOptionText = styled.div`
    font-family: var(--font-regular);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    color: var(--tg-theme-text-color);

    margin: 10px 15px;
`

export const FormSelectionIcon = styled.img`
    width: 13px;
    height: 13px;

    margin: 0 15px;
`

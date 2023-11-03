import styled from 'styled-components'

export const FormWrapper = styled.div`
    margin: 25px 7px;

    text-decoration: none;
`

export const FormHeader = styled.div`
    margin: 8px;
`
export const FormTitle = styled.div`
    color: var(--tg-theme-text-color);
    font-family: var(--font-regular);
    font-size: 22px;
    font-weight: 700;
`

export const FormEmoji = styled.div`
    font-size: 32px;

    margin-bottom: 12px;
`

export const FormButton = styled.div<{ disabled: boolean }>`
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    box-shadow: 0 0 25px 0 rgba(0, 122, 255, 0.2);

    opacity: ${(props) => (props.disabled ? '0.5' : '1')};

    margin: 32px 0;
    padding: 10px;

    font-family: var(--font-regular);
    font-size: 17px;
    font-style: normal;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FormDelete = styled.div`
    font-size: 15px;
    font-style: normal;
    font-weight: 500;

    font-family: var(--font-regular);
    color: #c63636;
`

export const FormInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormInfoParticipants = styled.div`
    font-family: var(--font-regular);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    color: var(--tg-theme-text-color);
`

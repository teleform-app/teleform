import styled from 'styled-components'

export const OnboardingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OnboardingIcon = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-bottom: 24px;
`

export const OnboardingTitle = styled.div`
    font-family: var(--font-regular);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;

    color: var(--tg-theme-text-color);
`

export const OnboardingDescription = styled.div`
    font-family: var(--font-regular);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    color: var(--tg-theme-hint-color);

    margin: 20px;
    margin-bottom: 14px;
`

export const OnboardingCreateForm = styled.div`
    background: var(--accent);
    border-radius: 10px;

    font-family: var(--font-regular);
    font-size: 17px;
    font-style: normal;
    font-weight: 500;

    color: var(--tg-theme-text-color);
    padding: 10px;

    width: calc(100% - 40px);
    text-align: center;

    margin: auto;
`

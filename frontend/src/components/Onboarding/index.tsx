import { useLottie } from 'lottie-react'
import { FC } from 'react'
import {
    OnboardingCreateForm,
    OnboardingDescription,
    OnboardingIcon,
    OnboardingTitle,
    OnboardingWrapper,
} from './styles.tsx'

import reinbowAnimated from './rainbow.json'
interface OnboardingProps {
    onCreate: () => void
}
export const Onboarding: FC<OnboardingProps> = ({ onCreate }) => {
    const options = {
        animationData: reinbowAnimated,
        loop: true,
    }

    const { View } = useLottie(options)

    return (
        <OnboardingWrapper>
            <OnboardingIcon>{View}</OnboardingIcon>
            <OnboardingTitle>Forms, right in Telegram</OnboardingTitle>
            <OnboardingDescription>
                Create polls, quizzes and collect feedback
            </OnboardingDescription>
            <OnboardingCreateForm onClick={onCreate}>
                Create form
            </OnboardingCreateForm>
        </OnboardingWrapper>
    )
}

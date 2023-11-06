import { useLottie } from 'lottie-react'
import { FC } from 'react'
import { Share } from '../../../../components/Share'
import SubmittedAnimated from './submitted.json'
import {
    FormSubmittedDescription,
    FormSubmittedIcon,
    FormSubmittedTitle,
    FormSubmittedWrapper,
} from './styles.tsx'
interface FormSubmittedProps {
    formId: string
}
export const FormSubmitted: FC<FormSubmittedProps> = ({ formId }) => {
    const options = {
        animationData: SubmittedAnimated,
        loop: true,
    }

    const { View } = useLottie(options)

    return (
        <FormSubmittedWrapper>
            <FormSubmittedIcon>{View}</FormSubmittedIcon>
            <FormSubmittedTitle>Form submitted</FormSubmittedTitle>
            <FormSubmittedDescription>
                You can close this window now, answers are saved
            </FormSubmittedDescription>
            <Share id={formId} />
        </FormSubmittedWrapper>
    )
}

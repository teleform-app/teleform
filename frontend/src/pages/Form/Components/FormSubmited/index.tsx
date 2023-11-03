import { useLottie } from 'lottie-react'
import { Form } from 'types/form.ts'
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
    form: Form
}
export const FormSubmitted: FC<FormSubmittedProps> = ({ form }) => {
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
            <Share title={form.title} id={form.id} />
        </FormSubmittedWrapper>
    )
}

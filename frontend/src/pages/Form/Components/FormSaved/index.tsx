import { useLottie } from 'lottie-react'
import { FC } from 'react'
import { Share } from 'components/Share'
import okAnimated from './ok.json'
import {
    FormSavedDescription,
    FormSavedIcon,
    FormSavedTitle,
    FormSavedWrapper,
} from './styles.tsx'
interface FormSavedProps {
    formId: string
}
export const FormSaved: FC<FormSavedProps> = ({ formId }) => {
    const options = {
        animationData: okAnimated,
        loop: true,
    }

    const { View } = useLottie(options)

    return (
        <FormSavedWrapper>
            <FormSavedIcon>{View}</FormSavedIcon>
            <FormSavedTitle>Form saved</FormSavedTitle>
            <FormSavedDescription>
                Now share it with your respondents!
            </FormSavedDescription>
            <Share id={formId} />
        </FormSavedWrapper>
    )
}

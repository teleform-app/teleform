import { useLottie } from 'lottie-react'
import { Form } from 'types/form.ts'
import { FC } from 'react'
import { Share } from '../../../../components/Share'
import okAnimated from './ok.json'
import {
    FormSavedDescription,
    FormSavedIcon,
    FormSavedTitle,
    FormSavedWrapper,
} from './styles.tsx'
interface FormSavedProps {
    form: Form
}
export const FormSaved: FC<FormSavedProps> = ({ form }) => {
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
            <Share title={form.title} id={form.id} />
        </FormSavedWrapper>
    )
}

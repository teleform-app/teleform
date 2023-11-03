import { useLottie } from 'lottie-react'
import okAnimated from '../FormSaved/ok.json'
import {
    FormExportedDescription,
    FormExportedIcon,
    FormExportedTitle,
    FormExportedWrapper,
} from './styles.tsx'

export const FormExported = () => {
    const options = {
        animationData: okAnimated,
        loop: true,
    }

    const { View } = useLottie(options)

    return (
        <FormExportedWrapper>
            <FormExportedIcon>{View}</FormExportedIcon>
            <FormExportedTitle>Exported to CSV</FormExportedTitle>
            <FormExportedDescription>
                We just send you a message with file
            </FormExportedDescription>
        </FormExportedWrapper>
    )
}

import { FormExported } from 'pages/Form/Components/FormExported'
import { FormSaved } from 'pages/Form/Components/FormSaved'
import { FormSubmitted } from 'pages/Form/Components/FormSubmited'
import { useParams } from 'react-router-dom'
import { StatusType, Status } from 'types/status'
import { useBackButton } from '../../hooks/useBackButton'

export const StatusPage = () => {
    const { status, formId } = useParams<{
        status: StatusType
        formId?: string
    }>()

    useBackButton(status === Status.submitted)

    switch (status) {
        case Status.submitted:
            return <FormSubmitted formId={formId!} />
        case Status.saved:
            return <FormSaved formId={formId!} />
        case Status.exported:
            return <FormExported />
    }
    return null
}

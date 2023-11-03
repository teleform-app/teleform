import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp.ts'
import { useMyForms } from '../../hooks/useApi.ts'
import { useBackButton } from '../../hooks/useBackButton.ts'
import { useEditFormState } from '../../atoms/editForm.ts'
import { Onboarding } from '../../components/Onboarding'
import { List } from './Components/List'
import { Title } from './Components/Title'

export const PollList = () => {
    const { data } = useMyForms()

    const [, setEditFormState] = useEditFormState()

    const telegram = useTelegramWebApp()
    const navigate = useNavigate()

    useBackButton(true)

    useEffect(() => {
        const { start_param } = telegram.initDataUnsafe
        if (start_param) {
            window.location.href = `/form/${start_param}`
        }
    }, [telegram])

    useEffect(() => {
        setEditFormState({
            form: undefined,
        })
    }, [setEditFormState])

    const onCreateClick = () => {
        telegram?.expand()
        navigate('/create')
    }

    if (data === undefined) {
        return null
    }

    return (
        <div>
            {data.forms.length > 0 ? (
                <>
                    <Title text={'My forms'} />
                    <List list={data.forms} onCreate={onCreateClick} />
                </>
            ) : (
                <Onboarding onCreate={onCreateClick} />
            )}
        </div>
    )
}

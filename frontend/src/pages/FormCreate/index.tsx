import axios from 'axios'
import { Wrapper } from './styles'
import { NewForm } from 'pages/FormList/Components/NewForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useBackButton } from '../../hooks/useBackButton'

export const CreateForm = () => {
    const [isCreating, setIsCreating] = useState(false)
    const navigate = useNavigate()

    useBackButton()

    const onCreate = (title: string) => {
        setIsCreating(true)
        axios
            .post('/api/createForm', {
                title,
            })
            .then(({ data }) => {
                setIsCreating(false)
                navigate(`/form/${data.form.id}`, {
                    replace: true,
                })
            })
            .catch(() => {
                setIsCreating(false)
            })
    }

    return (
        <Wrapper>
            <NewForm onCreate={onCreate} isLoading={isCreating} />
        </Wrapper>
    )
}

import {
    FormActions,
    FormButton,
    FormDelete,
    FormEmoji,
    FormHeader,
    FormInfo,
    FormInfoParticipants,
    FormTitle,
    FormWrapper,
} from 'pages/Form/styles.tsx'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormQuestionAnswer } from 'types/form.ts'
import { FormElement } from 'pages/Form/Components/FormElement'
import { isValidEmail, isValidPhoneNumber } from '../../utils/validators.ts'
import { FormSubmitted } from 'pages/Form/Components/FormSubmited'
import { useGetForm } from '../../hooks/useApi.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useBackButton } from '../../hooks/useBackButton.ts'
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp.ts'
import { useEditFormState } from '../../atoms/editForm.ts'
import { Add } from '../../components/Add'
import axios from 'axios'
import { Share } from '../../components/Share'
import { FormSaved } from 'pages/Form/Components/FormSaved'
import { FormQuestionEditSeparator } from 'pages/QuestionEdit/styles.tsx'
import { Export } from 'pages/Form/Components/Export'
import { FormExported } from 'pages/Form/Components/FormExported'

export const FormPage = () => {
    const { id } = useParams()
    const { data } = useGetForm(id as string)

    const [answers, setAnswers] = useState<Record<string, FormQuestionAnswer>>(
        {}
    )
    const [showError, setShowError] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [isExported, setIsExported] = useState<boolean>(false)

    const [editForm, setEditFormState] = useEditFormState()

    const navigate = useNavigate()

    const telegram = useTelegramWebApp()
    useBackButton(false)

    const isMyForm = data?.form?.author === telegram.initDataUnsafe.user.id

    useEffect(() => {
        if (data && isMyForm) {
            try {
                telegram?.requestWriteAccess()
            } catch (e) {
                console.error(e)
            }
            setEditFormState((prevState) => {
                if (prevState?.form?.id !== data.form.id) {
                    return { form: data.form }
                }
                return prevState
            })
        }
    }, [data, isMyForm, setEditFormState])

    const handleChange = (id: string, value: FormQuestionAnswer) => {
        setAnswers((prevState) => {
            return { ...prevState, [id]: value }
        })
        setShowError(false)
    }
    if (data === undefined) {
        return null
    }
    const form = editForm?.form || data?.form

    if (!form) {
        return 'kek'
    }

    const fieldErrors = form.questions.filter((question) => {
        const value = answers[question.id]

        if (value) {
            if (question.type === 'email') {
                return !isValidEmail(value as string)
            }
            if (question.type === 'phone') {
                return !isValidPhoneNumber(value as string)
            }
        }

        if (!question.mandatory) {
            return false
        }

        return !(
            value !== undefined &&
            (Array.isArray(value) ? value.length !== 0 : true) &&
            value !== ''
        )
    })

    const isHaveErrors = fieldErrors.length > 0
    const submitForm = () => {
        axios
            .post('/api/respondToForm', {
                form_id: form.id,
                answers: Object.entries(answers).map(([key, value]) => ({
                    question_id: key,
                    content: Array.isArray(value) ? value : [value],
                })),
            })
            .then(() => {
                setIsSubmitted(true)
            })
    }

    const deleteQuestion = (id: string) => {
        setEditFormState((prevState) => {
            if (!prevState.form) {
                return prevState
            }

            return {
                form: {
                    ...prevState.form,
                    questions: prevState.form.questions.filter(
                        (question) => question.id !== id
                    ),
                },
            }
        })
    }

    const onEdit = (questionId: string) => {
        navigate(`/questionEdit/${questionId}`)
    }

    const saveForm = () => {
        axios
            .post(`/api/editForm`, {
                ...form,
                questions: form.questions.map((question) => {
                    return {
                        ...question,
                        content: {
                            text: question.title,
                            options: question.options,
                        },
                    }
                }),
            })
            .then(() => {
                setIsSaved(true)
            })
    }

    const onAddQuestion = () => {
        setEditFormState((prevState) => {
            if (!prevState.form) {
                return prevState
            }

            return {
                form: {
                    ...prevState.form,
                    questions: [
                        ...prevState.form.questions,
                        {
                            id: uuidv4(),
                            type: 'regular_input',
                            title: 'New question',
                        },
                    ],
                },
            }
        })
    }

    const deleteForm = () => {
        axios
            .post(`/api/deleteForm`, {
                form_id: form.id,
            })
            .then(() => {
                navigate('/')
            })
    }

    const exportForm = () => {
        axios
            .post(`/api/exportFormResponses`, {
                form_id: form.id,
                format: 'csv',
            })
            .then(() => {
                setIsExported(true)
            })
    }

    if (isSubmitted) return <FormSubmitted form={form} />
    if (isSaved) return <FormSaved form={form} />
    if (isExported) return <FormExported />

    return (
        <FormWrapper>
            <FormHeader>
                <FormEmoji>📚</FormEmoji>
                <FormTitle>{form.title}</FormTitle>
            </FormHeader>
            {form.questions.map((question) => (
                <FormElement
                    key={question.id}
                    question={question}
                    onChange={handleChange}
                    error={showError ? fieldErrors.includes(question) : false}
                    isEdit={isMyForm}
                    onDelete={() => deleteQuestion(question.id)}
                    onEdit={() => onEdit(question.id)}
                />
            ))}
            {isMyForm ? (
                <>
                    <Add title="Add question" onClick={onAddQuestion} />
                    <FormButton disabled={false} onClick={saveForm}>
                        Save
                    </FormButton>
                    <FormActions>
                        <Share title={form.title} id={form.id} />
                        <FormDelete onClick={deleteForm}>
                            Delete form
                        </FormDelete>
                    </FormActions>
                    <FormQuestionEditSeparator />
                    <FormInfo>
                        <FormInfoParticipants>
                            {form.response} answers
                        </FormInfoParticipants>
                        <Export onClick={exportForm} />
                    </FormInfo>
                </>
            ) : (
                <FormButton disabled={isHaveErrors} onClick={submitForm}>
                    {isHaveErrors
                        ? `${fieldErrors.length} questions remaining`
                        : 'Submit'}
                </FormButton>
            )}
        </FormWrapper>
    )
}

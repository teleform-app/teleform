import useSWR from 'swr'
import axios from 'axios'
import { Form } from 'types/form.ts'
import { useTelegramWebApp } from './useTelegramWebApp.ts'

export interface GetMyFormsResponse {
    forms: Form[]
}

const useXInitData = () => {
    const telegram = useTelegramWebApp()

    axios.defaults.headers.common['X-Init-Data'] = telegram.initData
}
export const useMyForms = () => {
    useXInitData()

    return useSWR('/api/getMyForms', (url) =>
        axios.get<GetMyFormsResponse>(url).then((res) => res.data)
    )
}

export interface GetMyFormResponse {
    form: Form
}
export const useGetForm = (id: string) => {
    useXInitData()

    return useSWR(`/api/getForm?form_id=${id}`, (url) =>
        axios
            .get(url)
            .then(({ data }) => {
                const { form } = data
                return {
                    form: {
                        ...form,
                        questions: form.questions.map(
                            (question: {
                                content: { text: string; options: string[] }
                            }) => {
                                return {
                                    ...question,
                                    title: question.content.text,
                                    options: question.content.options,
                                }
                            }
                        ),
                    },
                } as GetMyFormResponse
            })
            .catch(console.error)
    )
}

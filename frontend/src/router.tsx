import { createBrowserRouter } from 'react-router-dom'
import { PollList } from 'pages/FormList'
import { FormPage } from 'pages/Form'
import { QuestionEdit } from 'pages/QuestionEdit'
import { CreateForm } from 'pages/FormCreate'
import { StatusPage } from 'pages/Status'
export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <PollList />,
    },
    {
        path: '/create',
        element: <CreateForm />,
    },
    {
        path: '/form/:id',
        element: <FormPage />,
    },
    {
        path: '/questionEdit/:id',
        element: <QuestionEdit />,
    },
    {
        path: '/status/:status',
        element: <StatusPage />,
    },
])

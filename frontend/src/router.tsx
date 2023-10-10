import { createBrowserRouter } from "react-router-dom";
import { PollList } from "pages/FormList";
import { FormPage } from "pages/Form";
import { QuestionEdit } from "pages/QuestionEdit";
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <PollList />,
  },
  {
    path: "/form/:id",
    element: <FormPage />,
  },
  {
    path: "/questionEdit/:id",
    element: <QuestionEdit />,
  },
]);

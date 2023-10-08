import { createBrowserRouter } from "react-router-dom";
import { PollList } from "pages/FormList";
import { FormPage } from "pages/Form";
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <PollList />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);

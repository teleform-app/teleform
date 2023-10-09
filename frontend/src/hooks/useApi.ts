import useSWR from "swr";
import axios from "axios";
import { Form } from "types/form.ts";
import { useTelegramWebApp } from "./useTelegramWebApp.ts";

export interface GetMyFormsResponse {
  forms: Form[];
}
export const useMyForms = () => {
  const telegram = useTelegramWebApp();

  axios.defaults.headers.common["X-Init-Data"] = telegram.initData;

  return useSWR("/api/getMyForms", (url) =>
    axios.get<GetMyFormsResponse>(url).then((res) => res.data),
  );
};

export interface GetMyFormResponse {
  form: Form;
}
export const useGetForm = (id: string) => {
  const telegram = useTelegramWebApp();

  axios.defaults.headers.common["X-Init-Data"] = telegram.initData;

  return useSWR(`/api/getForm?form_id=${id}`, (url) =>
    axios
      .get(url)
      .then(({ data }) => {
        const { form } = data;
        return {
          form: {
            ...form,
            questions: form.questions.map((question: any) => {
              return {
                ...question,
                title: question.content.find((item: any) => item.Key === "text")
                  .Value,
                options: question.content?.find(
                  (item: any) => item.Key === "options",
                )?.Value,
              };
            }),
          },
        } as GetMyFormResponse;
      })
      .catch(console.error),
  );
};

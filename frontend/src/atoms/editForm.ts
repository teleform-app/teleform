import { Form } from "types/form.ts";
import { atom, useRecoilState } from "recoil";

export interface EditFormInterface {
  form?: Form;
}

export const editFormState = atom<EditFormInterface>({
  key: "editForm",
  default: {
    form: undefined,
  },
});

export const useEditFormState = () => {
  return useRecoilState(editFormState);
};

import { Title } from "./Components/Title";
import { useEffect, useState } from "react";
import { List } from "./Components/List";
import { useTelegramWebApp } from "../../hooks/useTelegramWebApp.ts";
import { Link, useNavigate } from "react-router-dom";
import { useMyForms } from "../../hooks/useApi.ts";
import { useBackButton } from "../../hooks/useBackButton.ts";
import { useEditFormState } from "../../atoms/editForm.ts";
import { NewForm } from "pages/FormList/Components/NewForm";
import axios from "axios";

export const PollList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const { data } = useMyForms();

  const [, setEditFormState] = useEditFormState();
  const [isCreating, setIsCreating] = useState(false);

  const telegram = useTelegramWebApp();
  const navigate = useNavigate();

  useBackButton(true);

  useEffect(() => {
    const { start_param } = telegram.initDataUnsafe;
    if (start_param) {
      window.location.href = `/form/${start_param}`;
    }
  }, [telegram]);

  useEffect(() => {
    setEditFormState({
      form: undefined,
    });
  }, [setEditFormState]);

  const onCreate = (title: string) => {
    axios
      .post("/api/createForm", {
        title,
      })
      .then(({ data }) => {
        navigate(`/form/${data.form.id}`);
      });
  };

  if (data === undefined) {
    return null;
  }

  return (
    <div>
      {isCreating && (
        <NewForm
          onClose={() => {
            setIsCreating(false);
          }}
          onCreate={onCreate}
        />
      )}
      <Title text={"My forms"} />
      <List
        list={data.forms}
        onCreate={() => {
          setIsCreating(true);
        }}
      />
      <Link to={"/form"}>
        <button>open form</button>
      </Link>
      <Link to={"/questionEdit"}>
        <button>open question edit</button>
      </Link>
    </div>
  );
};

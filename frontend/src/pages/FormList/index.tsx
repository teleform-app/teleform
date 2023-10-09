import { Title } from "./Components/Title";
import { useEffect } from "react";
import { List } from "./Components/List";
import { useTelegramWebApp } from "../../hooks/useTelegramWebApp.ts";
import { Link } from "react-router-dom";
import { useMyForms } from "../../hooks/useApi.ts";
import { useBackButton } from "../../hooks/useBackButton.ts";

export const PollList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const { data } = useMyForms();

  const telegram = useTelegramWebApp();

  useBackButton(true);

  useEffect(() => {
    const { start_param } = telegram.initDataUnsafe;
    if (start_param) {
      window.location.href = `/form/${start_param}`;
    }
  }, [telegram]);

  if (data === undefined) {
    return null;
  }

  return (
    <div>
      <Title text={"My forms"} />
      <List list={data.forms} />
      <span
        style={{
          color: "white",
        }}
      >
        {JSON.stringify(telegram, null, 4)}
      </span>
      <Link to={"/form"}>
        <button>open form</button>
      </Link>
    </div>
  );
};

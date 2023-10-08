import { Title } from "./Components/Title";
import { useState } from "react";
import { FormPreview } from "types/form.ts";
import { List } from "./Components/List";
import { useTelegram } from "../../hooks/useTelegram.ts";
import { Link } from "react-router-dom";

export const PollList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list] = useState<FormPreview[]>([
    {
      name: "Delivery of prizes from contest",
      emoji: "📦",
      participants: 362,
    },
    {
      name: "Registration to Readers Event 2023 (for Constructor University Students)",
      emoji: "📚",
      participants: 0,
    },
  ]);

  const telegram = useTelegram();

  return (
    <div>
      <Title text={"My forms"} />
      <List list={list} />
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

import styles from "./style.module.css";

import classNames from "classnames/bind";
import { Title } from "./Components/Title";
import { useState } from "react";
import { FormPreview } from "types/form.ts";
import { List } from "./Components/List";

const cx = classNames.bind(styles);

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

  return (
    <div className={cx("wrapper")}>
      <Title text={"My forms"} />
      <List list={list} />
    </div>
  );
};

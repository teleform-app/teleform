import styles from "./style.module.css";

import classNames from "classnames/bind";
import { FC } from "react";
import { FormPreview } from "types/form.ts";

import plusIcon from "./plus.svg";

const cx = classNames.bind(styles);

interface ListProps {
  list: FormPreview[];
}

export const List: FC<ListProps> = ({ list }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("element")}>
        <div className={cx("emoji")}>
          <img src={plusIcon} alt="+" />
        </div>
        <div className={cx("newFormInfo")}>
          <div className={cx("newFormTitle")}>New form</div>
        </div>
      </div>
      {list.map((poll) => (
        <div className={cx("poll", "element")}>
          <div className={cx("emoji")}>{poll.emoji}</div>
          <div className={cx("info")}>
            <div className={cx("name")}>{poll.name}</div>
            <div className={cx("participants")}>
              {poll.participants === 0
                ? "No responses"
                : `${poll.participants} responses`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import styles from "./style.module.css";

import classNames from 'classnames/bind'
import {FC} from "react";

const cx = classNames.bind(styles)

interface TitleProps {
    text: string
}

export const Title: FC<TitleProps> = ({text}) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>{text}</div>
        </div>
    );
};
import { SwitchButton, SwitchWrapper } from "./styles.tsx";
import { FC, useEffect, useState } from "react";

interface SwitchProps {
  checked: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({ onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(false);

  onChange?.(isChecked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <SwitchWrapper
      checked={isChecked}
      onClick={() => {
        setIsChecked((prevState) => !prevState);
      }}
    >
      <SwitchButton checked={isChecked} />
    </SwitchWrapper>
  );
};

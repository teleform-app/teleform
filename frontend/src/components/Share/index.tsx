import { FC } from "react";
import { FormShareWrapper } from "./styles.tsx";

interface ShareProps {
  title: string;
  id: string;
}

export const Share: FC<ShareProps> = ({ id, title }) => {
  const isSharingAvailable = window.navigator?.share !== undefined;

  if (!isSharingAvailable) {
    return null;
  }

  const share = () => {
    window.navigator.share({
      title,
      text: title,
      url: `https://t.me/teleformappbot/form?startapp=${id}`,
    });
  };

  return <FormShareWrapper onClick={share}>Share this form</FormShareWrapper>;
};

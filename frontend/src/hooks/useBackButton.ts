import { useEffect } from "react";
import { useTelegramWebApp } from "./useTelegramWebApp.ts";

export const useBackButton = (main: boolean) => {
  const { BackButton } = useTelegramWebApp();
  useEffect(() => {
    if (!main) {
      BackButton.show();
    } else {
      BackButton.hide();
    }
    const handlerBack = () => {
      window.history.back();
    };

    BackButton.onClick(handlerBack);

    return () => {
      BackButton.offClick(handlerBack);
    };
  });
};

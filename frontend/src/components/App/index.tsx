import { useEffect } from "react";
import { useTelegramWebApp } from "../../hooks/useTelegramWebApp.ts";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../../router.tsx";

export const App = () => {
  const telegram = useTelegramWebApp();

  useEffect(() => {
    telegram.setHeaderColor("secondary_bg_color");
    telegram.setBackgroundColor("secondary_bg_color");
    telegram.ready();
  }, [telegram]);

  return <RouterProvider router={AppRouter} />;
};

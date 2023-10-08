import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram.ts";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../../router.tsx";

export const App = () => {
  const telegram = useTelegram();

  useEffect(() => {
    telegram.setHeaderColor("secondary_bg_color");
    telegram.setBackgroundColor("secondary_bg_color");
    telegram.ready();
  }, [telegram]);

  return <RouterProvider router={AppRouter} />;
};

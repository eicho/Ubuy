import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Ubuy`;
  }, [title]);

  return null;
};

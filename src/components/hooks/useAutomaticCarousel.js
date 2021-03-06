import { SET_AUTOMATIC_NEXT } from "./portfolioReducer";
import { useEffect } from "react";

export const useAutomaticCarousel = (active, isInAutomatic, delay, category, dispatch, type = SET_AUTOMATIC_NEXT) => {
  useEffect(() => {
    const setCurrentIndex = (lastId) => {
      const nextId = (lastId !== category.length) ? lastId + 1 : 1;
      dispatch({ type, id: nextId });
    };

    if (isInAutomatic) {
      let roundTime = setTimeout(() => {
        setCurrentIndex(active);
      }, delay);
      return () => clearTimeout(roundTime);
    }
  }, [active, isInAutomatic, delay, category, dispatch, type]);
};

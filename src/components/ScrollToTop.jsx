import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
       // Use "instant" to bypass the "scroll-behavior: smooth" in your CSS
      behavior: "instant",
    });
  }, [pathname]);


  return null;
}

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <CartContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CartContext.Provider>
  );
};
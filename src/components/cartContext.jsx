import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  /* ---------------- THEME ---------------- */

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
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* ---------------- CART STATE ---------------- */

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  /* ---------------- LOCAL STORAGE ---------------- */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  /* ---------------- CART FUNCTIONS ---------------- */

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    toast.success("Added to cart 🛒");
  };

  /* Remove product with confirmation */

  const removeFromCart = (id) => {
    Swal.fire({
      title: "Remove product?",
      text: "This product will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prev) => prev.filter((item) => item.id !== id));
        toast.error("Product removed ❌");
      }
    });
  };

  /* Increase quantity */

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /* Decrease quantity */

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* Clear cart with confirmation */

  const clearCart = () => {
    Swal.fire({
      title: "Clear cart?",
      text: "All products will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, clear it",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        toast("Cart cleared 🧹");
      }
    });
  };

  /* ---------------- FAVOURITES ---------------- */

  const toggleFavourite = (product) => {
    const exists = favourites.find((item) => item.id === product.id);

    if (exists) {
      setFavourites(
        favourites.filter((item) => item.id !== product.id)
      );
      toast("Removed from favourites 💔");
    } else {
      setFavourites([...favourites, product]);
      toast.success("Added to favourites ❤️");
    }
  };

  /* ---------------- TOTAL PRICE ---------------- */

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        theme,
        toggleTheme,

        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,

        favourites,
        toggleFavourite,

        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [productsState, setProductsState] = useState(
    products.map((product) => {
      return { ...product, currentQuantity: 0 };
    })
  );

  const [cart, setCart] = useState([]);
  console.log("Cart:", cart);

  const handleAddQuantity = (productId) => {
    const newProducts = productsState.map((product) =>
      product.id === productId
        ? { ...product, currentQuantity: product.currentQuantity + 1 }
        : product
    );
    setProductsState(newProducts);
  };

  const handleRemoveQuantity = (productId) => {
    const newProducts = productsState.map((product) =>
      product.id === productId
        ? {
            ...product,
            currentQuantity:
              product.currentQuantity === 0 ? 0 : product.currentQuantity - 1,
          }
        : product
    );
    setProductsState(newProducts);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = productsState.find(
      (product) => product.id === productId
    );

    if (productToAdd.currentQuantity === 0) {
      alert("please add a quantity more than zero.");
      return;
    }

    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === productId);
      if (existingItem) {
        return previousCart.map((item) =>
          item.id === productId
            ? {
                ...item,
                cartQuantity: item.cartQuantity + productToAdd.currentQuantity,
                subtotal:
                  item.price.replace("$", "") *
                  (item.cartQuantity + productToAdd.currentQuantity),
              }
            : item
        );
      } else {
        return [
          ...previousCart,
          {
            ...productToAdd,
            cartQuantity: productToAdd.currentQuantity,
            subtotal:
              productToAdd.price.replace("$", "") *
              productToAdd.currentQuantity,
          },
        ];
      }
    });
  };

  const handleRemoveItem = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const addQuantityCart = (productId) => {
    const newCart = cart.map((item) =>
      item.id === productId
        ? { ...item, cartQuantity: item.cartQuantity + 1 }
        : item
    );
    setCart(newCart);
  };

  const removeQuantityCart = (productId) => {
    const newCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            cartQuantity: item.cartQuantity === 1 ? 1 : item.cartQuantity - 1,
          }
        : item
    );
    setCart(newCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <NavBar />
      <div className="GroceriesApp-Container">
        <ProductsContainer
          products={productsState}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />
        <CartContainer
          cart={cart}
          handleRemoveItem={handleRemoveItem}
          addQuantityCart={addQuantityCart}
          removeQuantityCart={removeQuantityCart}
          emptyCart={emptyCart}
        />
      </div>
    </>
  );
}

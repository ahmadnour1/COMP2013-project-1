import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  handleRemoveItem,
  addQuantityCart,
  removeQuantityCart,
  emptyCart,
}) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].subtotal;
  }
  return (
    <div className="CartContainer">
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="">
          <h3>Cart Items: {cart.length}</h3>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              handleRemoveItem={handleRemoveItem}
              addQuantityCart={addQuantityCart}
              removeQuantityCart={removeQuantityCart}
            />
          ))}
          <div className="CartListBtns">
            <button
              onClick={emptyCart}
              style={{ backgroundColor: "orangered" }}
            >
              Empty Cart
            </button>

            <button style={{ backgroundColor: "blueviolet" }}>
              Checkout: ${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

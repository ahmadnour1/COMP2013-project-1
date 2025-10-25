import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
  price,
  image,
  cartQuantity,
  handleRemoveItem,
  addQuantityCart,
  removeQuantityCart,
  subtotal,
}) {
  return (
    <div className="CartCard">
      <div>
        <img src={image} alt="" />
        <p>{productName}</p>
        <p>{price}</p>
        <QuantityCounter
          quantity={cartQuantity}
          prodId={id}
          handleAddQuantity={addQuantityCart}
          handleRemoveQuantity={removeQuantityCart}
        />
      </div>
      <div>
        <p>SubTotal: ${subtotal.toFixed(2)}</p>
        <button
          style={{ backgroundColor: "orangeRed" }}
          onClick={() => handleRemoveItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function QuantityCounter({
  quantity,
  handleAddQuantity,
  handleRemoveQuantity,
  prodId,
}) {
  return (
    <div className="ProductQuantityDiv">
      <button onClick={() => handleRemoveQuantity(prodId)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleAddQuantity(prodId)}>+</button>
    </div>
  );
}

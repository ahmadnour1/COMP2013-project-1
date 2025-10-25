import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  id,
  productName,
  brand,
  image,
  price,
  currentQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductCard">
      <h3>{productName}</h3>
      <img src={image} alt={productName} />
      <p>{brand}</p>
      <QuantityCounter
        quantity={currentQuantity}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        prodId={id}
      />
      <p>{price}</p>
      <button onClick={() => handleAddToCart(id)}>Add to cart</button>
    </div>
  );
}

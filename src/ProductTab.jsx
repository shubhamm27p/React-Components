import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div className="product-tab">
      <Product title="Logitech MX Master 3S" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-Transformer" idx={2} />
      <Product title="Portronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,986", "1,599", "599"];
  let newPrices = ["11,986", "10,528", "1,199", "499"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["Intuitive surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "8,000 DPI"],
    ["Wireless", "Optical orientation"],
  ];

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description[idx]?.[0]}</p>
        <p className="product-desc">{description[idx]?.[1]}</p>
      </div>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
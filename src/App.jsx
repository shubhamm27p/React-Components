import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";


function App() {
  return (
    <div className="app-container">
      <h2 className="main-title">Blockbuster Deals | Shop Now</h2>
      <ProductTab />
       <Button/>
       <Form/>
    </div>
   
  );
}

export default App;


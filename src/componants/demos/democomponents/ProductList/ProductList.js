import React from "react";
import productItems from "../../data/ProductItems"
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
// import Footer from "../../../Footer/Footer";

const ProductList = () => {
  
  return (
    <div className="product">
    <section className="list-view">
    

      {productItems.map((item) => (
        <ModelViewer item={item} />
      ))}
     
    </section>

    </div>
  );
};

export default ProductList;

import React from "react";
import ProductItem from "./ProductItem";
import { IProduct } from "../types";

interface Props {
  products: IProduct[];
}

const FeaturedProducts: React.FC<Props> = ({ products }) => {
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {products.map((product) => {
                    return (
                      <ProductItem
                        product={product}
                        key={product.id}
                        {...product}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

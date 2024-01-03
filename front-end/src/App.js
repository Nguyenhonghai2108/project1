import React, { useState } from "react";
import "./product.css"

const ProductPage = () => {
  const [product, setProduct] = useState({
    name: "Baseus Metal Gleam Starjoy Series 8-in-1 4K60Hz",
    image: "https://cf.shopee.vn/file/vn-11134207-7r98o-lnqi3a9zrw5632",
    price: "1,200,000",
    description:
      "Baseus Metal Gleam Starjoy Series 8-in-1 4K60Hz là một bộ hub mở rộng đa năng, hỗ trợ kết nối nhiều thiết bị cùng lúc. Sản phẩm có thiết kế kim loại cao cấp, sang trọng, cùng với khả năng truyền tải dữ liệu nhanh chóng và ổn định.",
  });

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
      </header>
      <main className="product-main">
        <section className="product-price">
          <span>Giá: {product.price} VNĐ</span>
        </section>
        <section className="product-description">
          <p>{product.description}</p>
        </section>
      </main>
      <footer className="product-footer">
        <button>Mua ngay</button>
      </footer>
    </div>
  );
};

export default ProductPage;

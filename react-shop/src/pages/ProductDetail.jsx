import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import useCartStore from "../stores/cartStore";
import "../css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const { cart, addToCart } = useCartStore();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  const isInCart = product && cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
    }
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="action-buttons">
            <Button
              variant={isInCart ? "secondary" : "primary"}
              className="action-button"
              onClick={handleAddToCart}
            >
              {isInCart ? "In Cart" : "Add to Cart"}
            </Button>
            <Button
              variant="secondary"
              className="action-button"
              onClick={handleGoToCart}
            >
              Go to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

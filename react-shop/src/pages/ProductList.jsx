import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/ProductList.css";
import useCartStore from "../stores/cartStore";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const { cart, addToCart, removeFromCart } = useCartStore();
  const isInCart = (productId) => cart.some((item) => item.id === productId);
  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory)
        );

  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        {categories.map((category) => (
          <button
            key={category}
            className="btn btn-secondary mx-1"
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <p className="text-center">Showing {filteredProducts.length} products</p>
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card className="product-card">
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="product-image"
                />
              </Link>
              <Card.Body className="product-card-body">
                <Card.Title
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {product.title}
                </Card.Title>
                <div className="price-box">
                  <Button
                    variant={isInCart(product.id) ? "secondary" : "primary"}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isInCart(product.id) ? "In Cart" : "Add to Cart"}
                  </Button>
                  <div className="float-end">${product.price}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;

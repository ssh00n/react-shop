import React from "react";
import useCartStore from "../stores/cartStore";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "../css/Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore((state) => state);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <ListGroupItem key={item.id} className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
              />
              <div className="flex-grow-1">
                <h5>{item.title}</h5>
                <p>{item.category}</p>
                <p>${item.price}</p>
              </div>
              <div className="me-auto">{/* Add quantity buttons here */}</div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                <FaTrash />
              </Button>
            </ListGroupItem>
          ))
        )}
      </ListGroup>
      <div className="mt-3">
        <h4>Total: ${total.toFixed(2)}</h4>
        <Button variant="primary">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;

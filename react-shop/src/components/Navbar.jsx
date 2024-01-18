import React from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/cartStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserAuth } from "../context/UserAuthContext";
import {
  faShoppingCart,
  faUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const cart = useStore((state) => state.cart);
  const { logOut } = useUserAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shop
        </Link>
        <div className="d-flex align-items-center">
          <Link className="nav-link" to="/cart">
            <FontAwesomeIcon
              style={{ marginLeft: 5, fontSize: 20 }}
              icon={faShoppingCart}
            />
            {cart.length > 0 && (
              <span style={{ marginLeft: 5, fontSize: 14 }}>
                ({cart.length})
              </span>
            )}
          </Link>
          <Link className="nav-link" to="/login">
            <FontAwesomeIcon
              style={{ marginLeft: 5, fontSize: 20 }}
              icon={faUser}
            />
          </Link>
          <button
            className="btn btn-outline-secondary ms-2"
            style={{ border: "none" }}
            onClick={handleLogout}
          >
            <FontAwesomeIcon
              style={{ marginLeft: 5, fontSize: 20 }}
              icon={faDoorOpen}
            />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const checkout = () => {
  return (
    <div>
      <Layout>
        <div className="heading">
          <h3>checkout</h3>
          <p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              home{" "}
            </Link>{" "}
            <span> / checkout</span>
          </p>
        </div>
        <section className="checkout">
          <h1 className="title">order summary</h1>
          <form action method="post">
            <div className="cart-items">
              <h3>cart items</h3>
              <p>
                <span className="name">delicious pizza 01</span>
                <span className="price">$3</span>
              </p>
              <p>
                <span className="name">main dish 02</span>
                <span className="price">$3</span>
              </p>
              <p>
                <span className="name">delicious dessert 01</span>
                <span className="price">$3</span>
              </p>
              <p className="grand-total">
                <span className="name">grand total :</span>{" "}
                <span className="price">$9</span>
              </p>
              <Link to="/cart" className="btn">
                view cart
              </Link>
            </div>
            <div className="user-info">
              <h3>your info</h3>
              <p>
                <i className="fas fa-user" /> <span>shaikh anas</span>
              </p>
              <p>
                <i className="fas fa-phone" /> <span>1234567890</span>
              </p>
              <p>
                <i className="fas fa-envelope" />{" "}
                <span>shaikhanas@gmail.com</span>
              </p>
              <Link to="/update_profile" className="btn">
                update info
              </Link>
              <h3>delivery address</h3>
              <p className="address">
                <i className="fas fa-map-marker-alt" />{" "}
                <span>
                  flat no. 1, building no. 1, jogeshwari west, mumbai, india -
                  400104
                </span>
              </p>
              <Link to="/update_address" className="btn">
                update address
              </Link>
              <select name="method" className="box" required>
                <option value disabled selected>
                  select payment method
                </option>
                <option value="cash on delivery">cash on delivery</option>
                <option value="credit card">credit card</option>
                <option value="paytm">paytm</option>
                <option value="paypal">paypal</option>
              </select>
            </div>
            <input
              type="submit"
              defaultValue="place order"
              name="order"
              className="btn order-btn"
            />
          </form>
        </section>
      </Layout>
    </div>
  );
};

export default checkout;

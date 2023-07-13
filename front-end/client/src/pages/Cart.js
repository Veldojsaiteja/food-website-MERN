import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Cart = () => {
  return (
    <div>
      <Layout>
        <div className="heading">
          <h3>shopping cart</h3>
          <p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              home{" "}
            </Link>{" "}
            <span> / cart</span>
          </p>
        </div>
        <section className="products">
          <h1 className="title">your cart</h1>
          <div className="cart-total">
            <p>
              grand total : <span>$9/-</span>
            </p>
            <Link to="/checkout" className="btn">
              checkout orders
            </Link>
          </div>
          <div className="box-container">
            <div className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-times"
                type="submit"
                name="delete"
                onclick="return confirm('delete this item?')"
              />
              <img src="uploaded_img/pizza-1.png" alt="" />
              <div className="name">delicious pizza 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3
                </div>
                <input
                  type="number"
                  name="qty"
                  className="qty"
                  min={1}
                  max={99}
                  defaultValue={1}
                  onkeypress="if(this.value.length == 2) return false;"
                />
                <button type="submit" className="fas fa-edit" />
              </div>
              <div className="sub-total">
                sub total : <span>$3</span>
              </div>
            </div>
            <div className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-times"
                type="submit"
                name="delete"
                onclick="return confirm('delete this item?')"
              />
              <img src="uploaded_img/dish-2.png" alt="" />
              <div className="name">main dish 02</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3
                </div>
                <input
                  type="number"
                  name="qty"
                  className="qty"
                  min={1}
                  max={99}
                  defaultValue={1}
                  onkeypress="if(this.value.length == 2) return false;"
                />
                <button type="submit" className="fas fa-edit" />
              </div>
              <div className="sub-total">
                sub total : <span>$3</span>
              </div>
            </div>
            <div className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-times"
                type="submit"
                name="delete"
                onclick="return confirm('delete this item?')"
              />
              <img src="uploaded_img/dessert-1.png" alt="" />
              <div className="name">delicious dessert 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3
                </div>
                <input
                  type="number"
                  name="qty"
                  className="qty"
                  min={1}
                  max={99}
                  defaultValue={1}
                  onkeypress="if(this.value.length == 2) return false;"
                />
                <button type="submit" className="fas fa-edit" />
              </div>
              <div className="sub-total">
                sub total : <span>$3</span>
              </div>
            </div>
          </div>
          <div className="more-btn">
            <Link
              to="#"
              className="delete-btn"
              onclick="return confirm('delete all from cart?');"
            >
              delete all
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Cart;

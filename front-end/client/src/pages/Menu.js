import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Menu = () => {
  return (
    <Layout>
      <div>
        <div className="heading">
          <h3>our menu</h3>
          <p>
            <Link to="/home">home </Link> <span> / menu</span>
          </p>
        </div>
        <section className="products">
          <h1 className="title">latest dishes</h1>
          <div className="box-container">
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/pizza-1.png" alt="" />
              <Link to="/category" className="cat">
                fast food
              </Link>
              <div className="name">delicious pizza 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/dish-1.png" alt="" />
              <Link to="/category" className="cat">
                dishes
              </Link>
              <div className="name">main dish 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/burger-1.png" alt="" />
              <Link to="/category" className="cat">
                fast food
              </Link>
              <div className="name">chezzy hamburger 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/dessert-1.png" alt="" />
              <Link to="/category" className="cat">
                dessert
              </Link>
              <div className="name">delicious dessert 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/drink-1.png" alt="" />
              <Link to="/category" className="cat">
                drinks
              </Link>
              <div className="name">fresh drink 01</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/dish-2.png" alt="" />
              <Link to="/category" className="cat">
                dishes
              </Link>
              <div className="name">main dish 02</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/burger-2.png" alt="" />
              <Link to="/category" className="cat">
                fast food
              </Link>
              <div className="name">chezzy hamburger 02</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/pizza-2.png" alt="" />
              <Link to="/category" className="cat">
                fast food
              </Link>
              <div className="name">delicious pizza 02</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
            <form accept method="post" className="box">
              <Link to="/quick_view" className="fas fa-eye" />
              <button
                className="fas fa-shopping-cart"
                type="submit"
                name="add_to_cart"
              />
              <img src="uploaded_img/dessert-2.png" alt="" />
              <Link to="/category" className="cat">
                dessert
              </Link>
              <div className="name">delicious dessert 02</div>
              <div className="flex">
                <div className="price">
                  <span>$</span>3<span>/-</span>
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
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const HomePage = () => {
  return (
    <Layout>
      <div>
        <section className="home">
          <div className="swiper home-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide">
                <div className="content">
                  <span>order online</span>
                  <h3>delicious pizza</h3>
                  <Link to="/menu" className="btn">
                    see menus
                  </Link>
                </div>
                <div className="image">
                  <img src="images/home-img-1.png" alt="" />
                </div>
              </div>
              <div className="swiper-slide slide">
                <div className="content">
                  <span>order online</span>
                  <h3>double hamburger</h3>
                  <Link to="/menu" className="btn">
                    see menus
                  </Link>
                </div>
                <div className="image">
                  <img src="images/home-img-2.png" alt="" />
                </div>
              </div>
              <div className="swiper-slide slide">
                <div className="content">
                  <span>order online</span>
                  <h3>roasted chicken</h3>
                  <Link to="/menu" className="btn">
                    see menus
                  </Link>
                </div>
                <div className="image">
                  <img src="images/home-img-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>
        <section className="category">
          <h1 className="title">food category</h1>
          <div className="box-container">
            <Link
              to="/category"
              className="box"
              style={{ textDecoration: "none" }}
            >
              <img src="images/cat-1.png" alt="" />
              <h3>fast food</h3>
            </Link>
            <Link
              to="/category"
              className="box"
              style={{ textDecoration: "none" }}
            >
              <img src="images/cat-2.png" alt="" />
              <h3>main dishes</h3>
            </Link>
            <Link
              to="/category"
              className="box"
              style={{ textDecoration: "none" }}
            >
              <img src="images/cat-3.png" alt="" />
              <h3>drinks</h3>
            </Link>
            <Link
              to="/category"
              className="box"
              style={{ textDecoration: "none" }}
            >
              <img src="images/cat-4.png" alt="" />
              <h3>desserts</h3>
            </Link>
          </div>
        </section>
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
          </div>
          <div className="more-btn">
            <Link to="/menu" className="btn">
              view all
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;

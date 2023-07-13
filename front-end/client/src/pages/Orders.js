import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Orders = () => {
  return (
    <div>
      <Layout>
        <div className="heading">
          <h3>your orders</h3>
          <p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              home{" "}
            </Link>{" "}
            <span> / orders</span>
          </p>
        </div>
        <section className="orders">
          <h1 className="title">placed orders</h1>
          <div className="box-container">
            <div className="box">
              <p>
                {" "}
                placed on : <span>5-29-2022</span>{" "}
              </p>
              <p>
                {" "}
                name : <span>shaikh anas</span>{" "}
              </p>
              <p>
                {" "}
                number : <span>1234567899</span>{" "}
              </p>
              <p>
                {" "}
                email : <span>shaikhanas@gmail.com</span>{" "}
              </p>
              <p>
                {" "}
                address : <span>jogeshwari, mumbai, india - 400103</span>{" "}
              </p>
              <p>
                {" "}
                your orders : <span>
                  pizza 01 (1) - main dish 02 (3) -
                </span>{" "}
              </p>
              <p>
                {" "}
                total price : <span>$12/-</span>{" "}
              </p>
              <p>
                {" "}
                payment method : <span>cash on delivery</span>{" "}
              </p>
              <p>
                {" "}
                payment status : <span>pending</span>{" "}
              </p>
            </div>
            <div className="box">
              <p>
                {" "}
                placed on : <span>5-29-2022</span>{" "}
              </p>
              <p>
                {" "}
                name : <span>shaikh anas</span>{" "}
              </p>
              <p>
                {" "}
                number : <span>1234567899</span>{" "}
              </p>
              <p>
                {" "}
                email : <span>shaikhanas@gmail.com</span>{" "}
              </p>
              <p>
                {" "}
                address : <span>jogeshwari, mumbai, india - 400103</span>{" "}
              </p>
              <p>
                {" "}
                your orders : <span>
                  pizza 01 (1) - main dish 02 (3) -
                </span>{" "}
              </p>
              <p>
                {" "}
                total price : <span>$12/-</span>{" "}
              </p>
              <p>
                {" "}
                payment method : <span>cash on delivery</span>{" "}
              </p>
              <p>
                {" "}
                payment status : <span>pending</span>{" "}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Orders;

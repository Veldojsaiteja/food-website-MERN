import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="heading">
          <h3>contact us</h3>
          <p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              home{" "}
            </Link>{" "}
            <span> / contact</span>
          </p>
        </div>
        <section className="contact">
          <div className="row">
            <div className="image">
              <img src="images/contact-img.svg" alt="" />
            </div>
            <form action method="post">
              <h3>tell us something!</h3>
              <input
                type="text"
                name="name"
                required
                placeholder="enter your name"
                maxLength={50}
                className="box"
              />
              <input
                type="number"
                name="number"
                required
                placeholder="enter your number"
                max={9999999999}
                min={0}
                className="box"
                onkeypress="if(this.value.length == 10) return false;"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="enter your email"
                maxLength={50}
                className="box"
              />
              <textarea
                name="msg"
                placeholder="enter your message"
                required
                className="box"
                cols={30}
                rows={10}
                maxLength={500}
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="send message"
                className="btn"
                name="send"
              />
            </form>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;

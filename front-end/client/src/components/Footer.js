import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <section className="box-container">
          <div className="box">
            <img src="images/email-icon.png" alt="" />
            <h3>our email</h3>
            <a
              href="mailto:shaikhanas@gmail.com"
              style={{ textDecoration: "none" }}
            >
              veldojsaiteja@gmail.com
            </a>
          </div>
          <div className="box">
            <img src="images/clock-icon.png" alt="" />
            <h3>opening hours</h3>
            <p>10:00am to 09:10pm </p>
          </div>
          <div className="box">
            <img src="images/map-icon.png" alt="" />
            <h3>our address</h3>
            <a href="https://www.google.com/maps">Hyderabad, india - 500062</a>
          </div>
          <div className="box">
            <img src="images/phone-icon.png" alt="" />
            <h3>our number</h3>
            <a href="tel:1234567890">+123-456-7890</a>
          </div>
        </section>
        <div className="credit">
          © copyright @ 2023 by <span>vijay - saiteja</span> | all rights
          reserved!
        </div>
      </footer>
    </div>
  );
};

export default Footer;

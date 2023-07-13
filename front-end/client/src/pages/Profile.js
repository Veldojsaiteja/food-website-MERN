import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const Profile = () => {
  return (
    <div>
      <Layout>
        <div className="heading">
          <h3>my profile</h3>
          <p>
            <Link to="/home">home </Link> <span> / profile</span>
          </p>
        </div>
        <section className="user-details">
          <div className="user">
            <img src="images/user-icon.png" alt="" />
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
              update profile
            </Link>
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
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Profile;

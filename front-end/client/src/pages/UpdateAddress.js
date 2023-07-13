import React from "react";
import Layout from "../components/Layout";
const UpdateAddress = () => {
  return (
    <div>
      <Layout>
        <section className="search-form">
          <section className="form-container">
            <form action method="post">
              <h3>your address</h3>
              <input
                type="text"
                maxLength={50}
                placeholder="flat no. and building name"
                required
                className="box"
                name="flat"
              />
              <input
                type="text"
                maxLength={50}
                placeholder="area name"
                required
                className="box"
                name="street"
              />
              <input
                type="text"
                maxLength={50}
                placeholder="city name"
                required
                className="box"
                name="city"
              />
              <input
                type="text"
                maxLength={50}
                placeholder="state name"
                required
                className="box"
                name="state"
              />
              <input
                type="text"
                maxLength={50}
                placeholder="country name"
                required
                className="box"
                name="country"
              />
              <input
                type="number"
                min={0}
                max={999999}
                placeholder="pin code"
                required
                className="box"
                name="pin_code"
                onkeypress="if(this.value.length == 6) return false;"
              />
              <input
                type="submit"
                defaultValue="save address"
                name="submit"
                className="btn"
              />
            </form>
          </section>
        </section>
      </Layout>
    </div>
  );
};

export default UpdateAddress;

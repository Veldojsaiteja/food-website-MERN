import React from "react";
import Layout from "../components/Layout";
const Search = () => {
  return (
    <div>
      <Layout>
        <section className="search-form">
          <form action method="post">
            <input
              type="text"
              className="box"
              name="search_box"
              placeholder="search here..."
              maxLength={100}
            />
            <button type="submit" className="fas fa-search" name="search_btn" />
          </form>
        </section>
        <section
          className="products"
          style={{ paddingTop: 0, minHeight: "100vh" }}
        />
      </Layout>
    </div>
  );
};

export default Search;

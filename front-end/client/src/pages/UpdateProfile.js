import React from "react";
import Layout from "../components/Layout";
const UpdateProfile = () => {
  return (
    <div>
      <Layout>
        <section className="form-container">
          <form action method="POST">
            <h3>update profile</h3>
            <input
              type="text"
              required
              maxLength={20}
              name="name"
              placeholder="enter your name"
              className="box"
              oninput="this.value = this.value.replace(/\s/g, '')"
              defaultValue="shaikh anas"
            />
            <input
              type="email"
              required
              maxLength={50}
              name="email"
              placeholder="enter your email"
              className="box"
              oninput="this.value = this.value.replace(/\s/g, '')"
              defaultValue="shaikhanas@gmai.com"
            />
            <input
              type="numner"
              min={0}
              max={9999999999}
              onkeypress="if(this.value.length == 10) return false;"
              placeholder="enter your number"
              required
              className="box"
              name="number"
              defaultValue={1234567890}
            />
            <input
              type="password"
              maxLength={20}
              name="old_pass"
              placeholder="enter your old password"
              className="box"
              oninput="this.value = this.value.replace(/\s/g, '')"
            />
            <input
              type="password"
              maxLength={20}
              name="new_pass"
              placeholder="enter your new password"
              className="box"
              oninput="this.value = this.value.replace(/\s/g, '')"
            />
            <input
              type="password"
              maxLength={20}
              name="confirm_pass"
              placeholder="confirm your new password"
              className="box"
              oninput="this.value = this.value.replace(/\s/g, '')"
            />
            <input
              type="submit"
              defaultValue="update now"
              className="btn"
              name="submit"
            />
          </form>
        </section>
      </Layout>
    </div>
  );
};

export default UpdateProfile;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import Layout from "../components/Layout";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );
      const { data } = response;
      if (data.success) {
        setAuth({
          ...auth,
          user: data.user,
        });
        toast.success("Login successful!");
        navigate("/homepage");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  return (
    <Layout>
      <section className="form-container">
        <div className="my-form">
          <h3>login now</h3>
          <input
            type="email"
            required
            maxLength={50}
            name="email"
            placeholder="enter your email"
            className="box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            maxLength={20}
            name="pass"
            placeholder="enter your password"
            className="box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="btn"
            name="submit"
            defaultValue="Login now"
            onClick={handleLogin}
          />
          <p>
            don't have an account?{" "}
            <Link
              className="link-tag"
              to="/register"
              style={{ textDecoration: "none" }}
            >
              register now
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../components/Layout";
const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          name,
          email,
          password,
          address,
          phone,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else toast.error(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  return (
    <Layout>
      <section className="form-container">
        <form action method="post">
          <h3>register now</h3>
          <input
            type="text"
            required
            maxLength={20}
            name="name"
            placeholder="enter your name"
            className="box"
            oninput="this.value = this.value.replace(/\s/g, '')"
          />
          <input
            type="email"
            required
            maxLength={50}
            name="email"
            placeholder="enter your email"
            className="box"
            oninput="this.value = this.value.replace(/\s/g, '')"
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
          />
          <input
            type="password"
            required
            maxLength={20}
            name="pass"
            placeholder="enter your password"
            className="box"
            oninput="this.value = this.value.replace(/\s/g, '')"
          />
          <input
            type="password"
            required
            maxLength={20}
            name="cpass"
            placeholder="confirm your password"
            className="box"
            oninput="this.value = this.value.replace(/\s/g, '')"
          />
          <input
            type="submit"
            defaultValue="regisetr now"
            className="btn"
            name="submit"
          />
          <p>
            already have an account? <a href="login.html">login now</a>
          </p>
        </form>
      </section>
    </Layout>
    // <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //         <div
    //           className="card shadow-2-strong"
    //           style={{ borderRadius: "1rem" }}
    //         >
    //           <div className="card-body p-5 text-center">
    //             <h3 className="mb-5">Register Here</h3>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="typeEmailX-2"
    //                 className="form-control form-control-lg"
    //                 placeholder="Name"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //               />
    //             </div>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="email"
    //                 id="typeEmailX-2"
    //                 className="form-control form-control-lg"
    //                 placeholder="Email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //             </div>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="password"
    //                 id="typePasswordX-2"
    //                 className="form-control form-control-lg"
    //                 placeholder="Password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //               />
    //             </div>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="typeEmailX-2"
    //                 className="form-control form-control-lg"
    //                 placeholder="Address"
    //                 value={address}
    //                 onChange={(e) => setAddress(e.target.value)}
    //               />
    //             </div>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="typeEmailX-2"
    //                 className="form-control form-control-lg"
    //                 placeholder="Phone"
    //                 value={phone}
    //                 onChange={(e) => setPhone(e.target.value)}
    //               />
    //             </div>
    //             <button
    //               className="btn btn-primary btn-lg btn-block w-100 p-2"
    //               type="submit"
    //               onClick={handleRegister}
    //             >
    //               Register
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Register;

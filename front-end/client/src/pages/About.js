import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <div>
        <div className="heading">
          <h3>about us</h3>
          <p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              home{" "}
            </Link>{" "}
            <span> / about</span>
          </p>
        </div>
        <section className="about">
          <div className="row">
            <div className="image">
              <img src="images/about-img.svg" alt="" />
            </div>
            <div className="content">
              <h3>why choose us?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                non odit nihil, doloremque sunt aut placeat culpa. Adipisci
                minima, neque necessitatibus incidunt nemo eveniet mollitia quis
                facere vel consectetur culpa?
              </p>
              <Link to="/menu" className="btn">
                our menu
              </Link>
            </div>
          </div>
        </section>
        <section className="steps">
          <h1 className="title">3 simple steps</h1>
          <div className="box-container">
            <div className="box">
              <img src="images/step-1.png" alt="" />
              <h3>select food</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, hic.
              </p>
            </div>
            <div className="box">
              <img src="images/step-2.png" alt="" />
              <h3>30 minutes delivery</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, hic.
              </p>
            </div>
            <div className="box">
              <img src="images/step-3.png" alt="" />
              <h3>enjoy food!</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, hic.
              </p>
            </div>
          </div>
        </section>
        <section className="reviews">
          <h1 className="title">customer's reviews</h1>
          <div className="swiper reviews-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide">
                <img src="images/pic-1.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
              <div className="swiper-slide slide">
                <img src="images/pic-2.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
              <div className="swiper-slide slide">
                <img src="images/pic-3.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
              <div className="swiper-slide slide">
                <img src="images/pic-4.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
              <div className="swiper-slide slide">
                <img src="images/pic-5.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
              <div className="swiper-slide slide">
                <img src="images/pic-6.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  exercitationem ullam esse quia iusto in.
                </p>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <h3>john deo</h3>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

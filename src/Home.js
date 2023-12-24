import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const haddleOrder = () => {
    navigate("/Shop");
  };

  return (
    <div>
      <div className="site-description">
        <div className="left-site-description">
          <p className="in-touch">
            <strong>We Dey For You!!</strong>
          </p>
          <div className="title-order">
            <p className="title">
              Explore our latest collection of <i>HEALTHY FOODS</i>
              Enjoy exclusive deals, and elevate your activity with AlibabsShop.
            </p>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                backgroundColor: "#e5c827",
                border: "none",
                cursor: "pointer",
                marginTop: "2em",
              }}
              onClick={() => haddleOrder()}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div class="main-container">
          <img
            src="https://i0.wp.com/www.beyondborders254.com/wp-content/uploads/2018/03/Fruits-and-vegetables.jpg?fit=960%2C540&ssl=1"
            alt=""
          />
        </div>
      </div>
      <div className="featured-category" style={{ padding: "3em 1em" }}>
        <p style={{ fontSize: "25px" }}>
          <strong>Featured Categories:</strong>
        </p>
      </div>
    </div>
  );
}

export default Home;

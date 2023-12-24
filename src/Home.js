import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
//import Imageurl from './Photo';
//import { initialProducts } from './Database';
//import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  //const [products, setProducts] = useState(initialProducts);
  /*
  const addToCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        if (product.availableProduct > 0) {
          const productInCart = cart.find((item) => item.id === productId);
          if (!productInCart) {
            return {
              ...product,
              count: Number(product.count) + 1,
            };
          } else {
            alert(`${product.name} is already in the cart`);
          }
        } else {
          alert(`${product.name} is out of stock`);
        }
      }
      return product;
    });

    setProducts(updatedProducts);

    const totalCount = calculateTotalCount(updatedProducts);
    updateCartCount(totalCount);

    const updatedCart = updatedProducts.filter((product) => product.count > 0);
    setCart(updatedCart);
  };

  const calculateTotalCount = (cart) => {
    return cart.reduce((count, product) => count + product.count, 0);
  };

  const productList = products.map((product, index) => (

    <div style={{padding: '10px 10px'}}>
    <li key={product.id} style={{ listStyleType: 'none', padding: '10px 10px', border: '1px solid black', borderRadius: '10px 10px' }}>
      <div className="container" style={{ width: '200px', textAlign: 'center', marginBottom: '20px' }}>
        <img style={{ width: '90%', height: 'auto', padding: '10px 10px', borderRadius: '25px' }} src={Imageurl(product)} alt={product.id} />
        <br />
        <br />
        Name: {product.name} <br />
        Price: <del style={{ color: 'red' }}>{product.previousPrice}</del> {product.price} 
        <br />
        <span>{product.availableProduct ? <small style={{ color: 'green' }}><i>{product.availableProduct} Available in stock </i></small> : <small><i style={{ color: 'red' }}>Product is exhausted</i></small>}</span>
        <br /><br />
        <button onClick={() => addToCart(product.id)} style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: '15px', border: '1px solid black' }}>Add To Cart</button>
      </div>
    </li>
    </div>
  ));
  
  const productRows = [];
  for (let i = 0; i < productList.length; i += 4) {
    const row = productList.slice(i, i + 4);
    productRows.push(<div key={i / 4} style={{ display: 'flex', justifyContent: 'space-around' }}>{row}</div>);
  }
  */
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
              Explore our latest collection of <i> HEALTHY FOODS </i>
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

          {/*
      <div class="sub-container first-sub-container"> <img src="https://i.imgur.com/GrbeT7Pb.jpg" alt="" /> Vegetables 1 </div>
      <div class="sub-container second-sub-container"><img src="https://i.imgur.com/fiDTCPFb.jpg" alt="" /> Tomatoes</div>
      <div class="sub-container third-sub-container"> <img src="https://i.imgur.com/sEjowOEb.jpg" alt="" />Vegetables 2</div>
      */}
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

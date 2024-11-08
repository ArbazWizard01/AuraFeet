import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
// import Cards from "./slideProducts";
import "./slide.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";

const Slide = () => {
  const [cards, setCards] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get("https://demo-ecommerce-backend.vercel.app/?vercelToolbarCode=8Q5VaLw8dEY05kv")
        setCards(response.data);
      }
      catch (error){
        console.log("Error occurred while fetching data: ",error);
      }
    }
    fetchData();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  const next = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setActiveIndex((activeIndex + 1) % cards.length);
  };

  const prev = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setActiveIndex((activeIndex) => {
      if (activeIndex === 0) return cards.length - 1;
      return activeIndex - 1;
    });
  };

  const activeCard = useMemo(() => cards[activeIndex], [cards, activeIndex]);

  return (
    <section>
      <div className="slide-container">
      {activeCard?(
        <div className={`slide-card ${isAnimating ? "slide-animation" : ""}`}>
        <div className="slide-content">
          <div className="content-header">{activeCard.content.title}</div>
          <div className="content-shoe-name">
            {activeCard.content.shoeName}
          </div>
          <p>{activeCard.content.description}</p>
          <button
            className="btn"
            onClick={() => {
              addToCart(activeCard);
              console.log(activeCard.id);
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="slide-img-container">
          <img src={activeCard.url} alt={activeCard.alt} className="shoe" />

        </div>
      </div>
      ) :(
        <p>Loading...</p>
      )}
        
      </div>
      <div className="btn-container">
        <div onClick={next} style={{ right: 20 }} className="slide-btn">
          <FaArrowAltCircleRight />
        </div>
        <div onClick={prev} style={{ left: 20 }} className="slide-btn">
          <FaArrowAltCircleLeft />
        </div>
      </div>
    </section>
  );
};

export default Slide;

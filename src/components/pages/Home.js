import "../../styles/LogIn.css";
import  cardsP  from "../../img/purple.jpg";
import cardsPink from "../../img/backround.jpeg";
import colorsPlay from "../../img/colorsPlay.jpeg";
import "../../styles/Home.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const cardsData = [
  {
    title: 'COSMIC GATE',
    image: cardsP,
    videoUrl: 'https://www.youtube.com/embed/SnesLeRFa9Q',
    description: 'Cosmic Gate at Dreamstate Australia 2023 (after movie)',
  },
  {
    title: 'DJ TARKAN',
    image: cardsPink,
    videoUrl: 'https://www.youtube.com/embed/MNCX_VWfs0E',
    description: 'DJ Tarkan - Organic & Progressive House 2022',
  },
  {
    title: 'ARMIN VAN BUUREN',
    image: colorsPlay,
    videoUrl: 'https://www.youtube.com/embed/KLR0qngcFtQ',
    description: 'A State of Trance 2023 (Mixed by Armin van Buuren) [OUT NOW]',
  },
];

const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCardClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  return (
    <>
      <h1 className="title">Your music world</h1>
      <h2 className="text">LogIn and Enjoy Our New Sounds...</h2>
      <div className="main">
        <ul className="cards">
          {cardsData.map((card, index) => (
            <li className="cards_item" key={index}>
              <div className="card">
                <div className="card_image">
                  <img src={card.image} alt="Purple Product" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{card.title}</h2>
                  {activeVideo === card.videoUrl ? (
                    <iframe
                      width="488"
                      height="480"
                      src={card.videoUrl}
                      title={card.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <p className="card_text">{card.description}</p>
                      <button
                        className="btns card_btns"
                        onClick={() => handleCardClick(card.videoUrl)}
                      >
                        Play
                      </button>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btns">
          <Link to="/Login" className="btn">
            LogIn
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;


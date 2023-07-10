import { Link } from "react-router-dom"
import { useState } from "react";
import  cardsP  from "../img/purple.jpg";
import cardsPink from "../img/backround.jpeg";
import colorsPlay from "../img/colorsPlay.jpeg";
import circles from "../img/circles.jpeg";
import more from "../img/more.jpeg";
import starts from "../img/starts.jpeg";
import space from "../img/space.jpeg";
import "../styles/Cards.css";

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
  {
    title: 'DAVID GUETTA',
    image: circles,
    videoUrl: 'https://www.youtube.com/embed/90RLzVUuXe4',
    description: "David Guetta & Bebe Rexha - I'm Good (Blue) [Official Music Video]",
  },
  {
    title: 'MISS MONIQUE',
    image: more,
    videoUrl: 'https://www.youtube.com/embed/KIeAtU-Toxw',
    description: "Miss Monique - Special B'day Podcast 2023",
  },
  {
    title: 'TONNY',
    image: starts,
    videoUrl: 'https://www.youtube.com/embed/tdk9xlUtcc0',
    description: "Deep Set 16 in Santorini, Greece",
  },
  {
    title: 'CHILL YOUR MIND 24/7',
    image: space,
    videoUrl: 'https://www.youtube.com/embed/NJyCwdWT80c',
    description: "Chill Your MIND 24/7",
  },
];

const CardsMain = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCardClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  return (
    <>
      <h1 className="title">Welcome to Your Music World</h1>
      <h2 className="text">Enjoy listening to our new Club's Sounds!</h2>
      <div className="main scroll">
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
        <hr className="line" />
        <h2 className="text">See more...Listen more..</h2>
        <div className="main">
          <ul className="cards">
            {/* Additional card items */}
          </ul>
        </div>
        <div>
          <button className="btns">
            <Link to="/LogOut" className="logout">
              LogOut
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardsMain;

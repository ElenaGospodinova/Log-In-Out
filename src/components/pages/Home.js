import "../../styles/LogIn.css";
import  cardsP  from "../../img/purple.jpg";
import cardsPink from "../../img/backround.jpeg";
import colorsPlay from "../../img/colorsPlay.jpeg";
import { Link } from 'react-router-dom';
import "../../styles/Home.css";

export default function Home() {
  return (
    <>
    
    <h1 className="title">Your music world</h1>
    <h2 className="text">LogIn and Enjoy Our New Sounds...</h2>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={cardsP} alt="Purple Product" />
              </div>
              <div className="card_content">
                <h2 className="card_title">COSMIC GATE</h2>
                <p className="card_text">
                Cosmic Gate at Dreamstate Australia 2023 (after movie)
                </p>
                <button className="btns card_btns">Play</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={cardsPink} alt="Purple Product" />
              </div>
              <div className="card_content">
                <h2 className="card_title">DJ TARKAN</h2>
                <p className="card_text">
                DJ Tarkan - Organic & Progressive House 2022
                </p>
                <button className="btns card_btns">Play</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={colorsPlay} alt="Purple Product" />
              </div>
              <div className="card_content">
                <h2 className="card_title">ARMIN VAN BUUREN</h2>
                <p className="card_text">
                A State of Trance 2023 (Mixed by Armin van Buuren) [OUT NOW]
                <iframe width="560" height="315" src="https://www.youtube.com/embed/your_video_id" title="DJ Tarkan - Organic & Progressive House 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
                <button className="btns card_btn">Play</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <button className="btns">
          <Link to="/Login" className="btn">LogIn</Link>
        </button>
      </div>
    </>
  );
}

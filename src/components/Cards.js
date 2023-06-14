import { Link } from "react-router-dom"
import  cardsP  from "../img/purple.jpg";
import cardsPink from "../img/backround.jpeg";
import colorsPlay from "../img/colorsPlay.jpeg";
import  circles  from "../img/circles.jpeg";
import  more  from "../img/more.jpeg";
import  starts  from "../img/starts.jpeg";
import  space  from "../img/space.jpeg";
import "../styles/Cards.css";
//import { Link } from 'react-router-dom';


const CardsMain = () => {
    return <>
     <h1 className="title">Welcome to Your Music World</h1>
        <h2 className="text">Enjoy listening out new Club`s Sounds!</h2>
        <div className="main scroll">
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
                        </p>
                        <button className="btns card_btn">Play</button>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            <div>
            
        <hr className="line"/>
        <h2 className="text">See more...Listen more..</h2>
        <div className="main">
                <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                    <div className="card_image">
                        <img src={space} alt="Purple Product" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">DAVID GUETTA</h2>
                        <p className="card_text">
                        David Guetta & Bebe Rexha - I'm Good (Blue) [Official Music Video]
                        </p>
                        <button className="btns card_btns">Play</button>
                    </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                    <div className="card_image">
                        <img src={more} alt="Purple Product" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">MISS MONIQUE</h2>
                        <p className="card_text">
                        Special B'day Podcast 2023 [Melodic Techno/Progressive House DJ Mix]
                        </p>
                        <button className="btns card_btns">Play</button>
                    </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                    <div className="card_image">
                        <img src={circles} alt="Purple Product" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">TONNY</h2>
                        <p className="card_text">
                        Deep Set 16 in Santorini, Greece | 3 hour livestream DJ set [@anjunadeep]

                        </p>
                        <button className="btns card_btn">Play</button>
                    </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                    <div className="card_image">
                        <img src={starts} alt="Purple Product" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">AVICII, CALVIN HARRIS, KYGO</h2>
                        <p className="card_text">
                        Summer Vibes Mix 
                        </p>
                        <button className="btns card_btn">Play</button>
                    </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                    <div className="card_image">
                        <img src={colorsPlay} alt="Purple Product" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">CHILL YOUR MIND 24/7 live RADIO</h2>
                        <p className="card_text">
                        Best Summer Deep House & Tropical House & Chill Relax Music
                        </p>
                        <button className="btns card_btn">Play</button>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            <div>
            </div>
            <button className="btns"><Link to="/LogOut" className="logout">LogOut</Link></button>
        </div>
    </>
}
export default CardsMain;

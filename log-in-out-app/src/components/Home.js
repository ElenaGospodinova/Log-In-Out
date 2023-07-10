// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// import cardsP from './img/purple.jpg';
// import cardsPink from './img/backround.jpeg';
// import colorsPlay from './img/colorsPlay.jpeg';
// import { Link } from 'react-router-dom';
// import YouTube from 'react-youtube';
// import './styles/Home.css';
// import { useSelector } from 'react-redux';

// const Home = () => {
//   const username = useSelector((state) => state.user.username);
//   // youtube video
//   const [videoIds, setVideoIds] = React.useState({
//     cosmicGate: 'SnesLeRFa9Q',
//     djTarkan: 'MNCX_VWfs0E',
//     arminVanBuuren: 'KLR0qngcFtQ',
//   });

//   const playVideo = (videoId) => {
//     const player = document.getElementById('youtube-player');
//     player.loadVideoById(videoId);
//   };

//   return (
//     <>
//       <h1 className="title">Your music world</h1>
//       <h2 className="text">LogIn and Enjoy Our New Sounds...</h2>
//       <h2>Welcome, {username}!</h2>
//       <div className="main">
//         <ul className="cards">
//           <li className="cards_item">
//             <div className="card">
//               <div className="card_image">
//                 <YouTube videoId={videoIds.cosmicGate} id="youtube-player" />
//               </div>
//               <div className="card_content">
//                 <h2 className="card_title">COSMIC GATE</h2>
//                 <p className="card_text">
//                   Cosmic Gate at Dreamstate Australia 2023 (after movie)
//                 </p>
//                 <button
//                   className="btns card_btns"
//                   onClick={() => playVideo(videoIds.cosmicGate)}
//                 >
//                   Play
//                 </button>
//               </div>
//             </div>
//           </li>
//           <li className="cards_item">
//             <div className="card">
//               <div className="card_image">
//                 <YouTube videoId={videoIds.djTarkan} id="youtube-player" />
//               </div>
//               <div className="card_content">
//                 <h2 className="card_title">DJ TARKAN</h2>
//                 <p className="card_text">DJ Tarkan - Organic & Progressive House 2022</p>
//                 <button
//                   className="btns card_btns"
//                   onClick={() => playVideo(videoIds.djTarkan)}
//                 >
//                   Play
//                 </button>
//               </div>
//             </div>
//           </li>
//           <li className="cards_item">
//             <div className="card">
//               <div className="card_image">
//                 <YouTube videoId={videoIds.arminVanBuuren} id="youtube-player" />
//               </div>
//               <div className="card_content">
//                 <h2 className="card_title">ARMIN VAN BUUREN</h2>
//                 <p className="card_text">
//                   A State of Trance 2023 (Mixed by Armin van Buuren) [OUT NOW]
//                 </p>
//                 <button
//                   className="btns card_btns"
//                   onClick={() => playVideo(videoIds.arminVanBuuren)}
//                 >
//                   Play
//                 </button>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <button className="btns">
//           <Link to="/Login" className="btn">
//             LogIn
//           </Link>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Home;







// import React from 'react';
import React, { useMemo } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';
//import cardsP from "./img/purple.jpg";
//import cardsPink from "./img/backround.jpeg";
//import colorsPlay from "./img/colorsPlay.jpeg";
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import "./styles/Home.css";
import { useSelector } from 'react-redux';

const Home = () => {
  const username = useSelector((state) => state.user.username);
  const [videoIds, setVideoIds] = React.useState({
    cosmicGate: 'SnesLeRFa9Q',
    djTarkan: 'MNCX_VWfs0E',
    arminVanBuuren: 'KLR0qngcFtQ',
  });

  const playVideo = (videoId) => {
    const player = document.getElementById('youtube-player');
    player.loadVideoById(videoId);
  };

  return (
    <>
      <h1 className="title">Your music world</h1>
      <h2 className="text">LogIn and Enjoy Our New Sounds...</h2>
      <h2>Welcome, {username}!</h2>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <YouTube videoId={videoIds.cosmicGate} id="youtube-player" />
              </div>
              <div className="card_content">
                <h2 className="card_title">COSMIC GATE</h2>
                <p className="card_text">
                  Cosmic Gate at Dreamstate Australia 2023 (after movie)
                </p>
                <button className="btns card_btns" onClick={() => playVideo(videoIds.cosmicGate)}>
                  Play
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <YouTube videoId={videoIds.djTarkan} id="youtube-player" />
              </div>
              <div className="card_content">
                <h2 className="card_title">DJ TARKAN</h2>
                <p className="card_text">DJ Tarkan - Organic & Progressive House 2022</p>
                <button className="btns card_btns" onClick={() => playVideo(videoIds.djTarkan)}>
                  Play
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <YouTube videoId={videoIds.arminVanBuuren} id="youtube-player" />
              </div>
              <div className="card_content">
                <h2 className="card_title">ARMIN VAN BUUREN</h2>
                <p className="card_text">
                  A State of Trance 2023 (Mixed by Armin van Buuren) [OUT NOW]
                </p>
                <button className="btns card_btns" onClick={() => playVideo(videoIds.arminVanBuuren)}>
                  Play
                </button>
              </div>
            </div>
          </li>
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

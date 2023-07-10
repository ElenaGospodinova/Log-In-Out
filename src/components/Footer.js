import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../styles/Footer.css';
import EGospodinova from '../img/elly.jpg';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-left' style={{ marginTop: '25em' }}>
      <div className='logo'>
          
      </div>
      <div className='text-center p-3' >
      <img src={EGospodinova} alt='My Logo' className='logo'/>
      <br/>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <br/>
        <a  href='https://your-travel-app.netlify.app/'>
          Your Music App
        </a>
      </div>
    </MDBFooter>
  );
}
  
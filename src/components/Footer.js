import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../styles/Footer.css';
import EGospodinova from '../img/elly.jpg';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-left'>
      <div className='logo'>
          
      </div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <img src={EGospodinova} alt='My Logo' className='logo'/>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
  
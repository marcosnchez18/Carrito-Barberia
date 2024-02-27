import React from 'react';
import HeaderHome from '../components/Header_home';
import Principal from '../components/Principal';
import '../portada.css'
import Footer from '../components/Footer';

const Vista_principal = ({ onClick }) => {
    return (
        <div>
            <HeaderHome />
            <Principal />
            <div className='centrado'>
                <button className='boton_reservar' onClick={onClick}>Tienda Online</button>
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Vista_principal;


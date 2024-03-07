import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Lista_articulos } from '../components/Lista_articulos';
import Footer from '../components/Footer';
import '../index.css'
function OtherPage({ onClick }) {
    const [todos_articulos, set_todos_articulos] = useState([]);
    const [total, set_total] = useState(0);
    const [cant_articulos, set_cant_articulos] = useState(0);
    const click_atras = () => {
        onClick();
    };
    return (
        <>
            <Header
                todos_articulos={todos_articulos} set_todos_articulos={set_todos_articulos} total={total} set_total={set_total} cant_articulos={cant_articulos} set_cant_articulos={set_cant_articulos}
            />
            <Lista_articulos
                todos_articulos={todos_articulos} set_todos_articulos={set_todos_articulos} total={total} set_total={set_total} cant_articulos={cant_articulos} set_cant_articulos={set_cant_articulos}
            />
            <br /><br /><br />
            <div className='centrado'>
                <button className='boton_reservar' onClick={click_atras}>Volver</button>
            </div>
            <br /><br />
            <Footer />
        </>
    );
}

export default OtherPage;

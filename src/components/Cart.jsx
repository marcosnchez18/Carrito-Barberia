import React from 'react';
const Cart = ({
    todos_articulos, total, borrar_articulo, limpiar_articulo_carrito, cambiar_visibilidad, aumentar_cantidad, disminuir_cantidad, visible,
}) => {
    return (
        <div className={`con_carrito ${visible ? '' : 'h_carrito'}`}>
            <h2 className='cess'>Cesta de la compra</h2>
            <hr />     
            {todos_articulos.length ? (
                <>
                    <div className='f_articulo'>
                        {todos_articulos.map(articulo => (
                            <div className='cess_articulo' key={articulo.id}>
                                <div className='i_cess_articulo'>
                                <img className='img_carrito' src={articulo.img} alt={articulo.nombre} />
                                    <div className="cant_controles">
                                        <button className="cant_b" onClick={() => aumentar_cantidad(articulo)}>+</button>
                                        <button className="cant_b" onClick={() => disminuir_cantidad(articulo)}>-</button>
                                    </div>
                                    <span className='cant_carrito'>
                                        {articulo.cantidad}
                                    </span>
                                    <p className='nombre_carrito'>
                                        {articulo.nombre}
                                    </p>
                                    <span className='precio_carrito'>
                                        {articulo.precio}€
                                    </span>
                                </div>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='icono_cerrar'
                                    onClick={() => borrar_articulo(articulo)}
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className='c_total'>
                        <h3>TOTAL:</h3>
                        <span className='p_total'>{total.toFixed(2)}€</span>
                    </div>
                    <hr />
                    <button className='b_vaciar' onClick={limpiar_articulo_carrito}>
                        Vaciar Cesta
                    </button>
                    <button className='b_vaciar2'>Ir al pago</button>
                </>
            ) : (


                <div className='cesta_vacia'>
                    <p>No tiene artículos en su cesta de la compra.</p>
                    <button className='c_b' onClick={() => cambiar_visibilidad(false)}>X</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

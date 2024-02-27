import React, { useState } from 'react';
import Logo2 from './Logo2';
import Cart from './Cart';

export const Header = ({
  todos_articulos,
  set_todos_articulos,
  total,
  cant_articulos,
  set_cant_articulos,
  set_total,
}) => {
  const [visible, cambiar_visibilidad] = useState(false);
  const borrar_articulo = (articulo) => {
    const results = todos_articulos.filter((item) => item.id !== articulo.id);
    set_total(total - articulo.precio * articulo.cantidad);
    set_cant_articulos(cant_articulos - articulo.cantidad);
    set_todos_articulos(results);
  };

  const limpiar_articulo_carrito = () => {
    set_todos_articulos([]);
    set_total(0);
    set_cant_articulos(0);
  };
  
  const aumentar_cantidad = (articulo) => {
    const articulos = todos_articulos.map((item) =>
      item.id === articulo.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    set_todos_articulos([...articulos]);
    set_total(total + articulo.precio);
    set_cant_articulos(cant_articulos + 1);
  };

  const disminuir_cantidad = (articulo) => {
    if (articulo.cantidad === 1) {
      borrar_articulo(articulo);
    } else {
      const articulos = todos_articulos.map((item) =>
        item.id === articulo.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      set_todos_articulos([...articulos]);
      set_total(total - articulo.precio);
      set_cant_articulos(cant_articulos - 1);
    }
  };
  return (
    <header>
      <div className="logo2">
        <Logo2 />
      </div>
      <div className="desplazar">
        <nav>
          <ul>
            <li>
              <a href="../pages/VistaPrincipal">Home</a>
            </li>
            <li>
              <a href="https://www.instagram.com/tijerasdetriana/?hl=es">Sobre nosotros</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="c_icono">
        <div className="con_icono" onClick={() => cambiar_visibilidad(!visible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="i_carrito"
            style={{ marginRight: '80px', marginTop: '50px' }}
          >
            <path d="M1 1h4l2.68 13.397a2 2 0 002 1.603h8.644a2 2 0 002-1.603L23 5H6" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
          </svg>
          <div className="cant_ar">
            <span id="cont_articulos">{cant_articulos}</span>
          </div>
        </div>
        <Cart
          todos_articulos={todos_articulos}
          total={total}
          cant_articulos={cant_articulos}
          borrar_articulo={borrar_articulo}
          limpiar_articulo_carrito={limpiar_articulo_carrito}
          cambiar_visibilidad={cambiar_visibilidad}
          aumentar_cantidad={aumentar_cantidad}
          disminuir_cantidad={disminuir_cantidad}
          visible={visible}
        />
      </div>
    </header>
  );
};

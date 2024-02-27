import React from 'react';
import lista_articulo_data from '../assets/data.json';
import Button from './Button';

export const Lista_articulos = ({
  todos_articulos,
  set_todos_articulos,
  cant_articulos,
  set_cant_articulos,
  total,
  set_total,
}) => {
  const añadir_producto = (articulo) => {
    if (todos_articulos.find((item) => item.id === articulo.id)) {
      const articulos = todos_articulos.map((item) =>
        item.id === articulo.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      set_total(total + articulo.precio);
      set_cant_articulos(cant_articulos + 1);
      set_todos_articulos([...articulos]);
    } else {
      set_total(total + articulo.precio);
      set_cant_articulos(cant_articulos + 1);
      set_todos_articulos([...todos_articulos, { ...articulo, cantidad: 1 }]);
      añadir_cesta(articulo);
      alert("Articulo añadido a la cesta !");
    }
  };

  const añadir_cesta = async (articulo) => {
    const { id, nombre, img, precio } = articulo;
    try {
      const response = await fetch('http://localhost:8000/src/assets/cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id=${id}&nombre=${encodeURIComponent(nombre)}&img=${encodeURIComponent(img)}&precio=${precio}`,
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div className="c_items">
      {lista_articulo_data.map((articulo) => ( 
        <div className="item" key={articulo.id}>
          <figure>
            <img src={articulo.img} alt={articulo.nombre} />
          </figure>
          <div className="i_articulo">
            <h2>{articulo.nombre}</h2>
            <p className="price">{articulo.precio}€</p>
            <Button onClick={() => añadir_producto(articulo)} text="Añadir" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Sección catálogo
// import { useState } from 'react'
import {useState, useEffect, useContext} from 'react';
import Producto from './Producto';
import { CarritoContext } from '../Layout';

// sfc
const Catalogo = () => {
    const [productos, setProductos] = useState([]);

    // FORMULARIO PARA AÑADIR UN NUEVO PRODUCTO
    const [nuevoProducto, setNuevoProducto] = useState({
        name: "",
        description: "",
        price: "",
        servicesList: []
    }); // Estado para almacenar el nuevo producto y sus características

    // FORMULARIO PARA AÑADIR EL ARRAY DE SERVICIOS AL PRODUCTO
    const [nuevoServicio, setNuevoServicio] = useState(""); // Estado para almacenar sus servicios

    // FUNCIONES DE MANEJO DEL CARRITO
    const { carrito, agregarCarrito, eliminarDelCarrito } = useContext(CarritoContext);
    // const [filtro, setFiltro] = useState("");

    const [errores, setErrores] = useState("");


    const getProductos = async () => {
        try {
            const respuesta= await fetch('/backend/API/v1/productos.json');
            const objeto = await respuesta.json();
            setProductos(objeto.results);
        }
        catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };
    useEffect(() => {
        
        getProductos();
        
    }, []);

    const estaEnCarrito = (producto) => {
        return carrito.some(item => item.name === producto.name);
    };
    
    return ( 
        <>
        <h2>Estoy en el Catálogo</h2>


        {/* <button
                onClick={() => {
                    // si el texto del input no está vacío( !== "" )
                    if (nuevaTarea !== "") {
                        // añadir a las tareas existentes (...tareas), la nuevaTarea
                        setTareas([...tareas, nuevaTarea]);
                        // y después limpiar el input de entrada de tareas
                        setNuevaTarea(""); 
                    }
                }}>Añadir tarea
                       </button> */}


        <ul className='GridProductos'>

                {productos.map((producto) => (
                <li key={producto.name} >
                    <div className={`ProductContainer`}>
                    <p>{producto.name}</p>
                    <p>{producto.description}</p>
                    {/* <p>Servicios:</p> */}
                    
                    <ul>
                        {producto.servicesList.map((service, index) => (
                            <li key={index}>
                                {service}
                            </li>
                        ))}
                    </ul>

                        {/* botón del carrito */}
                        <button onClick={() => {
                            if (estaEnCarrito(producto)) {
                                eliminarDelCarrito(producto);
                            } else {
                                agregarCarrito(producto);
                            }
                        }}>
                            {estaEnCarrito(producto) ? "Eliminar del Carrito" : "Añadir al Carrito"}
                        </button>
                        
                {/* <p>{producto.type}</p> */}
                {/* <p>{producto.price}</p> */}

                </div>
                </li>
                ))}
            
        </ul>
        </>

);
}

export default Catalogo;
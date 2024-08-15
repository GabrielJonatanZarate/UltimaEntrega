import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="div row">
                    <div className="col text-center">
                        <p><img src="/images/bag.svg" alt="Carrito" width={80} /></p>
                        <h1>Tu carrito esta vacio</h1>
                        <h4>Te ayudamos a encontrar lo que buscas</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end">
                                    <button className="btn btn-light btn-sm" title="Vaciar Carrito">Vaciar carrito
                                        <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={clear} />
                                    </button>
                                </td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="aling-middle"><img src={item.image} alt={item.title} width={72} /></td>
                                    <td className="aling-middle">{item.title}</td>
                                    <td className="aling-middle text-center">${item.price} x {item.quantity}</td>
                                    <td className="aling-middle text-center">${item.price * item.quantity}</td>
                                    <td className="aling-middle text-end">
                                        <button className="btn btn-light btn-sm" title="Eliminar Producto">
                                            <img src="/images/trash.svg" alt="Eliminar Producto" width={24} onClick={() => { removeItem(item.id) }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="aling-middle text-center" colSpan={3}>Total a Pagar</td>
                                <td className="aling-middle text-center">${sumProducts()}</td>
                                <td className="aling-middle text-center">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
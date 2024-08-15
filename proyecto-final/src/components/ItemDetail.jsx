import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.image} alt={item.title}  className="img-fluid"/>
                </div>
                <div className="col-md-5">
                    <h1>{item.title}</h1>
                    <p><b>{item.price}</b></p>
                    <div className="alert alert-dark" role="alert"> Hasta 6 cuotas sin interes </div>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
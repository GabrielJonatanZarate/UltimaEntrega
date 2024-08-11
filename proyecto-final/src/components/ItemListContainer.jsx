import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList"

const ItemListContainer = ({ texto }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-danger" role="alert">
                        <ItemList></ItemList>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default ItemListContainer
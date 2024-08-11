import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ texto }) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === 9))
            }, 2000);
        })

        promesa.then(response => {
            setItem(response)
        })

    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer
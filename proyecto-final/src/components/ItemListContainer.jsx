import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { addDoc, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";

const ItemListContainer = ({ texto }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const db = getFirestore();
    //     const ItemsCollection = collection(db, "items",)

    //     arrayProductos.forEach(item => {
    //         addDoc(ItemsCollection, item)
    //     })

    //     console.log("proceso finalizado");
    // }, [])

        useEffect(() => {
        const db = getFirestore();
        const ItemsCollection = collection(db, "items",)
        const q = id ? query(ItemsCollection, where("category", "==", id)) : ItemsCollection;
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() })))
            }else {
                console.error("Error! no existe el documento"); 
            }
        })
    }, [id])



    return (
        <>
            {id ? "" : <Banner />}
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer
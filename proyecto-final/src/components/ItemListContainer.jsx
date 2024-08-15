import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList"
import { Link, useParams } from "react-router-dom";
import Banner from "./Banner";
import { doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";

const ItemListContainer = ({ texto }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id])




    // useEffect(() => {
    //     const db = getFirestore();
    //     const docRef = doc(db, "items", "L9vYyfkaZQzKjShvIqxQ")
    //     getDoc(docRef).then(snapShot => {
    //         if (snapShot.exists()) {
    //             setItems({ id: snapShot.id, ...snapShot.data() })
    //         } else {
    //             console.error("Error no existe el documento");
    //         }
    //     });
    // }, [])



    // useEffect(() => {
    //     const db = getFirestore();
    //     const ItemsCollection = collection(db, "items")
    //     getDocs(ItemsCollection).then(snapShot => {
    //         if (snapShot.size > 0) {
    //             setItems(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() })))
    //         }else {
    //             console.error("Error! no existe el documento"); 
    //         }
    //     })
    // }, [])


    // useEffect(() => {
    //     const db = getFirestore();
    //     const ItemsCollection = collection(db, "items",)
    //     // const q = query(ItemsCollection, where("precio", ">=", 3000)); ///mayor o igual que
    //     // const q = query(ItemsCollection, where("categoria", "==", "colas")); // igual a colas
    //     const q = query(ItemsCollection, where("categoria", "!=", "colas")); //distinto de colas
    //     getDocs(q).then(snapShot => {
    //         if (snapShot.size > 0) {
    //             setItems(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() })))
    //         }else {
    //             console.error("Error! no existe el documento"); 
    //         }
    //     })
    // }, [])



    return (
        <>
            {id ? "" : <Banner />}
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                    {/* {items.map(item => (
                    <div key={item.id} className="col-md-4 mb-3">
                        <div className="card border-0" >
                            <Link to={"/item/" + item.id}>
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><b>{item.nombre}</b></p>
                                <p className="card-text"><b>$ {item.precio}</b></p>
                            </div>
                        </div>
                    </div>
                    ))} */}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer
import {fetchProducts} from "../apis/products.ts";
import {useEffect, useState} from "react";

export function ProductList() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const resp = await fetchProducts()
            setProducts(resp)
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        void getProducts()
    }, [])

    return <div className="p-4">
        {isLoading ? <p>Loading...</p> : null}
        {products.map((product: any) => <p>{product.name}</p>)}
    </div>;
}
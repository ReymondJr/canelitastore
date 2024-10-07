import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid";

 const ProductData = () => {

    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const products = data.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: {
                        rate: product.rating.rate,
                        count: product.rating.count
                    }
                }))
                setProducts(products);
                console.log(products); // Muestra los datos en la consola
            })
            .catch(error => console.error('Error fetching data:', error)); // Manejo de errores
    }, [])
    console.log(product)
}
export default ProductData;

export const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            console.log(data)
        }).catch(error => console.error("Hay un error con la sola", error));
    }, [])
    console.log(categories)
}

export const ProductLimit = () =>{
     const [limits, setLimit] = useState([]);

     useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(data => {
                const limit = data.map(limit => ({
                    id: limit.id,
                    title: limit.title,
                    description: "Algo hecho para ti",
                    image: limit.image
                }))
                setLimit(limit);
                console.log(limit)
            })
            .catch(error => console.error('Error fetching data:', error));
     },[])
}

export const CategoriesEspecific = ({categoria}) => {
    const [Espec, setEspec] =useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(res=>res.json())
            .then(data => {
                const CategoriasEspe = data.map(catego => ({
                    id: catego.id,
                    title: catego.title,
                    price: catego.price,
                    description: catego.description,
                    category: catego.category,
                    image: catego.image,
                    rating: {
                        rate: catego.rating.rate,
                        count: catego.rating.count
                    }
                }))
                setEspec(CategoriasEspe);
                console.log(CategoriasEspe); // Muestra los datos en la consola
            })
            .catch(error => console.error('Error fetching data:', error)); // Manejo de errores
    }, [])

    console.log(Espec)
}

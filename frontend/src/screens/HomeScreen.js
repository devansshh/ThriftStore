import Product from '../components/Product';
import './HomeScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    
    return (
        <div className="homescreen">
            <h2 className="homescreen_title"></h2>
            <div className="homescreen_products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
                    products.map(product =>
                        <Product
                            key={product._id}
                            imageUrl={product.imageUrl} 
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            productId={product._id}
                        />
                    )
                }
            </div>
        </div>
    )
}
/**/

export default HomeScreen

import { useQuery } from 'react-query';

const useProducts = () => {

    const { data: products, isLoading, error } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()))


    return [products, isLoading, error];
};

export default useProducts;
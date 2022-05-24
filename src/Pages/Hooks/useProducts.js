import { useQuery } from 'react-query';

const useProducts = () => {

    const { data: products, isLoading, error } = useQuery('products', () => fetch('https://powerful-fjord-17237.herokuapp.com/products').then(res => res.json()))


    return [products, isLoading, error];
};

export default useProducts;
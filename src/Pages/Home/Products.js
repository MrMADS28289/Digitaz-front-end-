import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Loading from '../Shared/Loading';

const Products = () => {
    const [products, isLoading, error] = useProducts();

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    console.log(products);

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-primary'>Products</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    products.slice(0, 6).map(({ _id, name, img, description, minOrder, stock, unitPrice }) => (
                        <div key={_id} class="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-36' src={img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{name}</h2>
                                <h4 className='text-sm font-bold'>Unit Price: ${unitPrice}</h4>
                                <p className='text-xs font-bold'>Stock: {stock}</p>
                                <p className='text-xs font-bold'>Minimum Order: {minOrder}</p>
                                <p>{description}</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Order Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Products;
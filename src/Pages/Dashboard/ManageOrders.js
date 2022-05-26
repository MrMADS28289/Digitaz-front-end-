import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import DeleverdModal from './DeleverdModal';
import DeleteModal1 from './DeleteModal1'

const ManageOrders = () => {

    const [modalClose, setModalClose] = useState(null);
    const [storId, setStorId] = useState('');
    const [productName1, setProductName1] = useState('');
    const { data: orders, isLoading, error, refetch } = useQuery('orders', () => fetch('https://powerful-fjord-17237.herokuapp.com/allorders').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error?.massage)
    }
    // console.log(orders);
    const handleModalData = (id, name) => {
        setModalClose('open')
        setStorId(id)
        setProductName1(name)
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Manage all orders</span></h3>

            <div class="overflow-x-auto mx-6">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Stutas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(({ _id, productName, quantity, paid, price, transactionId, deleverd, email }, index) => <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{email}</td>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>
                                    {(!paid) && <p className='text-red-500 pl-3 rounded-full bg-warning'>Not paid</p>}
                                    {(paid) && <div>
                                        {
                                            deleverd ? <div>
                                                <p><span className='text-success'>Paid</span></p>
                                                <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                                            </div> : <label
                                                onClick={() => handleModalData(_id, productName)}
                                                for="deleverd-modal"
                                                className='btn btn-xs bg-green-500'>Dleverd</label>
                                        }
                                    </div>}
                                </td>
                                <td>
                                    {
                                        !paid &&
                                        <label
                                            onClick={() => setModalClose('open')}
                                            for="deleverd-modal1"
                                            className="btn btn-xs bg-red-500">Cancel</label>
                                    }
                                </td>
                                <td>
                                    {
                                        modalClose &&
                                        <DeleverdModal
                                            setModalClose={setModalClose}
                                            storId={storId}
                                            productName1={productName1}
                                            refetch={refetch}
                                        >
                                        </DeleverdModal>
                                    }
                                    {
                                        modalClose &&
                                        <DeleteModal1
                                            setModalClose={setModalClose}
                                            storId={storId}
                                            productName1={productName1}
                                            refetch={refetch}
                                        >
                                        </DeleteModal1>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageOrders;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import DeleteModal from './DeleteModal';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [modalClose, setModalClose] = useState(null);
    const [storId, setStorId] = useState('');
    const [productName1, setProductName1] = useState('');

    useEffect(() => {
        if (user) {
            fetch(`https://powerful-fjord-17237.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user, navigate, orders])

    const handleModalData = (id, name) => {
        setModalClose('open')
        setStorId(id)
        setProductName1(name)
    }

    return (
        <div>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>My Orders</span></h3>
            <div className="overflow-x-auto mx-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(({ _id, productName, quantity, paid, price, transactionId, deleverd }, index) => <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>
                                    {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-primary'>pay</button></Link>}
                                    {(price && paid) && <div>
                                        {
                                            deleverd ? <div>
                                                <p><span className='text-success'>Paid</span></p>
                                                <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                                            </div> : <p><span className='text-primary'>Pending...</span></p>
                                        }
                                    </div>}
                                </td>
                                <td>
                                    {
                                        !paid &&
                                        <label
                                            onClick={() => handleModalData(_id, productName)}
                                            for="delete-modal"
                                            className='btn btn-xs btn-denger'
                                        >Cancel</label>
                                    }
                                    {
                                        modalClose &&
                                        <DeleteModal
                                            setModalClose={setModalClose}
                                            storId={storId}
                                            productName1={productName1}
                                        >
                                        </DeleteModal>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
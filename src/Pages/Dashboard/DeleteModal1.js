import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ setModalClose, storId, productName1, refetch }) => {

    const handleDelete = () => {

        fetch(`https://powerful-fjord-17237.herokuapp.com/orders/${storId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setModalClose(null);
                toast.success('Delete Success');
                refetch();
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal1" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="delete-modal1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-lg my-4 text-red-500'>Are you sure? Cancel order for {productName1}</p>
                    <button
                        onClick={handleDelete}
                        className='btn btn-xs btn-denger'>Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
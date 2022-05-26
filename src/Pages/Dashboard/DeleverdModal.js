import React from 'react';
import { toast } from 'react-toastify';

const DeleverdModal = ({ setModalClose, _id, productName }) => {

    const handleDeleverd = () => {

        fetch(`https://powerful-fjord-17237.herokuapp.com/paidorders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json())
            .then(data => {
                setModalClose(null)
                toast.success('Deleverd Success')
            })
    }
    // console.log(productName)

    return (
        <div>
            <input type="checkbox" id="deleverd-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="deleverd-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-lg my-4 text-red-500'>Are you sure? Deleverd order for {productName}</p>
                    <button
                        onClick={handleDeleverd}
                        className='btn btn-xs btn-success'>Deleverd
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleverdModal;
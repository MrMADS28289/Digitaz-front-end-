import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import AdminModal from './AdminModal';

const MakeAdmin = () => {

    const [modalClose, setModalClose] = useState(null);
    const [storId, setStorId] = useState('');
    const [userName1, setUserName1] = useState('');
    const { data: users, isLoading, error, refetch } = useQuery('admin', () => fetch('https://powerful-fjord-17237.herokuapp.com/users').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    const handleMakeAdmin = (id, name) => {
        setModalClose('open')
        setStorId(id)
        setUserName1(name)
    }

    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Make Admin</span></h3>

            <div className="overflow-x-auto mx-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(({ _id, name, email, role }, index) => <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    {
                                        role === 'admin' ? <p className='text-warning text-lg font-bold'>Admin</p> :
                                            <label
                                                onClick={() => handleMakeAdmin(_id, name)}
                                                for="admin-modal"
                                                className="btn btn-xs bg-green-500">Make admin</label>
                                    }
                                </td>

                                <td>

                                    {
                                        modalClose &&
                                        <AdminModal
                                            refetch={refetch}
                                            setModalClose={setModalClose}
                                            storId={storId}
                                            userName1={userName1}
                                        >
                                        </AdminModal>
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

export default MakeAdmin;
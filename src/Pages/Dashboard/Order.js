// import React from 'react';
// import { Link } from 'react-router-dom';

// import DeleteModal from './DeleteModal';
// const Order = ({ order, index, setModalClose }) => {
//     return (
//         <tr>
//             <th>{index + 1}</th>
//             <td>{order.productName}</td>
//             <td>{order.quantity}</td>
//             <td>{order.price}</td>
//             <td>
//                 {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-primary'>pay</button></Link>}
//                 {(order.price && order.paid) && <div>
//                     <p><span className='text-success'>Paid</span></p>
//                     <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
//                 </div>}
//             </td>
//             <td>
//                 {
//                     !order.paid &&
//                     <label
//                         onClick={() => setModalClose('open')}
//                         for="delete-modal"
//                         className='btn btn-xs btn-denger'
//                     >Cancel</label>
//                 }
//                 {

//                     <DeleteModal
//                         setModalClose={setModalClose}
//                         order={order}
//                         productName={order.productName}
//                     >
//                     </DeleteModal>
//                 }
//             </td>
//         </tr>
//     );
// };

// export default Order;
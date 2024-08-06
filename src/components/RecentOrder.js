
import React from 'react';
import CustomerFeedback from './CustomerFeedback';

const RecentOrder = () => {
    const orders = [
        { name: 'John Doe', orderno: '#2024-08-01', amount: '$120.00', status: 'Delivered' },
        { name: 'Jane Smith', orderno: '#2024-08-02', amount: '$75.00', status: 'Pending' },
        { name: 'Sam Johnson', orderno: '#2024-08-03', amount: '$200.00', status: 'Cancelled' },
        { name: 'Anna Brown', orderno: '#2024-08-04', amount: '$50.00', status: 'Delivered' },
    ];

    return (
        <div className='order-feedback'>
            <div className="recent-orders-box">
                <div className="recent-orders-header">
                    <h3>Recent Orders</h3>
                </div>
                <div className="recent-orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th className='name'>Customer</th>
                                <th className='orderno'>Order</th>
                                <th className='amount'>Amount</th>
                                <th className='status'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.orderno}>
                                    <td className='name'>{order.name}</td>
                                    <td className='orderno'>{order.orderno}</td>
                                    <td className='amount'>{order.amount}</td>
                                    <td className='status' ><button className={`status ${order.status.toLowerCase()}`} >{order.status}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='feedback'>
                <CustomerFeedback />
            </div>
        </div>
    );
}

export default RecentOrder;

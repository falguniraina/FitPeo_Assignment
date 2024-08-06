import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruck, faTimesCircle, faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import progressImg from '../assets/images/progress.jpg';

const Dashboard = () => {
    const data = [
        { title: 'Total Orders', value: 75, icon: faBox, change: 3, direction: 'up' },
        { title: 'Total Delivered', value: 70, icon: faTruck, change: 3, direction: 'down' },
        { title: 'Total Cancelled', value: 5, icon: faTimesCircle, change: 3, direction: 'up' },
        { title: 'Total Revenue', value: '$12K', icon: faDollarSign, change: 3, direction: 'down' },
    ];

    const netProfit = '$6759.25';

    return (
        <div className='dashboard-wrapper'>
            <h1>Dashboard</h1>

            <div className="dashboard">
                <div className="dashboard-box">
                    {data.map((item, index) => (
                        <div className="data-box" key={index}>
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={item.icon} className="dashboard-icon" />
                            </div>
                            <h3>{item.title}</h3>
                            <div className='value-box'>
                                <div className="value-change">
                                    <p>{item.value}</p>
                                    <div className="change">
                                        <FontAwesomeIcon icon={item.direction === 'up' ? faArrowUp : faArrowDown} className={`arrow-icon ${item.direction}`} />
                                        <span>{item.change}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="net-profit">
                    <div className="profit-box">
                        <div className="profit-left">
                            <h3>Net Profit</h3>
                            <p>{netProfit}</p>
                            <div className="change">
                                <FontAwesomeIcon icon={faArrowUp} className="arrow-icon up" />
                                <span>3%</span>
                            </div>
                        </div>
                        <div className="profit-right">
                            <img src={progressImg} alt="Progress" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

